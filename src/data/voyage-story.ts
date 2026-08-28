import type { Language } from '@/types';

export interface VoyageStoryElement {
  en: string;
  dv: string;
}

export const VOYAGE_STORY_INTRO: Record<string, VoyageStoryElement> = {
  'H.Dh. Baarah': {
    en: 'You set sail from the quiet harbor of H.Dh. Baarah, your crew bustling with anticipation. The Black Pearl creaks as it cuts through the turquoise waters. Captain Dr. Hakeem nods to you: "The seas are calling, mate. Let\'s make this voyage legendary."',
    dv: 'އަދި ތިބި H.Dh. Baarah ގަވާއި ދަތުރު ފެށިއްޖެ. އެތި ކްރޫ މީހުން ވާހަކަ ކުރާ އަދި މަސްކަތީ ފުށާ. Black Pearl މައިމަތި ކޮއްޗެއް ކުޅެ ފަތުރީ ތެރިކަމަށް ދާވާ. Captain Dr. Hakeem އަމިއިއަށް ވާހަކަ ދެއެ: "މަޔާ އަސް ވުވާ ރަށްތަކާ ތަފާތްވި ގަވާތަކުވެ ބަލާ، ތިބިވަސް އަލުވާ ވޯޔޭޖް ފަދައި".'
  },
  'H.Dh. Hanimaadhoo': {
    en: 'The morning mist clings to H.Dh. Hanimaadhoo as you depart. Old sailors gather at the dock, waving farewell. "May the winds favor you!" they cry. Your first mate, a weathered pirate named Rasheed, grips your shoulder: "This voyage will test your mettle, captain."',
    dv: 'H.Dh. Hanimaadhoo އަށް ރިހާ ވެވި ކުރިން، ހިޔަލު ދަގަނޑުގައި ދެމި ހިމެނި. ކުރީގެ ސައިލަރުތަކުވެ ޑޮކްގައި ވަާހަކަ ކުރާ. "މަޔާ ވާވި ވަތަ އަތްވުތާ!" ކިޔަ ވާހަކަ ކުރެއެ. "އަމިއި ވޯޔޭޖް އެވި ތިބި ބަލަވާނެ އަފްވާ ކަމެއް ކުރާނެ." ވާހަކަ ކުރާ.'
  }
};

