import { PirateScene } from '@/components/PirateScene';
import { t } from '@/data/i18n';
import type { Language, VoyageResult } from '@/types';
import { ArrowLeft, MapPin, Fish, Coins, Scale, Anchor } from 'lucide-react';

export function VoyageScreen({
  lang,
  voyage,
  onBack,
}: {
  lang: Language;
  voyage: VoyageResult;
  onBack: () => void;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0D0D1A] via-[#0F1A2A] to-[#0D0D1A] py-6 md:py-10 px-4">
      <div className="max-w-3xl w-full mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <button
            onClick={onBack}
            className="flex items-center gap-1.5 text-stone-400 hover:text-amber-100 text-sm transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {t('backToResults', lang)}
          </button>
        </div>

        <div className="text-center mb-6 animate-[fadeIn_0.5s_ease-out]">
          <h1
            className="text-2xl md:text-4xl font-bold text-amber-100 mb-1"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            {t('voyageTitle', lang)}
          </h1>
          <div className="flex items-center justify-center gap-1.5 text-amber-300/50 text-sm">
            <Anchor className="w-4 h-4" />
            <span>{t('voyageOrigin', lang)}: {voyage.origin}</span>
          </div>
        </div>

        {/* Hero scene */}
        <div className="relative rounded-2xl overflow-hidden h-40 md:h-48 mb-6 border border-amber-900/30 shadow-xl">
          <PirateScene scene="blackPearlShip" className="w-full h-full" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D1A]/70 to-transparent" />
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="bg-stone-900/60 rounded-xl border border-stone-700/40 p-3 text-center">
            <Fish className="w-5 h-5 text-amber-400 mx-auto mb-1.5" />
            <p className="text-amber-200/50 text-[10px] uppercase tracking-wider">{t('totalCatch', lang)}</p>
            <p className="text-amber-100 text-base md:text-lg font-bold">{voyage.totalCatch.toLocaleString()}</p>
            <p className="text-stone-500 text-[10px]">kg</p>
          </div>
          <div className="bg-stone-900/60 rounded-xl border border-stone-700/40 p-3 text-center">
            <Coins className="w-5 h-5 text-amber-400 mx-auto mb-1.5" />
            <p className="text-amber-200/50 text-[10px] uppercase tracking-wider">{t('totalRevenue', lang)}</p>
            <p className="text-amber-100 text-base md:text-lg font-bold">{voyage.totalRevenue.toLocaleString()}</p>
            <p className="text-stone-500 text-[10px]">MVR</p>
          </div>
          <div className="bg-stone-900/60 rounded-xl border border-amber-700/40 p-3 text-center bg-amber-950/20">
            <Scale className="w-5 h-5 text-amber-300 mx-auto mb-1.5" />
            <p className="text-amber-200/50 text-[10px] uppercase tracking-wider">{t('totalShare', lang)}</p>
            <p className="text-amber-200 text-base md:text-lg font-bold">{voyage.totalShare.toLocaleString()}</p>
            <p className="text-stone-500 text-[10px]">MVR</p>
          </div>
        </div>

        {/* Stops */}
        <h2 className="text-amber-200/70 text-sm font-semibold uppercase tracking-wider mb-3 flex items-center gap-2">
          <MapPin className="w-4 h-4" />
          {t('voyageStops', lang)}
        </h2>

        <div className="space-y-3 mb-6">
          {voyage.stops.map((stop, i) => (
            <div
              key={i}
              className="bg-stone-900/50 rounded-xl border border-stone-700/40 overflow-hidden animate-[fadeIn_0.4s_ease-out]"
              style={{ animationDelay: `${i * 60}ms`, animationFillMode: 'backwards' }}
            >
              <div className="flex flex-col sm:flex-row">
                {/* Scene thumbnail */}
                <div className="relative w-full sm:w-32 h-24 flex-shrink-0">
                  <PirateScene scene={stop.scene} className="w-full h-full" />
                </div>

                {/* Details */}
                <div className="flex-1 p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <p className="text-amber-100 font-semibold text-sm md:text-base">{stop.name}</p>
                      <p className="text-stone-500 text-xs">{stop.fishType}</p>
                    </div>
                    <span className="text-amber-500/40 text-xs font-mono">#{i + 1}</span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                    <div>
                      <p className="text-stone-500 text-[10px] uppercase">{t('catch', lang)}</p>
                      <p className="text-stone-300 font-medium">{stop.catchKg.toLocaleString()} kg</p>
                    </div>
                    <div>
                      <p className="text-stone-500 text-[10px] uppercase">{t('rate', lang)}</p>
                      <p className="text-stone-300 font-medium">{stop.rate} MVR</p>
                    </div>
                    <div>
                      <p className="text-stone-500 text-[10px] uppercase">{t('revenue', lang)}</p>
                      <p className="text-stone-300 font-medium">{stop.revenue.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-stone-500 text-[10px] uppercase">{t('share', lang)}</p>
                      <p className="text-amber-300 font-medium">{stop.share.toLocaleString()}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bonuses */}
        {voyage.bonuses.length > 0 && (
          <div className="bg-stone-900/40 rounded-xl border border-amber-900/20 p-4 mb-6">
            <h3 className="text-amber-200/60 text-xs font-semibold uppercase tracking-wider mb-3">
              {t('bonuses', lang)}
            </h3>
            <div className="flex flex-wrap gap-2">
              {voyage.bonuses.map((b, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1.5 bg-amber-950/40 border border-amber-800/30 rounded-full px-3 py-1.5 text-xs text-amber-200/80"
                >
                  <Fish className="w-3 h-3" />
                  {b.name} — {b.kg} kg
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Back button */}
        <button
          onClick={onBack}
          className="w-full flex items-center justify-center gap-2 bg-stone-800/60 hover:bg-stone-700/60 text-amber-100 border border-amber-900/40 font-medium py-3 px-4 rounded-xl transition-all text-sm active:scale-[0.98]"
        >
          <ArrowLeft className="w-4 h-4" />
          {t('backToResults', lang)}
        </button>
      </div>
    </div>
  );
}
