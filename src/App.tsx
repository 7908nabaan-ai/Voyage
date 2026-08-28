import { useState, useEffect, useCallback } from 'react';
import type {
  AppPhase,
  Language,
  ParticipantIdentity,
  ScoreResult,
  VoyageResult,
  PirateQuote,
} from '@/types';
import { QUESTIONS } from '@/data/questions';
import { QUOTES } from '@/data/quotes';
import { scoreAssessment } from '@/data/scoring';
import { generateVoyage, VOYAGE_ORIGINS } from '@/data/voyage';
import { LoadingScreen } from '@/components/LoadingScreen';
import { DisclaimerScreen } from '@/components/DisclaimerScreen';
import { IdentityScreen } from '@/components/IdentityScreen';
import { QuestionCard } from '@/components/QuestionCard';
import { QuoteScreen } from '@/components/QuoteScreen';
import { ResultsScreen } from '@/components/ResultsScreen';
import { VoyageScreen } from '@/components/VoyageScreen';
import { Globe } from 'lucide-react';

const STORAGE_KEY = 'blackPearlVoyage_state_v1';

interface SavedState {
  phase: AppPhase;
  identity: ParticipantIdentity | null;
  answers: Record<number, string>;
  questionIndex: number;
  result: ScoreResult | null;
  seenQuoteIndices: number[];
  hasSeenDisclaimer: boolean;
}

function loadState(): SavedState | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as SavedState;
  } catch {
    return null;
  }
}

function saveState(state: Partial<SavedState>) {
  try {
    const existing = loadState() ?? {} as SavedState;
    const merged = { ...existing, ...state } as SavedState;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
  } catch {
    // ignore quota errors
  }
}

function clearState() {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    // ignore
  }
}

