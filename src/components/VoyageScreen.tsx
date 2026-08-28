import { useState } from 'react';
import type { Language, VoyageResult } from '@/types';
import { ChevronLeft, BookOpen } from 'lucide-react';
import { VOYAGE_STORY_INTRO, PORT_STORIES, MILESTONES, CLOSING_NARRATIVE } from '@/data/voyage-story';

interface VoyageScreenProps {
  lang: Language;
  voyage: VoyageResult;
  onBack: () => void;
}

export function VoyageScreen({ lang, voyage, onBack }: VoyageScreenProps) {
  const [expandedStop, setExpandedStop] = useState<number | null>(0);
  const [showNarrative, setShowNarrative] = useState(true);

  const totalStops = voyage.stops.length;
  const storyIntro = VOYAGE_STORY_INTRO[voyage.origin] || VOYAGE_STORY_INTRO['H.Dh. Baarah'];
  const closingNarrative = CLOSING_NARRATIVE[lang];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0D0D1A] via-[#101826] to-[#0D0D1A] px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <button
            onClick={onBack}
            className="p-2 hover:bg-stone-800/60 rounded-lg transition-all"
          >
            <ChevronLeft className="w-6 h-6 text-amber-200" />
          </button>
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-amber-100">
              {lang === 'en' ? 'Your Voyage' : 'އަތްވި ވޯޔޭޖް'}
            </h1>
            <p className="text-amber-200/70 text-sm">
              {lang === 'en' ? `From ${voyage.origin}` : `${voyage.origin}ވަތަ`}
            </p>
          </div>
        </div>

        {/* Toggle Narrative/Stats */}
        <div className="flex gap-2 mb-6">
          <button
            onClick={() => setShowNarrative(true)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all ${
              showNarrative
                ? 'bg-amber-700 text-amber-50'
                : 'bg-stone-800/60 text-stone-300 hover:bg-stone-700/60'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            {lang === 'en' ? 'Story' : 'ކިސާ'}
          </button>
          <button
            onClick={() => setShowNarrative(false)}
            className={`px-4 py-2 rounded-lg font-semibold transition-all ${
              !showNarrative
                ? 'bg-amber-700 text-amber-50'
                : 'bg-stone-800/60 text-stone-300 hover:bg-stone-700/60'
            }`}
          >
            {lang === 'en' ? 'Stats' : 'ތَަކَ'}
          </button>
        </div>

        {/* Narrative View */}
        {showNarrative && (
          <div className="space-y-6">
            {/* Opening */}
            <div className="bg-amber-600/10 border border-amber-600/30 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-amber-100 mb-4">
                {lang === 'en' ? 'The Beginning' : 'ފަިސސްވި'}
              </h2>
              <p className="text-amber-100/80 leading-relaxed italic">
                {lang === 'en' ? storyIntro.en : storyIntro.dv}
              </p>
            </div>

            {/* Milestones */}
            {voyage.stops.length > 0 && (
              <div className="bg-stone-900/60 border border-amber-900/40 rounded-xl p-6">
                <h2 className="text-xl font-semibold text-amber-100 mb-4">
                  {lang === 'en' ? 'A Storm on the Horizon' : 'ބޮޑް ސްޓޯރަ'}
                </h2>
                <p className="text-amber-100/80 leading-relaxed">
                  {lang === 'en' ? MILESTONES.storm.en : MILESTONES.storm.dv}
                </p>
              </div>
            )}

            {/* Port Stories */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-amber-100">
                {lang === 'en' ? 'Ports of Call' : 'ވިފަިކުވެ ރަށި'}
              </h2>
              {voyage.stops.map((stop, idx) => (
                <div
                  key={idx}
                  className="bg-stone-900/60 rounded-lg border border-amber-900/40 overflow-hidden hover:border-amber-600/60 transition-colors"
                >
                  <button
                    onClick={() => setExpandedStop(expandedStop === idx ? null : idx)}
                    className="w-full text-left px-6 py-4 flex items-center justify-between hover:bg-stone-800/40 transition-colors"
                  >
                    <div>
                      <h3 className="text-lg font-semibold text-amber-100">
                        {idx + 1}. {stop.name}
                      </h3>
                      <p className="text-amber-200/60 text-sm">
                        {lang === 'en' ? stop.caption : stop.captionDv}
                      </p>
                    </div>
                    <div className={`text-amber-200 transition-transform ${expandedStop === idx ? 'rotate-180' : ''}`}>
                      ▼
                    </div>
                  </button>

                  {expandedStop === idx && (
                    <div className="px-6 py-4 bg-stone-800/30 border-t border-amber-900/30">
                      <p className="text-amber-100/80 leading-relaxed mb-4 italic">
                        {lang === 'en'
                          ? PORT_STORIES[stop.name]?.en ||
                            `At ${stop.name}, you made port and conducted business. The crew loaded ${stop.catchKg} kg of ${stop.fishType}, selling at $${stop.rate}/kg for a total of $${Math.round(stop.revenue)}.`
                          : PORT_STORIES[stop.name]?.dv ||
                            `${stop.name}އަށް ވެއްޖެ`. `${stop.catchKg} kg ފިސް ވިސްނި.`}
                      </p>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                        <div>
                          <p className="text-amber-200/50 text-xs">
                            {lang === 'en' ? 'Catch' : 'ވި'}
                          </p>
                          <p className="text-amber-100 font-semibold">{stop.catchKg} kg</p>
                        </div>
                        <div>
                          <p className="text-amber-200/50 text-xs">
                            {lang === 'en' ? 'Type' : 'ފި'}
                          </p>
                          <p className="text-amber-100 font-semibold">{stop.fishType}</p>
                        </div>
                        <div>
                          <p className="text-amber-200/50 text-xs">
                            {lang === 'en' ? 'Rate' : 'ދާ'}
                          </p>
                          <p className="text-amber-100 font-semibold">${stop.rate}/kg</p>
                        </div>
                        <div>
                          <p className="text-amber-200/50 text-xs">
                            {lang === 'en' ? 'Revenue' : 'ދައްކަވާ'}
                          </p>
                          <p className="text-amber-100 font-semibold">${Math.round(stop.revenue)}</p>
                        </div>
                      </div>

                      {stop.share > 0 && (
                        <div className="mt-3 pt-3 border-t border-amber-900/30">
                          <p className="text-amber-200 font-semibold">
                            {lang === 'en' ? 'Your Share' : 'އަތްވި ވަތަ'}: ${Math.round(stop.share)}
                          </p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Midway Milestone */}
            {voyage.stops.length > 0 && (
              <div className="bg-amber-600/10 border border-amber-600/30 rounded-xl p-6">
                <h2 className="text-xl font-semibold text-amber-100 mb-4">
                  {lang === 'en' ? 'Halfway Through' : 'ފަތުވި'}
                </h2>
                <p className="text-amber-100/80 leading-relaxed">
                  {lang === 'en' ? MILESTONES.halfway.en : MILESTONES.halfway.dv}
                </p>
              </div>
            )}

            {/* Mysterious Encounter */}
            {voyage.stops.length > 0 && (
              <div className="bg-stone-900/60 border border-amber-900/40 rounded-xl p-6">
                <h2 className="text-xl font-semibold text-amber-100 mb-4">
                  {lang === 'en' ? 'A Mysterious Encounter' : 'ކަނޑުކޮޅާ'}
                </h2>
                <p className="text-amber-100/80 leading-relaxed">
                  {lang === 'en' ? MILESTONES.encounter.en : MILESTONES.encounter.dv}
                </p>
              </div>
            )}

            {/* Triumph */}
            {voyage.stops.length > 0 && (
              <div className="bg-amber-700/20 border border-amber-600/50 rounded-xl p-6">
                <h2 className="text-xl font-semibold text-amber-100 mb-4">
                  {lang === 'en' ? 'The Triumph' : 'ކާމިޔާބީ'}
                </h2>
                <p className="text-amber-100/80 leading-relaxed">
                  {lang === 'en' ? MILESTONES.triumph.en : MILESTONES.triumph.dv}
                </p>
              </div>
            )}

            {/* Closing */}
            <div className="bg-gradient-to-r from-amber-900/30 to-amber-800/20 border border-amber-600/40 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-amber-100 mb-4">
                {lang === 'en' ? 'The End' : 'ވޮތަވި'}
              </h2>
              <p className="text-amber-100/80 leading-relaxed italic">
                {lang === 'en' ? closingNarrative.en : closingNarrative.dv}
              </p>
            </div>
          </div>
        )}

        {/* Stats View */}
        {!showNarrative && (
          <div className="space-y-6">
            {/* Overview Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-stone-900/60 rounded-lg border border-amber-900/40 p-4 text-center">
                <p className="text-amber-200/70 text-xs font-semibold mb-1">
                  {lang === 'en' ? 'Ports of Call' : 'ރަށި'}
                </p>
                <p className="text-3xl font-bold text-amber-100">{totalStops}</p>
              </div>
              <div className="bg-stone-900/60 rounded-lg border border-amber-900/40 p-4 text-center">
                <p className="text-amber-200/70 text-xs font-semibold mb-1">
                  {lang === 'en' ? 'Total Catch' : 'ހުރި'}
                </p>
                <p className="text-3xl font-bold text-amber-100">
                  {Math.round(voyage.totalCatch / 1000)}t
                </p>
              </div>
              <div className="bg-stone-900/60 rounded-lg border border-amber-900/40 p-4 text-center">
                <p className="text-amber-200/70 text-xs font-semibold mb-1">
                  {lang === 'en' ? 'Revenue' : 'ދެއް'}
                </p>
                <p className="text-3xl font-bold text-amber-100">
                  ${Math.round(voyage.totalRevenue / 1000)}k
                </p>
              </div>
              <div className="bg-stone-900/60 rounded-lg border border-amber-900/40 p-4 text-center">
                <p className="text-amber-200/70 text-xs font-semibold mb-1">
                  {lang === 'en' ? 'Your Share' : 'އަތް'}
                </p>
                <p className="text-3xl font-bold text-amber-100">
                  ${Math.round(voyage.totalShare)}
                </p>
              </div>
            </div>

            {/* Detailed Stops */}
            <div>
              <h2 className="text-xl font-bold text-amber-100 mb-4">
                {lang === 'en' ? 'Port Details' : 'ރަށި'}
              </h2>
              <div className="space-y-4">
                {voyage.stops.map((stop, idx) => (
                  <div
                    key={idx}
                    className="bg-stone-900/60 rounded-lg border border-amber-900/40 p-6 hover:border-amber-600/60 transition-colors"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-amber-100">
                          {idx + 1}. {stop.name}
                        </h3>
                        <p className="text-amber-200/60 text-sm">
                          {lang === 'en' ? stop.caption : stop.captionDv}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-amber-200 font-semibold">
                          ${Math.round(stop.share)}
                        </p>
                        <p className="text-stone-400 text-xs">
                          {lang === 'en' ? 'Your share' : 'އަތް'}
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                      <div>
                        <p className="text-amber-200/50 text-xs">
                          {lang === 'en' ? 'Catch' : 'ވި'}
                        </p>
                        <p className="text-amber-100 font-semibold">{stop.catchKg} kg</p>
                      </div>
                      <div>
                        <p className="text-amber-200/50 text-xs">
                          {lang === 'en' ? 'Type' : 'ފި'}
                        </p>
                        <p className="text-amber-100 font-semibold">{stop.fishType}</p>
                      </div>
                      <div>
                        <p className="text-amber-200/50 text-xs">
                          {lang === 'en' ? 'Rate' : 'ދާ'}
                        </p>
                        <p className="text-amber-100 font-semibold">${stop.rate}/kg</p>
                      </div>
                      <div>
                        <p className="text-amber-200/50 text-xs">
                          {lang === 'en' ? 'Revenue' : 'ދަ'}
                        </p>
                        <p className="text-amber-100 font-semibold">${Math.round(stop.revenue)}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bonuses */}
            {voyage.bonuses.length > 0 && (
              <div className="bg-amber-600/10 border border-amber-600/30 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-amber-100 mb-4">
                  {lang === 'en' ? 'Bonus Cargo' : 'ނިތި'}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {voyage.bonuses.map((bonus, idx) => (
                    <div key={idx} className="flex justify-between items-center text-sm bg-stone-800/40 p-3 rounded">
                      <span className="text-amber-200">{bonus.name}</span>
                      <span className="text-amber-100 font-semibold">{bonus.kg} kg</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
