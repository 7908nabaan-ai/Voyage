import { t } from '@/data/i18n';
import type { Language } from '@/types';
import { AlertTriangle, Ship } from 'lucide-react';

export function DisclaimerScreen({
  lang,
  onAccept,
}: {
  lang: Language;
  onAccept: () => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-10 bg-gradient-to-b from-[#0D0D1A] via-[#101826] to-[#0D0D1A]">
      <div className="max-w-xl w-full bg-stone-900/70 backdrop-blur-sm rounded-2xl border border-amber-900/40 shadow-2xl p-6 md:p-8">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 rounded-full bg-amber-900/40 flex items-center justify-center border border-amber-700/40">
            <AlertTriangle className="w-5 h-5 text-amber-400" />
          </div>
          <h2 className="text-xl md:text-2xl font-bold text-amber-100" style={{ fontFamily: 'Georgia, serif' }}>
            {t('disclaimerTitle', lang)}
          </h2>
        </div>
        <p className="text-stone-300 text-sm md:text-base leading-relaxed mb-6">
          {t('disclaimerBody', lang)}
        </p>
        <button
          onClick={onAccept}
          className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-amber-700 to-amber-600 hover:from-amber-600 hover:to-amber-500 text-amber-50 font-semibold py-3 px-6 rounded-xl transition-all duration-200 shadow-lg hover:shadow-amber-900/40 active:scale-[0.98]"
        >
          <Ship className="w-5 h-5" />
          {t('accept', lang)}
        </button>
      </div>
    </div>
  );
}