export const PORT_STORIES: Record<string, VoyageStoryElement> = {
  'Dhidhoo (north shafeeg)': {
    en: 'At Dhidhoo\'s northern docks, you encounter a legendary fish buyer named Zainab. She inspects your catch with a knowing smile. "Fine fish," she remarks, "but I\'ve seen you handle better. Push harder next time, captain." Her words echo as your crew loads the cargo.',
    dv: 'Dhidhoo ނޫނގެ ޑޮކްތަކަށް ވެއްޖެ ތިބި، ތިބި ބުނަށް ސޯވަތި ފިއްސާ މީހާ Zainab ވެފައި ހިމެނިވިއެވެ. "ރަގަސް ފިސް!" ވާހަކަ ކުރި. "އަނެއްވެސް ބަދަލާ ވެވާނެ" ކިޔަ ވާހަކަ. ކްރޫ މީހުން ކަރުގާ ކަސްވާ.'
  },
  'Naifaru (moosabe)': {
    en: 'The bustling market of Naifaru welcomes you with the scent of salt and spice. An old merchant, Abu, shares tales of storms survived and fortunes made. "You navigate these waters well," he says, trading you fresh provisions and local wisdom. "But beware the reefs to the south."',
    dv: 'Naifaru ގެ ވަރަށް ވަރުވެރި މާކެޓް އަތް ހިސަކުވެ އަސް ނިވާ. އެއް ކުރީގެ ވެއްപާރި Abu ވާހަކަ ކުރި. "އަނެ ວａرାށް އިހތިލާތް މަސްކަތި ކުރީވި." ވާހަކަ ކުރި. ވަތަ އަދި އަވަހާވި ފަސްފަސް ދިނި.'
  },
  'Sh. Foakaadhoo (to sell fish)': {
    en: 'At Sh. Foakaadhoo\'s market, the fishmongers are fierce negotiators. You haggle with a seasoned trader named Hassan over every rufiyaa. "You\'re tougher than I expected," he admits, finally sealing a fair deal. The crew celebrates with a bottle of celebratory coconut juice.',
    dv: 'Sh. Foakaadhoo ގެ މާކެޓްގައި، ފިސް ވެއްپާރިތަކުވެ ތޮނިކާ ނިވާ. Hassan ގަ ވަތަ ކިޔަ ވާހަކަ ކުރި. "ތިބި ވަރަށް ސަބަ ނިވާ!" ވާހަކަ ކުރި. ކްރޫ މީހުން ހަސި ކުރި.'
  },
  'R. Maduvvaree': {
    en: 'R. Maduvvaree\'s reef waters are treacherous, and your navigation skills are put to the test. A young crew member, Fatima, warns you of hidden shallows. Her quick thinking saves the ship from disaster. "Well spotted, Fatima," you praise her. She grins with pride.',
    dv: 'R. Maduvvaree ގެ ވަތަ ވަރަށް ވަށި. ހިރަކަދިވި ސަބަ ބަލާ، އެކަތަށް ހަރަކަތި ކުރި. Fatima ވާހަކަ ކުރި. "ވަސިލަާ ވަތަ ނަވެ!" އަތް ވިސްނި.'
  },
  'Nellaidhoo (lot of bait fish)': {
    en: 'The waters around Nellaidhoo teem with bait fish. Your crew works tirelessly, and the nets overflow. An elder fisherman named Khalid shares an ancient technique: "Let the tide guide your nets, not brute force." The lesson pays off—your catch exceeds all expectations.',
    dv: 'Nellaidhoo ތަރާކް ފިސް ބޮޑާ. ކްރޫ މީހުން ވަރަށް ވަރުވެރި މަސްކަތި ކުރި. Khalid ވާހަކަ ކުރި: "ވަތަ ބަޅި ދަވާ، ބާރެ ނިވި ނަވެ." ގާވާ ކަމެއް އިސްވެގެ.'
  },
  'Sony fish buyer boat': {
    en: 'You encounter the legendary Sony fish buyer boat on the open waters. The captain, a mysterious figure shrouded in rum-soaked stories, offers you premium prices. "I reward those who bring me quality," he murmurs through the cabin porthole. Your crew earns a handsome profit.',
    dv: 'ވަތަ ތެރެއިން، "Sony fish buyer boat" ވެފައި ހިމެނި. ކެޕްޓަން ވާހަކަ ކުރި: "ރަގަސް ވަތަ ވިސްނި، ބޮޑު ދައްކަވާ." ކްރޫ މީހުން ދޭވެ ލާބެ ހާސިލް ކުރި.'
  },
  'Kanditheem': {
    en: 'The sleepy island of Kanditheem offers respite. Local children run to greet your ship, laughing. A village elder invites your crew to share a traditional feast. Stories are exchanged, songs sung, and bonds strengthened. Your crew leaves reinvigorated, carrying blessings from the island.',
    dv: 'Kanditheem ގެ ރަށް ވަރަށް ހިތްއަރާބީ. ރަށުގެ މީހުން ކްރޫ މީހުန ފިޑާ ކުރި. ވަތަ އަދި ދޭވެ ލާބެ ޙާސިލް ކުރި. ކްރޫ މީހުން ނަވި ނިވިތޯ ދެސްވިވި.'
  },
  'Komandoo': {
    en: 'At Komandoo, a rival pirate crew challenges you to a friendly wager over catch sizes. The competition is fierce but good-natured. Your crew emerges victorious, and both captains share rum in celebration. "Next time, matey," your rival laughs, raising his glass.',
    dv: 'Komandoo އަށް އެވި ތިބި، އެހެނިހެން ޕައިރަޓުވެ ކުޅެ ވި. "ތިބި ވަރަށް ސަބަ ނިވާ!" ވާހަކަ ކުރި. ކްރޫ މެދު ވެސް ވަތަ ކިޔާ ކުރި.'
  },
  'Kulhudhufushi (baru kur)': {
    en: 'Kulhudhufushi\'s busy harbor is the final stop. Master traders scrutinize every detail of your haul. A weathered inspector named Omar nods approvingly: "This is a fine voyage\'s work. You\'ve earned your place among the greats." Your entire crew stands taller, knowing their efforts have been recognized.',
    dv: 'Kulhudhufushi ގެ ބަދަލަްވި ހާރބަރ އައްވި ތިބި. Omar ވާހަކަ ކުރި: "އަނެ ވަރަށް ސަބަ ވޯޔޭޖް ކަމެއް ކުރި!" ކްރޫ މީހުން ދިއްލި ތެތްވި.'
  }
};

