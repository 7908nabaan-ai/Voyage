import { jsPDF } from 'jspdf';
import type { Language, ParticipantIdentity, ScoreResult, StageId } from '@/types';
import { TIERS } from '@/data/scoring';
import { t } from '@/data/i18n';

const STAGE_LABELS: Record<StageId, string> = { 1: 'stage1Label', 2: 'stage2Label', 3: 'stage3Label' };

export async function generatePdfReport(
  identity: ParticipantIdentity,
  result: ScoreResult,
  lang: Language
): Promise<void> {
  const doc = new jsPDF({ unit: 'pt', format: 'a4' });
  const pageW = doc.internal.pageSize.getWidth();
  const pageH = doc.internal.pageSize.getHeight();
  const margin = 40;

  // Background
  doc.setFillColor(13, 13, 26);
  doc.rect(0, 0, pageW, pageH, 'F');

  // Title
  doc.setTextColor(245, 200, 100);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(20);
  doc.text(t('appTitle', lang), margin, 50);

  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(180, 160, 130);
  doc.text(t('resultsTitle', lang), margin, 68);

  // Divider
  doc.setDrawColor(90, 60, 30);
  doc.setLineWidth(0.5);
  doc.line(margin, 80, pageW - margin, 80);

  // Identity
  let y = 100;
  doc.setFontSize(11);
  doc.setTextColor(200, 200, 200);
  doc.text(`${t('fieldName', lang)}: ${identity.name}`, margin, y);
  y += 16;
  doc.text(`${t('fieldAge', lang)}: ${identity.age}`, margin, y);
  y += 16;
  const genderLabel = identity.gender === 'male' ? t('genderMale', lang) : identity.gender === 'female' ? t('genderFemale', lang) : t('genderOther', lang);
  doc.text(`${t('fieldGender', lang)}: ${genderLabel}`, margin, y);

  // Score circle area
  y += 30;
  const tier = result.tier;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(28);
  doc.setTextColor(...hexToRgb(tier.color));
  doc.text(`${Math.round(result.total)}`, margin, y);
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(180, 160, 130);
  doc.text(`/ 100`, margin + 45, y);
  y += 20;
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...hexToRgb(tier.color));
  doc.text(lang === 'en' ? tier.label : tier.labelDv, margin, y);
  y += 16;
  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(160, 160, 160);
  const descLines = doc.splitTextToSize(lang === 'en' ? tier.description : tier.descriptionDv, pageW - 2 * margin);
  doc.text(descLines, margin, y);
  y += descLines.length * 12 + 10;

  // Stage breakdown
  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(245, 200, 100);
  doc.text(lang === 'en' ? 'Stage Breakdown' : 'ސްޓޭޖް ބްރޭކްޑައުން', margin, y);
  y += 18;

  result.stages.forEach((s) => {
    const pct = Math.round((s.score / s.max) * 100);
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(200, 200, 200);
    doc.text(`${t('stage', lang)} ${s.stage}: ${t(STAGE_LABELS[s.stage], lang)}`, margin, y);
    doc.setTextColor(245, 200, 100);
    doc.text(`${pct}%`, pageW - margin - 30, y, { align: 'right' });
    y += 6;

    // Progress bar
    doc.setFillColor(40, 40, 50);
    doc.roundedRect(margin, y, pageW - 2 * margin, 6, 2, 2, 'F');
    doc.setFillColor(...hexToRgb(tier.color));
    const barW = ((pageW - 2 * margin) * pct) / 100;
    if (barW > 0) {
      doc.roundedRect(margin, y, barW, 6, 2, 2, 'F');
    }
    y += 18;
  });

  // Safety
  if (result.safetyTriggered) {
    y += 6;
    doc.setFillColor(60, 20, 20);
    doc.roundedRect(margin, y, pageW - 2 * margin, 40, 4, 4, 'F');
    doc.setFontSize(9);
    doc.setTextColor(220, 120, 120);
    const safetyLines = doc.splitTextToSize(t('safetyMessage', lang), pageW - 2 * margin - 16);
    doc.text(safetyLines, margin + 8, y + 16);
    y += 50;
  }

  // Tier ladder
  y += 10;
  doc.setFontSize(11);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(245, 200, 100);
  doc.text(lang === 'en' ? 'All Tiers' : 'ހުރިހާ ޓަޔަރ', margin, y);
  y += 16;

  TIERS.forEach((tt) => {
    const active = tt.id === tier.id;
    doc.setFontSize(9);
    doc.setFont(active ? 'helvetica' : 'helvetica', active ? 'bold' : 'normal');
    doc.setTextColor(...hexToRgb(tt.color), active ? 255 : 120);
    doc.circle(margin + 4, y - 3, 3, 'F');
    doc.text(
      `${lang === 'en' ? tt.label : tt.labelDv} (${tt.min}-${tt.max})${active ? ' <--' : ''}`,
      margin + 14,
      y
    );
    y += 14;
  });

  // Footer
  doc.setFontSize(8);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(100, 100, 100);
  doc.text(
    lang === 'en'
      ? 'This screening is for entertainment and self-reflection only. Not a medical diagnosis.'
      : 'މި ސްކްރީނިން އަކީ ފަރުގެ އަދި ސެލްފް-ރިފްލެކްޝަން އަށް. ޑިއެގްނޯސިސެއް ނޫނެ.',
    margin,
    pageH - 30
  );

  doc.save(`black-pearl-report-${identity.name.toLowerCase().replace(/\s+/g, '-')}.pdf`);
}

function hexToRgb(hex: string): [number, number, number] {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return [r, g, b];
}
