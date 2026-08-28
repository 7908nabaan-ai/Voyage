export type StageId = 1 | 2 | 3;

export interface QuestionOption {
  id: string;
  label: string;
  labelDv: string;
  score: number;
}

export interface Question {
  id: number;
  stage: StageId;
  prompt: string;
  promptDv: string;
  options: QuestionOption[];
  safetyTrigger?: boolean;
}

export interface PirateQuote {
  text: string;
  textDv: string;
  scene: PirateSceneKey;
  caption: string;
  captionDv: string;
}

export type PirateSceneKey =
  | 'blackPearlShip'
  | 'cardboardBoat'
  | 'captainHakeem'
  | 'femalePirate'
  | 'crewDeck'
  | 'skullTreasure'
  | 'fogOcean'
  | 'tavern'
  | 'graveyard'
  | 'lanternDeck'
  | 'rigging'
  | 'treasureMap';

export interface ParticipantIdentity {
  name: string;
  age: string;
  gender: string;
  isPirate: string;
}

export interface AssessmentState {
  stage: StageId;
  questionIndex: number;
  answers: Record<number, string>;
  completed: boolean;
}

export interface StageScore {
  stage: StageId;
  score: number;
  max: number;
}

export interface ScoreResult {
  total: number;
  stages: StageScore[];
  tier: TierInfo;
  safetyTriggered: boolean;
}

export interface TierInfo {
  id: 1 | 2 | 3 | 4;
  label: string;
  labelDv: string;
  description: string;
  descriptionDv: string;
  color: string;
  badgeColor: string;
  min: number;
  max: number;
}

export type Language = 'en' | 'dv';

export type AppPhase =
  | 'loading'
  | 'disclaimer'
  | 'identity'
  | 'assessment'
  | 'quote'
  | 'results'
  | 'voyage';

export interface VoyageStop {
  name: string;
  catchKg: number;
  fishType: string;
  rate: number;
  revenue: number;
  share: number;
  scene: PirateSceneKey;
  caption: string;
  captionDv: string;
}

export interface VoyageResult {
  origin: string;
  stops: VoyageStop[];
  totalCatch: number;
  totalRevenue: number;
  totalShare: number;
  bonuses: { name: string; kg: number }[];
}
