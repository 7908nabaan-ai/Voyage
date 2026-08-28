import { QUESTIONS } from '@/data/questions';
import type { ScoreResult, StageId, StageScore, TierInfo } from '@/types';

export const TIERS: TierInfo[] = [
  {
    id: 1,
    label: 'High Stability',
    labelDv: 'ހައި ސްޓެބިލިޓީ',
    description: 'Exceptional awareness, interpersonal empathy, and cognitive grounding.',
    descriptionDv:
      'އިހްސާސް، އެހެނިހެން މީހުންނާ ސިމްޕަތީ، އަދި ކޮގްނިޓިވް ގްރައުންޑިންގ ބޮޑަށް ލަފާ ހުރި.',
    color: '#22C55E',
    badgeColor: 'bg-green-500',
    min: 85,
    max: 100,
  },
  {
    id: 2,
    label: 'Balanced Functioning',
    labelDv: 'ބެލެންސްޑް ފަންކްޝަނިންގ',
    description: 'Healthy emotional and social mechanics with standard adaptive coping traits.',
    descriptionDv:
      'ސިއްހަތު އިހްސާސް އަދި ސޯޝަލް މެކެނިޒަމް ރަގަސް އެޑަޕްޓިވް ކޮޕިންގ ޓްރެލްޓްސް އާއި އެއްއެއް ހުރި.',
    color: '#3B82F6',
    badgeColor: 'bg-blue-500',
    min: 65,
    max: 84,
  },
  {
    id: 3,
    label: 'Elevated Vulnerability',
    labelDv: 'އެލެވޭޓެޑް ވަލްނަރަބިލިޓީ',
    description:
      'Symptom trends or ego-reactive behaviors indicate mild internal strain or distress.',
    descriptionDv:
      'ސިމްޕްޓަމް ޓްރެންޑް ނުވަތަ އިގޯ-ރިއެކްޓިވް ބިހޭވިއަރސް މިލްޑް އިންޓަރނަލް ސްޓްރެއިން ނުވަތަ ޑިސްޓްރެސް ސާފު ކުރައް ހުރި.',
    color: '#F59E0B',
    badgeColor: 'bg-orange-500',
    min: 35,
    max: 64,
  },
  {
    id: 4,
    label: 'Critical Risk Threshold',
    labelDv: 'ކްރިޓިކަލް ރިސްކް ތްރެޝްހޯލްޑް',
    description:
      'Substantial distress or deep perceptual patterns noted. Professional support is recommended.',
    descriptionDv:
      'ބޮޑު ޑިސްޓްރެސް ނުވަތަ ޑީޕް ޕަސްޕެކްޗުއަލް ޕެޓަރން ހޯދާ. ޕްރޮފެޝަނަލް ސަޕޯޓް ލަފާދެއެ.',
    color: '#EF4444',
    badgeColor: 'bg-red-500',
    min: 0,
    max: 34,
  },
];

function getTier(score: number): TierInfo {
  return TIERS.find((t) => score >= t.min && score <= t.max) ?? TIERS[3];
}

const STAGE_MAX_RAW: Record<StageId, number> = { 1: 0, 2: 0, 3: 0 };

QUESTIONS.forEach((q) => {
  const maxOpt = Math.max(...q.options.map((o) => o.score));
  STAGE_MAX_RAW[q.stage] += maxOpt;
});

export const TOTAL_MAX_RAW = STAGE_MAX_RAW[1] + STAGE_MAX_RAW[2] + STAGE_MAX_RAW[3];

export function scoreAssessment(answers: Record<number, string>): ScoreResult {
  const stageRaw: Record<StageId, number> = { 1: 0, 2: 0, 3: 0 };
  let safetyTriggered = false;

  QUESTIONS.forEach((q) => {
    const ans = answers[q.id];
    if (!ans) return;
    const opt = q.options.find((o) => o.id === ans);
    if (!opt) return;
    stageRaw[q.stage] += opt.score;

    if (q.safetyTrigger) {
      const triggerIds: Record<number, string[]> = {
        26: ['c'],
        27: ['c'],
        28: ['c'],
      };
      const triggers = triggerIds[q.id];
      if (triggers && triggers.includes(ans)) {
        safetyTriggered = true;
      }
    }
  });

  const stages: StageScore[] = ([1, 2, 3] as StageId[]).map((s) => {
    const raw = stageRaw[s];
    const max = STAGE_MAX_RAW[s];
    const score = max > 0 ? Math.round((raw / max) * (100 / 3) * 10) / 10 : 0;
    return { stage: s, score, max: Math.round((100 / 3) * 10) / 10 };
  });

  const total = Math.round(stages.reduce((sum, s) => sum + s.score, 0) * 10) / 10;
  const tier = getTier(Math.round(total));

  return { total, stages, tier, safetyTriggered };
}

export function getMaxRawForStage(stage: StageId): number {
  return STAGE_MAX_RAW[stage];
}
