import type { PirateSceneKey, VoyageStop, VoyageResult } from '@/types';

export const VOYAGE_ORIGINS = ['H.Dh. Baarah', 'H.Dh. Hanimaadhoo'] as const;

export const VOYAGE_DESTINATIONS = [
  'Dhidhoo (north shafeeg)',
  'Naifaru (moosabe)',
  'Sh. Foakaadhoo (to sell fish)',
  'R. Maduvvaree',
  'Nellaidhoo (lot of bait fish)',
  'Sony fish buyer boat',
  'Kanditheem',
  'Komandoo',
  'Kulhudhufushi (baru kur)',
] as const;

export const BONUS_NAMES = [
  'billoori sheet 3mm',
  'moosabe',
  'latheefbe',
  'aluminium',
] as const;

const VOYAGE_SCENES: PirateSceneKey[] = [
  'tavern',
  'skullTreasure',
  'fogOcean',
  'lanternDeck',
  'graveyard',
  'crewDeck',
  'treasureMap',
  'rigging',
  'blackPearlShip',
];

const VOYAGE_CAPTIONS: { en: string; dv: string }[] = [
  { en: 'A lantern-lit island market where fish are auctioned under a skull banner.', dv: 'ލޭންޓަން އަލީގައި ރަށު މާކެޓްގައި ކުޅު ބެނަރެއް ތިރިން ފިއްސާ.' },
  { en: 'A treasure-laden cove with dark pirate humor painted on the cliffs.', dv: 'ޚަޒީނާ ފުންނަ ކޯވެއް، ކަރު އައްޑުގައި ޑާކް ޕައިރަޓް ހިޔަލެއް.' },
  { en: 'A foggy atoll dock where a ghostly buyer inspects the catch.', dv: 'ހިޔަލު އެޓޯލް ޑޮކްގައި ކަނޑު ކޮޅު ފިއްސާ މީހާ ބެލާ.' },
  { en: 'A moonlit pier with lanterns and a skeleton fish-merchant.', dv: 'ފަލު އަލީގައި ލޭންޓަން އަދި ކުޅު ފިއްސާ މީހާ.' },
  { en: 'A graveyard harbor where old ships rest and new fish are sold.', dv: 'ގްރޭވްޔާޑް ހާރބަރުގައި ކުރީގެ މައިމަތި ކޮއްޗެއް އަދި އާ ފިއްސާ.' },
  { en: 'A deck-side sale with the crew celebrating as coins clink.', dv: 'ޑެކްގައި ފިއްސާ މީހުން ކޮއިން އައުޔަށް ހުށަހަޅާ.' },
  { en: 'A treasure-map table on the beach where the deal is struck.', dv: 'ބީޗްގައި ޚަޒީނާ މެޕް މޭޒުން ޑީލް ކުރާ.' },
  { en: 'Rigging-side fish transfer under torchlight at a remote island.', dv: 'ރިގިން ކައިރިން ޓޯޗް އަލީގައި ފިއްސާ މީހުން ބަދަލު ކުރާ.' },
  { en: 'The Black Pearl anchored offshore as longboats carry tuna to market.', dv: 'Black Pearl އެތަލުގައި އައްޅި ހަދާ، ލޮންބޯޓުން ފިއްސާ މާކެޓަށް.' },
];

const FISH_TYPES = ['Skipjack Tuna', 'Yellowfin Tuna'];

function randInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function generateVoyage(origin: string): VoyageResult {
  const shuffledDests = shuffle([...VOYAGE_DESTINATIONS]);
  const numStops = randInt(5, 7);
  const stops: VoyageStop[] = shuffledDests.slice(0, numStops).map((name, i) => {
    const catchKg = randInt(1509, 17000);
    const fishType = FISH_TYPES[Math.floor(Math.random() * FISH_TYPES.length)];
    const rate = randInt(9, 21);
    const revenue = catchKg * rate;
    const share = Math.round((revenue / 11) * 10) / 10;
    const scene = VOYAGE_SCENES[i % VOYAGE_SCENES.length];
    const cap = VOYAGE_CAPTIONS[i % VOYAGE_CAPTIONS.length];
    return {
      name,
      catchKg,
      fishType,
      rate,
      revenue,
      share,
      scene,
      caption: cap.en,
      captionDv: cap.dv,
    };
  });

  const totalCatch = stops.reduce((s, st) => s + st.catchKg, 0);
  const totalRevenue = stops.reduce((s, st) => s + st.revenue, 0);
  const totalShare = Math.round(stops.reduce((s, st) => s + st.share, 0) * 10) / 10;

  const numBonuses = randInt(1, 4);
  const bonusPool = shuffle([...BONUS_NAMES]);
  const bonuses = bonusPool.slice(0, numBonuses).map((name) => ({
    name,
    kg: randInt(50, 800),
  }));

  return { origin, stops, totalCatch, totalRevenue, totalShare, bonuses };
}