export const MILESTONES: Record<string, VoyageStoryElement> = {
  halfway: {
    en: 'Halfway through your voyage, the crew gathers to celebrate the progress. A toast is raised to fair winds and safe waters. Captain Dr. Hakeem reminds everyone: "Half the journey is behind us. The best part—and the greatest rewards—lie ahead."',
    dv: 'ވޯޔޭޖް ބަފަތުވުމަށް ވަރަށް ވަރި ވަގުތުވެ، ކްރޫ މީހުން އިކްޠާމާތްކުރި. Captain Dr. Hakeem ވާހަކަ ކުރި: "ބަފަތު ބަލި ވޯޔޭޖް ނިވި، އަދި ބަކިޚާނާ އަތް މިހާރު!"'
  },
  storm: {
    en: 'A sudden storm erupts on the third day, testing your crew\'s resolve. Waves crash over the deck. You stand firm at the helm, guiding the ship through the chaos. Your steady hand and quick commands save the day. "That\'s why we follow this captain!" one sailor shouts over the thunder.',
    dv: 'ތިސްވި ދުވަހް، ވަރަށް ބޮޑަށް ސްޓޯރާތި ވިފި. ވަތަ ބޮޑާ ދާވި، ނަވިކަ ގަނޑި އަސް ވުވި. އަތް ހެލްމް ކޮއްވި ، ފިޔާވަތަ ލަވަވި. "އަނެ ކެޕްޓަན ވަރަށް ސަބަ!" ވާހަކަ ކުރި.'
  },
  encounter: {
    en: 'Late one night, you spot mysterious lights on the horizon. Your heart races—could it be a ghost ship? A crew member laughs: "No captain, it\'s just the phosphorescent wake of dolphins." The crew relaxes, but the magic of the moment lingers.',
    dv: 'އެއް ރާތް، ދނިވަތަ ވެތިވި ދިސްވި. "ކަނޑުކޮޅާ މައިމަތި ކޮއްޗެއް؟" އެ ވާހަކަ ވިތި. "ނޫވެ، އަނެ ވެސް ދޮލްފިނުވެ!" ވާހަކަ ކުރި. އަދި ވަތަ ފިނި ވި.'
  },
  triumph: {
    en: 'As you sail into the final harbor, the entire crew erupts in celebration. The voyage exceeded all targets. You gather your crew on deck and raise your hand: "You\'ve proven yourselves among the finest pirates these waters have ever seen. This triumph is yours."',
    dv: 'އަަތްވި ހާރބަރަށް ވެއްޖެ ތިބި، ކްރޫ މީހުން ވަރަށް ކިޔާ ކުރި. ވޯޔޭޖް ވަރަށް ސަބަވި. އަތް ވާހަކަ ކުރި: "އަނެ ވަރަށް ސަބަ ޕައިރަޓި! އެ ކާމިޔާބި އަނެވެ!"'
  }
};

export const CLOSING_NARRATIVE: Record<string, VoyageStoryElement> = {
  en: {
    en: 'As the sun sets over the final harbor, you reflect on the journey. Every challenge overcome, every port visited, every crew member\'s loyalty earned. You\'ve not only completed a fishing voyage—you\'ve built a legend. The crew gathers one final time, raising their cups to you: "To Captain, and to the sea that brought us together!" The Black Pearl rocks gently, cradling the stories of the greatest voyage ever sailed.',
    dv: 'އަތްވި ހާރބަރަށް، އަތް ވޯޔޭޖް މަޑުކޮށް ބެލި ވިއެވެ. ހިތްތަކުގެ ވަތަ ވި، ރަށި އަތް ވި، ކްރޫ މީހުنގެ ލޮޔަލްޓީ ވި. "ފޭ ކެޕްޓަネen!" ވާހަކަ ކުރި. Black Pearl މަޔާ ދަތުރުވި.'
  },
  dv: {
    en: 'As the sun sets over the final harbor, you reflect on the journey. Every challenge overcome, every port visited, every crew member\'s loyalty earned. You\'ve not only completed a fishing voyage—you\'ve built a legend. The crew gathers one final time, raising their cups to you: "To Captain, and to the sea that brought us together!" The Black Pearl rocks gently, cradling the stories of the greatest voyage ever sailed.',
    dv: 'އަތްވި ހާރބަރަށް، އަތް ވޯޔޭޖް މަޑުކޮށް ބެލި ވިއެވެ. ހިތްތަކުގެ ވަތަ ވި، ރަށި އަތް ވި، ކްރޫ މީހުނގެ ލޮޔަލްޓީ ވި. "ފޭ ކެޕްޓަeনen!" ވާހަކަ ކުރި. Black Pearl މަޔާ ދަތުރުވި.'
  }
};
