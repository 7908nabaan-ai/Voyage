import { useState } from 'react';
import { PirateScene } from '@/components/PirateScene';
import { t } from '@/data/i18n';
import { TIERS } from '@/data/scoring';
import type { Language, ScoreResult, ParticipantIdentity, StageId } from '@/types';
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
} from 'recharts';
import {
  Download,
  RotateCcw,
  Ship,
  AlertTriangle,
  Award,
} from 'lucide-react';
import { generatePdfReport } from '@/utils/pdf';

const STAGE_LABELS: Record<StageId, string> = { 1: 'stage1Label', 2: 'stage2Label', 3: 'stage3Label' };

export function ResultsScreen({
  lang,
  identity,
  result,
  onRetake,
  onViewVoyage,
}: {
  lang: Language;
  identity: ParticipantIdentity;
  result: ScoreResult;
  onRetake: () => void;
  onViewVoyage: () => void;
}) {
  const [downloading, setDownloading] = useState(false);

  const tier = result.tier;
  const chartData = result.stages.map((s) => ({
    stage: t(STAGE_LABELS[s.stage], lang).split(' & ')[0],
    score: Math.round((s.score / s.max) * 100),
    fullMark: 100,
  }));

  const handleDownload = async () => {
    setDownloading(true);
    try {
      await generatePdfReport(identity, result, lang);
    } finally {
      setDownloading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0D0D1A] via-[#101826] to-[#0D0D1A] py-6 md:py-10 px-4">
      <div className="max-w-2xl w-full mx-auto">
        {/* Header */}
        <div className="text-center mb-6 animate-[fadeIn_0.5s_ease-out]">
          <h1
            className="text-2xl md:text-4xl font-bold text-amber-100 mb-1"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            {t('resultsTitle', lang)}
          </h1>
          <p className="text-amber-300/50 text-sm">
            {identity.name} — {identity.age} {lang === 'en' ? 'yrs' : 'އަހަރު'}
          </p>
        </div>

        {/* Safety Banner */}
        {result.safetyTriggered && (
          <div className="mb-5 bg-red-950/50 border border-red-700/50 rounded-2xl p-4 flex gap-3 animate-[fadeIn_0.4s_ease-out]">
            <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
            <p className="text-red-200/90 text-sm leading-relaxed">{t('safetyMessage', lang)}</p>
          </div>
        )}

        {/* Score Card */}
        <div
          className="bg-stone-900/70 backdrop-blur-sm rounded-2xl border border-amber-900/40 shadow-2xl p-6 md:p-8 mb-5 animate-[fadeInScale_0.5s_ease-out]"
        >
          <div className="flex flex-col items-center mb-6">
            <div
              className="w-28 h-28 rounded-full flex items-center justify-center mb-4 border-4 relative"
              style={{ borderColor: tier.color }}
            >
              <div
                className="absolute inset-0 rounded-full opacity-20 blur-xl"
                style={{ backgroundColor: tier.color }}
              />
              <span className="relative text-3xl font-bold" style={{ color: tier.color }}>
                {Math.round(result.total)}
              </span>
            </div>
            <div className="text-center">
              <p className="text-amber-200/60 text-xs uppercase tracking-wider mb-1">{t('totalScore', lang)}</p>
              <div className="flex items-center gap-2 justify-center">
                <Award className="w-5 h-5" style={{ color: tier.color }} />
                <h2 className="text-lg md:text-xl font-bold" style={{ color: tier.color }}>
                  {lang === 'en' ? tier.label : tier.labelDv}
                </h2>
              </div>
              <p className="text-stone-400 text-xs md:text-sm mt-2 max-w-sm leading-relaxed">
                {lang === 'en' ? tier.description : tier.descriptionDv}
              </p>
            </div>
          </div>

          {/* Radar Chart */}
          <div className="w-full h-56 md:h-64 mt-2">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={chartData} outerRadius="70%">
                <PolarGrid stroke="#3A2A1E" />
                <PolarAngleAxis
                  dataKey="stage"
                  tick={{ fill: '#D6B89A', fontSize: 11 }}
                />
                <PolarRadiusAxis
                  domain={[0, 100]}
                  tick={{ fill: '#5A4A3A', fontSize: 9 }}
                  stroke="#3A2A1E"
                />
                <Radar
                  name="Score"
                  dataKey="score"
                  stroke={tier.color}
                  fill={tier.color}
                  fillOpacity={0.35}
                  strokeWidth={2}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>

          {/* Stage Breakdown */}
          <div className="space-y-3 mt-4">
            {result.stages.map((s) => {
              const pct = Math.round((s.score / s.max) * 100);
              return (
                <div key={s.stage}>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-stone-300 text-xs md:text-sm">
                      {t('stage', lang)} {s.stage}: {t(STAGE_LABELS[s.stage], lang)}
                    </span>
                    <span className="text-amber-200/70 text-xs font-medium">{pct}%</span>
                  </div>
                  <div className="h-2 bg-stone-800/60 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-700 ease-out"
                      style={{ width: `${pct}%`, backgroundColor: tier.color }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Tier Ladder */}
        <div className="bg-stone-900/50 rounded-2xl border border-stone-700/40 p-4 mb-5">
          <p className="text-amber-200/50 text-xs uppercase tracking-wider mb-3 text-center">
            {lang === 'en' ? 'All Tiers' : 'ހުރިހާ ޓަޔަރ'}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {TIERS.map((tt) => (
              <div
                key={tt.id}
                className={`rounded-xl p-2.5 text-center border transition-all ${
                  tt.id === tier.id
                    ? 'border-2 bg-stone-800/60'
                    : 'border-stone-700/30 opacity-50'
                }`}
                style={tt.id === tier.id ? { borderColor: tt.color } : undefined}
              >
                <div className="w-3 h-3 rounded-full mx-auto mb-1.5" style={{ backgroundColor: tt.color }} />
                <p className="text-[10px] md:text-xs font-medium" style={{ color: tt.id === tier.id ? tt.color : '#888' }}>
                  {lang === 'en' ? tt.label : tt.labelDv}
                </p>
                <p className="text-stone-500 text-[9px] md:text-[10px] mt-0.5">
                  {tt.min}-{tt.max}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <button
            onClick={handleDownload}
            disabled={downloading}
            className="flex items-center justify-center gap-2 bg-stone-800/60 hover:bg-stone-700/60 text-amber-100 border border-amber-900/40 font-medium py-3 px-4 rounded-xl transition-all text-sm active:scale-[0.98] disabled:opacity-50"
          >
            <Download className="w-4 h-4" />
            {downloading ? '...' : t('downloadPdf', lang)}
          </button>
          <button
            onClick={onViewVoyage}
            className="flex items-center justify-center gap-2 bg-gradient-to-r from-amber-700 to-amber-600 hover:from-amber-600 hover:to-amber-500 text-amber-50 font-semibold py-3 px-4 rounded-xl transition-all text-sm shadow-lg active:scale-[0.98]"
          >
            <Ship className="w-4 h-4" />
            {t('viewVoyage', lang)}
          </button>
          <button
            onClick={onRetake}
            className="flex items-center justify-center gap-2 bg-stone-800/60 hover:bg-stone-700/60 text-stone-300 border border-stone-700/50 font-medium py-3 px-4 rounded-xl transition-all text-sm active:scale-[0.98]"
          >
            <RotateCcw className="w-4 h-4" />
            {t('retake', lang)}
          </button>
        </div>

        {/* Footer scene */}
        <div className="mt-6 relative rounded-2xl overflow-hidden h-32 border border-amber-900/20">
          <PirateScene scene="blackPearlShip" className="w-full h-full" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D1A]/80 to-transparent" />
        </div>
      </div>
    </div>
  );
}
