import type { Language } from '@/types';

type Dict = Record<string, { en: string; dv: string }>;

export const STRINGS: Dict = {
  appTitle: { en: 'The Black Pearl Voyage', dv: 'ދަ ބްލެކް ޕާލް ވޯޔޭޖް' },
  appSubtitle: {
    en: 'A Pirate-Themed Psychological Screening',
    dv: 'ޕައިރަޓް ތީމް ސައިކޮލޮޖިކަލް ސްކްރީނިން',
  },
  loading: { en: 'Charting your course...', dv: 'ޑައިރެކްޝަން ހޯދުމުގައި...' },
  loadingSub: {
    en: 'The Black Pearl is preparing to set sail',
    dv: 'Black Pearl ދަތުރު ފެށުމަށް ލައިގަތީ',
  },
  begin: { en: 'Begin Voyage', dv: 'ދަތުރު ފެށައް' },
  disclaimerTitle: { en: 'Before You Set Sail', dv: 'ދަތުރު ފެށުމު ކުރި' },
  disclaimerBody: {
    en: 'This is an entertaining, pirate-themed psychological screening inspired by real clinical tools. It is for education and self-reflection only. It is not a medical diagnosis, and it does not replace a qualified mental-health professional. Your answers never leave your browser.',
    dv: 'މިއީ ޕައިރަޓް ތީމް ސައިކޮލޮޖިކަލް ސްކްރީނިން އެއް. މިއީ ފަރުގެ އިލްމާއި ސެލްފް-ރިފްލެކްޝަން އަށް. މިއީ ޑިއެގްނޯސިސެއް ނޫނެ، އަދި ޕްރޮފެޝަނަލް ޑޮކްޓަރެއްގެ ފަރާތު ނުހަނުލުނެއް ނޫނެ. އަމީގެ ޖަވާބު ތައް ބްރައުޒަރުން ބޭރަށް ނުދާ.',
  },
  accept: { en: 'I understand — Set Sail', dv: 'ސާފުވެއް — ދަތުރު ފެށައް' },
  identityTitle: { en: 'Crew Registration', dv: 'ކްރޫ ރެޖިސްޓްރޭޝަން' },
  identitySub: {
    en: 'Every pirate aboard the Black Pearl must be logged in the ship\u2019s ledger.',
    dv: 'Black Pearl ގައި ހުރި ހުރިހާ ޕައިރަޓް މީހުން ލެޖަރުގައި ލިޔެފައި ހުންނަން ޖެހޭ.',
  },
  fieldName: { en: 'Pirate Name', dv: 'ޕައިރަޓް ނަން' },
  fieldAge: { en: 'Age', dv: 'އުމުރު' },
  fieldGender: { en: 'Gender', dv: 'ޖިންސު' },
  fieldIsPirate: { en: 'Are you a pirate?', dv: 'އަހަރެމެ ޕައިރަޓް އެއް؟' },
  yes: { en: 'Yes', dv: 'އާއ' },
  no: { en: 'No', dv: 'ނޫން' },
  genderMale: { en: 'Male', dv: 'ފިރިހެން' },
  genderFemale: { en: 'Female', dv: 'އަންހެލި' },
  genderOther: { en: 'Other', dv: 'އެހެނިހެން' },
  startAssessment: { en: 'Start Assessment', dv: 'އިތުޅު ފެށައް' },
  stage: { en: 'Stage', dv: 'ސްޓޭޖް' },
  of: { en: 'of', dv: '/' },
  question: { en: 'Question', dv: 'ސުވާލު' },
  back: { en: 'Back', dv: 'ފަހަނަވާ' },
  next: { en: 'Next', dv: 'ކުރި' },
  finish: { en: 'Finish', dv: 'ނިންގާ' },
  continue: { en: 'Continue', dv: 'ކުރިއަށް' },
  resultsTitle: { en: 'Your Psychological Profile', dv: 'އަމީގެ ސައިކޮލޮޖިކަލް ޕްރޮފައިލް' },
  totalScore: { en: 'Total Score', dv: 'އޮލް ސްކޯރ' },
  stage1Label: { en: 'Social Logic & Morale', dv: 'ސޯޝަލް ލޮޖިކް އެންޑް މޮރޭލް' },
  stage2Label: { en: 'Interpersonal Empathy', dv: 'އިންޓަރޕަސަނަލް އެމްޕަތީ' },
  stage3Label: { en: 'Consciousness Depth & Reality Testing', dv: 'ކޮސިއަސްނެސް ޑެޕްތާ އެންޑް ރިއެލިޓީ ޓެސްޓިން' },
  safetyMessage: {
    en: 'Some of your answers suggest you may be experiencing distress. Please consider talking to a trusted person or a mental-health professional.',
    dv: 'އަމީގެ ބައި ޖަވާބު ތައް ޑިސްޓްރެސް އިހްސާސް ކުރާ ކަމެއް ސާފު ކުރައް ހުރި. ފައިދާހުރި މީހަކާ ނުވަތަ ޕްރޮފެޝަނަލް ޑޮކްޓަރެއް އާއި ވާހަކަ ކުރުމަށް ލަފާ ދެއެ.',
  },
  downloadPdf: { en: 'Download PDF Report', dv: 'ޕީޑީއެފް ރިޕޯޓް ޑައުންލޯޑް' },
  retake: { en: 'Sail Again', dv: 'އަލުން ދަތުރު' },
  viewVoyage: { en: 'View Fishing Voyage', dv: 'މަސްދަތުރު ބެލާ' },
  voyageTitle: { en: 'Your Fishing Voyage', dv: 'އަމީގެ މަސްދަތުރު' },
  voyageOrigin: { en: 'Origin', dv: 'ސަރަޙައްދު' },
  voyageStops: { en: 'Fishing Stops', dv: 'މަސްދިނުމުގެ ތިރިފަރާތް' },
  catch: { en: 'Catch', dv: 'މަސް' },
  rate: { en: 'Rate/kg', dv: 'ރޭޓް/ކިލޯ' },
  revenue: { en: 'Revenue', dv: 'އައު' },
  share: { en: 'Your Share', dv: 'އަމީގެ ބަދަލު' },
  totalCatch: { en: 'Total Catch', dv: 'އޮލް ކެޗް' },
  totalRevenue: { en: 'Total Revenue', dv: 'އޮލް އައު' },
  totalShare: { en: 'Your Total Share', dv: 'އަމީގެ އޮލް ޝެއަރ' },
  bonuses: { en: 'Bonus Catch', dv: 'ބޯނަސް މަސް' },
  backToResults: { en: 'Back to Results', dv: 'ނިންގާ އަލުން ބެލާ' },
  resumePrompt: { en: 'Resume your voyage?', dv: 'ދަތުރު އަލުން ފެށައް؟' },
  resume: { en: 'Resume', dv: 'އަލުން ފެށައް' },
  startNew: { en: 'Start New', dv: 'އާ ފެށައް' },
  selectOption: { en: 'Choose an answer to continue', dv: 'ވަކި ޖަވާބެއް އިޚްތިޔާރު ކުރޭ' },
};

export function t(key: string, lang: Language): string {
  const entry = STRINGS[key];
  if (!entry) return key;
  return entry[lang];
}
