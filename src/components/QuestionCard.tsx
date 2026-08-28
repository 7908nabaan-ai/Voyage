import { useEffect, useState } from 'react';
import { t } from '@/data/i18n';
import { QUESTIONS } from '@/data/questions';
import type { Language, StageId } from '@/types';
import { ChevronLeft, ChevronRight, Flag, Skull } from 'lucide-react';

const STAGE_MAX: Record<StageId, number> = { 1: 12, 2: 12, 3: 12 };
const STAGE_LABELS: Record<StageId, string> = { 1: 'stage1Label', 2: 'stage2Label', 3: 'stage3Label' };

export function QuestionCard({
  lang,
  questionIndex,
  answers,
  onAnswer,
  onBack,
  onNext,
  onFinish,
}: {
  lang: Language;
  questionIndex: number;
  answers: Record<number, string>;
  onAnswer: (questionId: number, optionId: string) => void;
  onBack: () => void;
  onNext: () => void;
  onFinish: () => void;
}) {
  const question = QUESTIONS[questionIndex];
  const [selected, setSelected] = useState<string | null>(answers[question.id] ?? null);
  const [animKey, setAnimKey] = useState(0);

  useEffect(() => {
    setSelected(answers[question.id] ?? null);
    setAnimKey((k) => k + 1);
  }, [questionIndex, question.id, answers]);

  const handleSelect = (optionId: string) => {
    setSelected(optionId);
    onAnswer(question.id, optionId);
  };

  const isFirst = questionIndex === 0;
  const isLast = questionIndex === QUESTIONS.length - 1;
  const currentStage = question.stage;
  const stageStartIdx = QUESTIONS.findIndex((q) => q.stage === currentStage);
  const stageEndIdx = QUESTIONS.map((q, i) => (q.stage === currentStage ? i : -1)).filter((i) => i >= 0).pop() ?? 0;
  const stageProgress = ((questionIndex - stageStartIdx) / (stageEndIdx - stageStartIdx + 1)) * 100;
  const overallProgress = ((questionIndex + 1) / QUESTIONS.length) * 100;

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#0D0D1A] via-[#101826] to-[#0D0D1A]">
      {/* Top progress bar */}
      <div className="w-full h-1 bg-stone-800/50">
        <div
          className="h-full bg-gradient-to-r from-amber-700 to-amber-400 transition-all duration-300"
          style={{ width: `${overallProgress}%` }}
        />
      </div>

      <div className="flex-1 flex flex-col max-w-2xl w-full mx-auto px-4 py-6 md:py-10">
        {/* Stage indicator */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              {([1, 2, 3] as StageId[]).map((s) => (
                <div
                  key={s}
                  className={`h-2 w-8 rounded-full transition-colors ${
                    currentStage === s
                      ? 'bg-amber-500'
                      : currentStage > s
                      ? 'bg-amber-700/60'
                      : 'bg-stone-700'
                  }`}
                />
              ))}
            </div>
            <span className="text-amber-200/60 text-xs font-medium ml-1">
              {t('stage', lang)} {currentStage} {t('of', lang)} 3 — {t(STAGE_LABELS[currentStage], lang)}
            </span>
          </div>
          <span className="text-stone-500 text-xs">
            {questionIndex + 1} / {QUESTIONS.length}
          </span>
        </div>

        {/* Stage mini progress */}
        <div className="w-full h-0.5 bg-stone-800/40 mb-6 rounded-full">
          <div
            className="h-full bg-amber-600/40 rounded-full transition-all duration-300"
            style={{ width: `${stageProgress}%` }}
          />
        </div>

        {/* Question */}
        <div key={animKey} className="bg-stone-900/60 backdrop-blur-sm rounded-2xl border border-amber-900/30 shadow-xl p-5 md:p-7 mb-5 animate-[fadeIn_0.3s_ease-out]">
          {question.safetyTrigger && (
            <div className="flex items-center gap-1.5 mb-3 text-red-400/80 text-xs">
              <Skull className="w-3.5 h-3.5" />
              <span className="uppercase tracking-wider font-semibold">Deep Waters</span>
            </div>
          )}
          <p className="text-amber-50 text-base md:text-lg leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
            {lang === 'en' ? question.prompt : question.promptDv}
          </p>
        </div>

        {/* Options */}
        <div className="space-y-2.5 mb-6">
          {question.options.map((opt) => {
            const isSelected = selected === opt.id;
            return (
              <button
                key={opt.id}
                onClick={() => handleSelect(opt.id)}
                className={`w-full text-left px-4 py-3.5 rounded-xl border transition-all duration-150 text-sm md:text-base ${
                  isSelected
                    ? 'bg-amber-600/20 border-amber-500 text-amber-50 shadow-lg shadow-amber-900/20'
                    : 'bg-stone-800/40 border-stone-700/50 text-stone-300 hover:border-amber-700/40 hover:bg-stone-800/60'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-5 h-5 rounded-full border-2 flex-shrink-0 flex items-center justify-center transition-colors ${
                    isSelected ? 'border-amber-400 bg-amber-500/30' : 'border-stone-600'
                  }`}>
                    {isSelected && <div className="w-2 h-2 rounded-full bg-amber-300" />}
                  </div>
                  <span>{lang === 'en' ? opt.label : opt.labelDv}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between gap-3 mt-auto">
          <button
            onClick={onBack}
            disabled={isFirst}
            className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
              isFirst
                ? 'text-stone-600 cursor-not-allowed'
                : 'text-stone-300 hover:text-amber-100 hover:bg-stone-800/60'
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
            {t('back', lang)}
          </button>

          {!isLast ? (
            <button
              onClick={onNext}
              disabled={!selected}
              className={`flex items-center gap-1.5 px-6 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                selected
                  ? 'bg-gradient-to-r from-amber-700 to-amber-600 hover:from-amber-600 hover:to-amber-500 text-amber-50 shadow-lg active:scale-[0.98]'
                  : 'bg-stone-800/40 text-stone-600 cursor-not-allowed border border-stone-700/40'
              }`}
            >
              {t('next', lang)}
              <ChevronRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={onFinish}
              disabled={!selected}
              className={`flex items-center gap-1.5 px-6 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                selected
                  ? 'bg-gradient-to-r from-red-700 to-red-600 hover:from-red-600 hover:to-red-500 text-red-50 shadow-lg active:scale-[0.98]'
                  : 'bg-stone-800/40 text-stone-600 cursor-not-allowed border border-stone-700/40'
              }`}
            >
              <Flag className="w-4 h-4" />
              {t('finish', lang)}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