export default function App() {
  const [phase, setPhase] = useState<AppPhase>('loading');
  const [lang, setLang] = useState<Language>('en');
  const [identity, setIdentity] = useState<ParticipantIdentity | null>(null);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [questionIndex, setQuestionIndex] = useState(0);
  const [result, setResult] = useState<ScoreResult | null>(null);
  const [voyage, setVoyage] = useState<VoyageResult | null>(null);
  const [currentQuote, setCurrentQuote] = useState<PirateQuote | null>(null);
  const [seenQuoteIndices, setSeenQuoteIndices] = useState<number[]>([]);
  const [hasSeenDisclaimer, setHasSeenDisclaimer] = useState(false);
  const [hasSavedSession, setHasSavedSession] = useState(false);
  const [showQuoteAfterAnswer, setShowQuoteAfterAnswer] = useState(false);

  // Check for saved session on mount
  useEffect(() => {
    const saved = loadState();
    if (saved) {
      if (saved.hasSeenDisclaimer) setHasSeenDisclaimer(true);
      if (saved.identity && saved.answers && Object.keys(saved.answers).length > 0 && !saved.result) {
        setHasSavedSession(true);
      }
    }
  }, []);

  const handleLoadingComplete = useCallback(() => {
    setPhase('disclaimer');
  }, []);

  const handleDisclaimerAccept = useCallback(() => {
    setHasSeenDisclaimer(true);
    saveState({ hasSeenDisclaimer: true });
    setPhase('identity');
  }, []);

  const handleIdentitySubmit = useCallback((id: ParticipantIdentity) => {
    setIdentity(id);
    setAnswers({});
    setQuestionIndex(0);
    setSeenQuoteIndices([]);
    setResult(null);
    saveState({
      identity: id,
      answers: {},
      questionIndex: 0,
      seenQuoteIndices: [],
      result: null,
      phase: 'assessment',
    });
    setPhase('assessment');
  }, []);

  const handleAnswer = useCallback((questionId: number, optionId: string) => {
    setAnswers((prev) => {
      const updated = { ...prev, [questionId]: optionId };
      saveState({ answers: updated });
      return updated;
    });
  }, []);

  const getRandomQuote = useCallback(() => {
    // Get a random quote that hasn't been seen yet
    const unseen = QUOTES.map((q, i) => ({ q, i })).filter(
      ({ i }) => !seenQuoteIndices.includes(i)
    );
    const pool = unseen.length > 0 ? unseen : QUOTES.map((q, i) => ({ q, i }));
    const pick = pool[Math.floor(Math.random() * pool.length)];
    if (pick) {
      setCurrentQuote(pick.q);
      setSeenQuoteIndices((prev) => [...prev, pick.i]);
      saveState({ seenQuoteIndices: [...seenQuoteIndices, pick.i] });
    }
  }, [seenQuoteIndices]);

  const handleNext = useCallback(() => {
    const isLastQuestion = questionIndex === QUESTIONS.length - 1;
    
    if (isLastQuestion) {
      // Don't show quote on finish
      setQuestionIndex((prev) => {
        const nextIdx = prev + 1;
        saveState({ questionIndex: nextIdx });
        return nextIdx;
      });
    } else {
      // Show quote before moving to next question
      getRandomQuote();
      setShowQuoteAfterAnswer(true);
    }
  }, [questionIndex, getRandomQuote]);

  const handleBack = useCallback(() => {
    setQuestionIndex((prev) => {
      const nextIdx = Math.max(0, prev - 1);
      saveState({ questionIndex: nextIdx });
      return nextIdx;
    });
  }, []);

  const handleFinish = useCallback(() => {
    const computed = scoreAssessment(answers);
    setResult(computed);
    saveState({ result: computed, phase: 'results' });
    setPhase('results');
  }, [answers]);

  const handleQuoteContinue = useCallback(() => {
    setCurrentQuote(null);
    setShowQuoteAfterAnswer(false);
    setQuestionIndex((prev) => {
      const nextIdx = prev + 1;
      saveState({ questionIndex: nextIdx });
      return nextIdx;
    });
  }, []);

  const handleRetake = useCallback(() => {
    clearState();
    setIdentity(null);
    setAnswers({});
    setQuestionIndex(0);
    setResult(null);
    setSeenQuoteIndices([]);
    setVoyage(null);
    setHasSavedSession(false);
    setShowQuoteAfterAnswer(false);
    setPhase('identity');
  }, []);

  const handleViewVoyage = useCallback(() => {
    if (!identity) return;
    const origin = VOYAGE_ORIGINS[Math.floor(Math.random() * VOYAGE_ORIGINS.length)];
    const v = generateVoyage(origin);
    setVoyage(v);
    setPhase('voyage');
  }, [identity]);

  const handleBackToResults = useCallback(() => {
    setPhase('results');
  }, []);

  const handleResume = useCallback(() => {
    const saved = loadState();
    if (!saved || !saved.identity) return;
    setIdentity(saved.identity);
    setAnswers(saved.answers || {});
    setQuestionIndex(saved.questionIndex || 0);
    setSeenQuoteIndices(saved.seenQuoteIndices || []);
    setHasSavedSession(false);
    setPhase('assessment');
  }, []);

  const handleStartNew = useCallback(() => {
    clearState();
    setHasSavedSession(false);
    setPhase('identity');
  }, []);

  const toggleLang = useCallback(() => {
    setLang((l) => (l === 'en' ? 'dv' : 'en'));
  }, []);

  // Language toggle button (available on all screens except loading)
  const showLangToggle = phase !== 'loading';

  return (
    <div className="min-h-screen">
      {showLangToggle && (
        <button
          onClick={toggleLang}
          className="fixed top-3 right-3 z-50 flex items-center gap-1.5 bg-stone-900/70 backdrop-blur-sm border border-amber-900/40 text-amber-200/70 hover:text-amber-100 text-xs px-3 py-1.5 rounded-lg transition-colors"
        >
          <Globe className="w-3.5 h-3.5" />
          {lang === 'en' ? 'Dhivehi' : 'English'}
        </button>
      )}

      {phase === 'loading' && <LoadingScreen lang={lang} onComplete={handleLoadingComplete} />}

      {phase === 'disclaimer' && (
        <>
          {hasSavedSession && (
            <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-b from-[#0D0D1A] via-[#101826] to-[#0D0D1A]">
              <div className="max-w-md w-full bg-stone-900/70 rounded-2xl border border-amber-900/40 p-6 text-center">
                <p className="text-amber-100 text-lg font-semibold mb-4">{lang === 'en' ? 'Resume your voyage?' : 'ދަތުރު އަލުން ފެށައް؟'}</p>
                <p className="text-stone-400 text-sm mb-5">
                  {lang === 'en'
                    ? 'You have an unfinished assessment. Continue where you left off or start fresh.'
                    : 'އަމީގެ ސުވާލު ތައް ފުންނައި ހުއްދަ. އެތާގައި ހުއްޓާ ކުރި ނުވަތަ އާ ފެށައް.'}
                </p>
                <div className="flex gap-3">
                  <button
                    onClick={handleResume}
                    className="flex-1 bg-gradient-to-r from-amber-700 to-amber-600 hover:from-amber-600 hover:to-amber-500 text-amber-50 font-semibold py-2.5 rounded-xl text-sm transition-all active:scale-[0.98]"
                  >
                    {lang === 'en' ? 'Resume' : 'އަލުން ފެށައް'}
                  </button>
                  <button
                    onClick={handleStartNew}
                    className="flex-1 bg-stone-800/60 hover:bg-stone-700/60 text-stone-300 border border-stone-700/50 font-medium py-2.5 rounded-xl text-sm transition-all active:scale-[0.98]"
                  >
                    {lang === 'en' ? 'Start New' : 'އާ ފެށައް'}
                  </button>
                </div>
              </div>
            </div>
          )}
          {!hasSavedSession && <DisclaimerScreen lang={lang} onAccept={handleDisclaimerAccept} />}
        </>
      )}

      {phase === 'identity' && (
        <IdentityScreen lang={lang} onSubmit={handleIdentitySubmit} />
      )}

      {phase === 'assessment' && !showQuoteAfterAnswer && (
        <QuestionCard
          lang={lang}
          questionIndex={questionIndex}
          answers={answers}
          onAnswer={handleAnswer}
          onBack={handleBack}
          onNext={handleNext}
          onFinish={handleFinish}
        />
      )}

      {phase === 'assessment' && showQuoteAfterAnswer && currentQuote && (
        <QuoteScreen lang={lang} quote={currentQuote} onContinue={handleQuoteContinue} />
      )}

      {phase === 'results' && result && identity && (
        <ResultsScreen
          lang={lang}
          identity={identity}
          result={result}
          onRetake={handleRetake}
          onViewVoyage={handleViewVoyage}
        />
      )}

      {phase === 'voyage' && voyage && (
        <VoyageScreen lang={lang} voyage={voyage} onBack={handleBackToResults} />
      )}
    </div>
  );
}
