import { useEffect, useState } from 'react';
import { PirateScene } from '@/components/PirateScene';
import { t } from '@/data/i18n';
import type { Language, PirateQuote } from '@/types';
import { ChevronRight } from 'lucide-react';

export function QuoteScreen({
  lang,
  quote,
  onContinue,
}: {
  lang: Language;
  quote: PirateQuote;
  onContinue: () => void;
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-4 py-10 cursor-pointer relative overflow-hidden"
      onClick={onContinue}
    >
      <PirateScene scene={quote.scene} className="absolute inset-0 w-full h-full" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D1A]/70 via-[#0D0D1A]/60 to-[#0D0D1A]/85" />

      <div
        className={`relative z-10 max-w-lg w-full text-center transition-all duration-700 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <div className="mb-6 relative inline-block">
          <PirateScene
            scene={quote.scene}
            className="w-full max-w-sm h-48 md:h-56 rounded-2xl shadow-2xl border border-amber-500/20"
          />
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-40 h-1 bg-amber-500/30 rounded-full blur-sm" />
        </div>

        <p
          className="text-amber-50 text-lg md:text-2xl leading-relaxed italic mb-4 px-2"
          style={{ fontFamily: 'Georgia, serif' }}
        >
          "{lang === 'en' ? quote.text : quote.textDv}"
        </p>

        <p className="text-amber-300/50 text-xs md:text-sm mb-8 px-4">
          {lang === 'en' ? quote.caption : quote.captionDv}
        </p>

        <button
          className="inline-flex items-center gap-1.5 text-amber-300/70 hover:text-amber-100 text-sm transition-colors animate-pulse"
        >
          {t('continue', lang)}
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
