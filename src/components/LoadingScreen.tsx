import { useEffect, useState } from 'react';
import { PirateScene } from '@/components/PirateScene';
import { t } from '@/data/i18n';
import type { Language } from '@/types';

export function LoadingScreen({ lang, onComplete }: { lang: Language; onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return p + 3;
      });
    }, 60);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <PirateScene scene="blackPearlShip" className="absolute inset-0 w-full h-full" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D1A]/60 to-[#0D0D1A]/80" />
      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        <div className="mb-8 relative">
          <PirateScene scene="fogOcean" className="w-64 h-40 rounded-2xl shadow-2xl border border-amber-500/20" />
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-32 h-1 bg-amber-500/40 rounded-full blur-sm" />
        </div>
        <h1 className="text-3xl md:text-5xl font-bold text-amber-100 mb-2 tracking-wide" style={{ fontFamily: 'Georgia, serif' }}>
          {t('appTitle', lang)}
        </h1>
        <p className="text-amber-300/70 text-sm md:text-base mb-8">{t('appSubtitle', lang)}</p>
        <div className="w-64 md:w-80">
          <div className="h-2 bg-stone-800/80 rounded-full overflow-hidden border border-amber-900/40">
            <div
              className="h-full bg-gradient-to-r from-amber-600 to-amber-400 transition-all duration-100 ease-linear rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-amber-200/50 text-xs mt-3">{t('loading', lang)}</p>
        </div>
      </div>
    </div>
  );
}
