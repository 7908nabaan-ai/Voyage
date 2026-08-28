# The Black Pearl Voyage - Project Summary

## Overview
A pirate-themed psychological screening web app inspired by clinical tools (ego strength, empathy, reality testing). Built with React + TypeScript + Vite + Tailwind CSS. No backend/database — all state is in-memory with localStorage for session resume.

## Core Mechanics

### 3-Stage Assessment (36 questions total)
1. **Stage 1 — Social Logic & Morale** (Q1–Q12): Rule-following, problem decomposition, conflict resolution, fairness, logical reasoning (includes the "pass 2nd place" riddle)
2. **Stage 2 — Interpersonal Empathy** (Q3–Q24): Empathy recognition, emotional attunement, perspective-taking, social perception
3. **Stage 3 — Consciousness Depth & Reality Testing** (Q25–Q36): Metacognition, thought observation, derealization, paranoia screening, reality testing (includes safety-trigger questions Q26–Q28)

### Scoring Engine (`src/data/scoring.ts`)
- Each option has a 0–100 score
- Per-stage normalized to 0–33.3 (third of 100)
- Total score = sum of 3 stages (0–100)
- **4 Tiers**: High Stability (85–100), Balanced Functioning (65–84), Elevated Vulnerability (35–64), Critical Risk Threshold (0–34)
- **Safety trigger**: Questions 26, 27, 28 — answering "Yes/Often" triggers a safety banner recommending professional support

### Pirate Quote Interstitials (`src/data/quotes.ts`)
- 36 thematic pirate quotes (one per question) shown between stages
- Each paired with a scene illustration and caption
- Non-repeating within a session

### Fishing Voyage (`src/data/voyage.ts`)
- Post-results bonus feature: generates a randomized Maldivian fishing voyage
- 5–7 stops from real Maldivian destinations (Dhidhoo, Naifaru, Foakaadhoo, etc.)
- Random catch (1509–17000 kg), rate (9–21 MVR/kg), revenue, crew share
- Bonus catch items (billoori sheet, moosabe, aluminium, etc.)
- Each stop has a pirate scene illustration

## Features Built

### Screens (all in `src/components/`)
1. **LoadingScreen** — Animated progress bar with pirate ship scene, app title
2. **DisclaimerScreen** — Ethical disclaimer (not a medical diagnosis, answers stay in browser)
3. **IdentityScreen** — Name, age, gender, "are you a pirate?" registration form
4. **QuestionCard** — Question display with radio options, stage indicator, progress bars, back/next/finish navigation
5. **QuoteScreen** — Full-screen pirate quote with scene illustration, tap to continue
6. **ResultsScreen** — Total score, tier badge, radar chart (recharts), per-stage breakdown bars, tier ladder, safety banner, PDF download, retake, view voyage buttons
7. **VoyageScreen** — Fishing voyage summary with stop cards, scene thumbnails, catch/revenue/share stats, bonus items

### Cross-Cutting Features
- **Bilingual**: English + Dhivehi (Thaana) toggle, all questions/options/quotes/UI strings localized
- **12 hand-drawn SVG pirate scenes** (`PirateScene.tsx`): Black Pearl ship, cardboard boat, Captain Dr. Hakeem, female pirate, crew deck, skull treasure, fog ocean, tavern, graveyard, lantern deck, rigging, treasure map
- **PDF report generation** (`src/utils/pdf.ts`): jsPDF-based report with identity, score, tier, stage breakdown, safety warning
- **localStorage session resume**: Saves identity, answers, question index, seen quotes; offers resume or start new on return
- **Animations**: fadeIn, fadeInScale, slideInRight, glowPulse keyframes in index.css
- **Language toggle**: Fixed top-right globe button, available on all screens

### Design System
- Dark nautical theme: deep navy (#0D0D1A) backgrounds, amber/gold accents (#F5A623, amber-600)
- Georgia serif for headings, Inter for body
- 8px spacing system, consistent rounded-xl/2xl borders
- Stone/amber color palette with tier-based accent colors (green/blue/orange/red)
- Responsive: mobile-first, max-w-2xl/3xl containers, grid breakpoints

## File Structure
```
src/
├── App.tsx                    # Main state machine (7 phases)
├── types.ts                   # All TypeScript interfaces
├── index.css                  # Tailwind + keyframe animations
├── components/
│   ├── LoadingScreen.tsx
│   ├── DisclaimerScreen.tsx
│   ├── IdentityScreen.tsx
│   ├── QuestionCard.tsx
│   ├── QuoteScreen.tsx
│   ├── ResultsScreen.tsx
│   ├── VoyageScreen.tsx
│   └── PirateScene.tsx        # 12 SVG scene components
├── data/
│   ├── questions.ts           # 36 questions with EN/DV translations
│   ├── quotes.ts              # 36 pirate quotes with scene mappings
│   ├── scoring.ts             # Scoring engine + tier definitions
│   ├── voyage.ts              # Voyage generation logic
│   └── i18n.ts                # UI string dictionary (EN/DV)
└── utils/
    └── pdf.ts                 # PDF report generator
```

## App Flow (AppPhase state machine)
`loading → disclaimer → identity → assessment ↔ quote → results → voyage`

- Loading auto-advances after progress bar fills
- Disclaimer accepted once per session
- Quote interstitials appear on stage transitions (1→2, 2→3)
- Results show score, chart, tier; user can retake, download PDF, or view voyage
- Voyage is a post-results bonus screen

## Current Status
- **Build**: PASSES (`npm run build` ✓)
- **Typecheck**: PASSES (`npm run typecheck` ✓)
- **All 36 questions, 36 quotes, 12 scenes, scoring, PDF, voyage, bilingual, localStorage** — all implemented

## Potential Next Steps
- Manual browser testing of the full flow
- Bundle size optimization (recharts/jspdf are large; could lazy-load)
- Add more Thaana translation refinements
- Consider code-splitting PDF and voyage features via dynamic imports
