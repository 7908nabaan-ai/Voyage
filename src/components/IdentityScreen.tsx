import { useState } from 'react';
import { t } from '@/data/i18n';
import type { Language, ParticipantIdentity } from '@/types';
import { User, Anchor } from 'lucide-react';

export function IdentityScreen({
  lang,
  onSubmit,
}: {
  lang: Language;
  onSubmit: (identity: ParticipantIdentity) => void;
}) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [isPirate, setIsPirate] = useState('');
  const [error, setError] = useState(false);

  const valid = name.trim() && age.trim() && gender && isPirate;

  const handleSubmit = () => {
    if (!valid) {
      setError(true);
      return;
    }
    onSubmit({ name: name.trim(), age: age.trim(), gender, isPirate });
  };

  const inputClass =
    'w-full bg-stone-800/60 border rounded-xl px-4 py-3 text-amber-50 placeholder-stone-500 outline-none transition-colors text-sm md:text-base';

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-10 bg-gradient-to-b from-[#0D0D1A] via-[#101826] to-[#0D0D1A]">
      <div className="max-w-lg w-full bg-stone-900/70 backdrop-blur-sm rounded-2xl border border-amber-900/40 shadow-2xl p-6 md:p-8">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 rounded-full bg-amber-900/40 flex items-center justify-center border border-amber-700/40">
            <User className="w-5 h-5 text-amber-400" />
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-amber-100" style={{ fontFamily: 'Georgia, serif' }}>
              {t('identityTitle', lang)}
            </h2>
            <p className="text-stone-400 text-xs md:text-sm">{t('identitySub', lang)}</p>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-amber-200/70 text-xs mb-1.5 font-medium">{t('fieldName', lang)}</label>
            <input
              type="text"
              value={name}
              onChange={(e) => { setName(e.target.value); setError(false); }}
              placeholder="Captain..."
              className={`${inputClass} ${error && !name.trim() ? 'border-red-500/60' : 'border-stone-700 focus:border-amber-600'}`}
            />
          </div>

          <div>
            <label className="block text-amber-200/70 text-xs mb-1.5 font-medium">{t('fieldAge', lang)}</label>
            <input
              type="number"
              value={age}
              onChange={(e) => { setAge(e.target.value); setError(false); }}
              placeholder="25"
              min="1"
              max="120"
              className={`${inputClass} ${error && !age.trim() ? 'border-red-500/60' : 'border-stone-700 focus:border-amber-600'}`}
            />
          </div>

          <div>
            <label className="block text-amber-200/70 text-xs mb-1.5 font-medium">{t('fieldGender', lang)}</label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: 'male', label: t('genderMale', lang) },
                { id: 'female', label: t('genderFemale', lang) },
                { id: 'other', label: t('genderOther', lang) },
              ].map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => { setGender(opt.id); setError(false); }}
                  className={`py-2.5 rounded-xl text-sm font-medium transition-all ${
                    gender === opt.id
                      ? 'bg-amber-600 text-amber-50 border border-amber-500'
                      : 'bg-stone-800/60 text-stone-400 border border-stone-700 hover:border-amber-700/50'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-amber-200/70 text-xs mb-1.5 font-medium">{t('fieldIsPirate', lang)}</label>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => { setIsPirate('yes'); setError(false); }}
                className={`py-2.5 rounded-xl text-sm font-medium transition-all ${
                  isPirate === 'yes'
                    ? 'bg-amber-600 text-amber-50 border border-amber-500'
                    : 'bg-stone-800/60 text-stone-400 border border-stone-700 hover:border-amber-700/50'
                }`}
              >
                {t('yes', lang)}
              </button>
              <button
                onClick={() => { setIsPirate('no'); setError(false); }}
                className={`py-2.5 rounded-xl text-sm font-medium transition-all ${
                  isPirate === 'no'
                    ? 'bg-amber-600 text-amber-50 border border-amber-500'
                    : 'bg-stone-800/60 text-stone-400 border border-stone-700 hover:border-amber-700/50'
                }`}
              >
                {t('no', lang)}
              </button>
            </div>
          </div>
        </div>

        {error && (
          <p className="text-red-400 text-xs mt-4 text-center">{t('selectOption', lang)}</p>
        )}

        <button
          onClick={handleSubmit}
          className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-amber-700 to-amber-600 hover:from-amber-600 hover:to-amber-500 text-amber-50 font-semibold py-3 px-6 rounded-xl transition-all duration-200 shadow-lg hover:shadow-amber-900/40 active:scale-[0.98] mt-6"
        >
          <Anchor className="w-5 h-5" />
          {t('startAssessment', lang)}
        </button>
      </div>
    </div>
  );
}
