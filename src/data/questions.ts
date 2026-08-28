import type { Question } from '@/types';

export const QUESTIONS: Question[] = [
  // STAGE 1 — SOCIAL LOGIC & MORALE
  {
    id: 1,
    stage: 1,
    prompt:
      "If a rule on the Black Pearl is slightly inefficient, is it acceptable to ignore it to get the job done faster?",
    promptDv:
      "Black Pearl އަކުރެއްގެ ގަވައިދަކުން ކަފަދެއް ކުރުމަށް ބަލާއިގެން އެ ގަވައިދާ ކުޑަ ކަމެއްގެ ގެއްލުމެއް އޮތޯ، އެކަން ކުޑަ ފަސޭހަ ކުރަން އެ ގަވައިދާ އަށް ކިޔާނޫޅުން ބާރު ކަށް ހުރެއްޖތޯ؟",
    options: [
      { id: 'a', label: 'Never', labelDv: 'އެއްގޮތް', score: 100 },
      { id: 'b', label: 'Rarely', labelDv: 'ކުޑަކަމަކުން', score: 70 },
      { id: 'c', label: 'Sometimes', labelDv: 'ކޮންމެދު', score: 40 },
      { id: 'd', label: 'Always', labelDv: 'އަހަރެމެ', score: 10 },
    ],
  },
  {
    id: 2,
    stage: 1,
    prompt:
      'A crew member who wanted the same promotion as you is now "stonewalling" (ignoring) you. How do you respond?',
    promptDv:
      'އެހެން ޕައިރަޓެއް އެ ޔޫކުރިއަށް އޮތް ޕްރޮމޯޝަން ހޯދަން ބަލާފައި، ފަހުނު އެ އެމީހާ އެކަން ފުރިހައް ނުކުރައް އެމީހާއާ ކޮންމެއެއް ނުބުރާ އުޅެއުޅެ އޮތި އިރު، ކިޔަނީ ކޮބާ؟',
    options: [
      { id: 'a', label: 'Proactively ask about their career aspirations', labelDv: 'އެމީހާގެ ކެރިއަރގެ އިރުޝާރު ފަސްކޮށް ސުވާލު ކުރަން', score: 100 },
      { id: 'b', label: 'Stay strictly professional', labelDv: 'އެންމެން މަސައްކަތް ކުރާ ގޮތަށް ހުންނަން', score: 75 },
      { id: 'c', label: 'Focus on common crew/department goals', labelDv: 'އެތިބެ ތިބި ކްރޫ ގެ އޮޅުވާލީ މަގު ބަލާލާ', score: 60 },
      { id: 'd', label: 'Apologize for winning', labelDv: 'އެކަން ކާމިޔާބު ވީތީ ސައްހަ އިއްވާލާ', score: 30 },
    ],
  },
  {
    id: 3,
    stage: 1,
    prompt:
      'When I encounter a complex problem aboard the ship, I first break it down into small, logical steps before taking any action.',
    promptDv:
      'މައިމަތި ކޮއްޗެއްގައި ތަދު މައްޗެއް އުޅޭ ކަމެއް ދިމާވެއްޖެނަމަ، ކިޔަ ކޮންވެސް ކަހަލަ ނުކުރެވެ، ކުރާނެ ކަމެއް ކުރުމުގެ ކުރިން އެކަމާ ގުޅޭ ކަން ތަކުން ކުޑަ ކުޑަ ފިޔަވައި ލޮޖިކަލް ގޮތުން ބަލައި އެއެއްޗެއް ކުރާން ފަށާން ޖެހޭނެ.',
    options: [
      { id: 'a', label: 'Often', labelDv: 'އެއްގޮތް', score: 100 },
      { id: 'b', label: 'Sometimes', labelDv: 'ކޮންމެދު', score: 65 },
      { id: 'c', label: 'Rarely', labelDv: 'ކުޑަކަމަކުން', score: 35 },
      { id: 'd', label: 'Never', labelDv: 'އެއްގޮތް', score: 10 },
    ],
  },
  {
    id: 4,
    stage: 1,
    prompt:
      'You are racing another pirate and pass the person in second place. What place are you in now?',
    promptDv:
      'އެހެން ޕައިރަޓެއް ހިމެނި ރޭސް ކޮށް، ދެވަނަ ތާއަށް އިހްތިލާޞް ވާ މީހާ ވަރަށް ހަމައަށް ވިއްސާ. ފަހުނު ކިޔަ ކޮން ތާގައި އިހްތިލާޞް ކޮށްފައި؟',
    options: [
      { id: 'a', label: '2nd Place', labelDv: '2 ވަނަ', score: 100 },
      { id: 'b', label: '1st Place', labelDv: '1 ވަނަ', score: 0 },
    ],
  },
  {
    id: 5,
    stage: 1,
    prompt:
      'The captain gives you an order that makes absolutely no sense, but following it will not cause anyone harm. What do you do?',
    promptDv:
      'ކެޕްޓަން ޑރ. Hakeem ކިޔަ ނުބަސް އިއުމާރެއް ދެއެ، އެކަމާ އެއްގޮތް މީހެއްގެ އިހްތިލާޞް ނުވާނެ ނަމަވެސް، އެ އިއުމާރަށް ކިޔާ މީހަކު އެއްވެސް ގެއްލުމެއް ނުވާނެ. ކިޔަ ކޮބާ ކުރަން؟',
    options: [
      { id: 'a', label: 'Ask why before acting', labelDv: 'ކުރުމުގެ ކުރިން އެކަމެއްގެ ސަބަބު ސުވާލު ކުރާށެވެ', score: 100 },
      { id: 'b', label: 'Follow it without question', labelDv: 'ސުވާލެއް ނުކޮށް އެގޮތަށް ކުރާށެވެ', score: 55 },
      { id: 'c', label: 'Quietly find a better way', labelDv: 'ހަމަ އެކަމަށް ވެސް ފުރިހައް ނުކުރާ މާހިރު އޮޅަސް ފަސް ގައި ރަނގަޅު ގޮތެއް ހޯދާށެވެ', score: 65 },
      { id: 'd', label: 'Ignore the captain and do what I want', labelDv: 'ކެޕްޓަންއަށް ކިޔާނޫޅު އަމިއިގެ ބުރުން ކުރަން', score: 10 },
    ],
  },
  {
    id: 6,
    stage: 1,
    prompt:
      'Two crew members are arguing over who caused a problem aboard ship. What is your first instinct?',
    promptDv:
      'މައިމަތި ކޮއްޗެއްގައި ދިމާވީ މައްޗެއްގެ ސަބަބު ކާމިޔާބު މީހުން ދެމީހުން ހަވާފާ ކުރަނީ ކާމިޔާބު މީހާ ކާމިޔާބާ؟ ކިޔަ ކޮން ފަހަކު އެންމެ ފުޣާ އިހްތިލާޞް ވާނީ؟',
    options: [
      { id: 'a', label: 'Find out what actually happened', labelDv: 'އަބައިލަކު ހަރަން ވީ ކަމެއް ސޯލަށް ބެލާ', score: 100 },
      { id: 'b', label: 'Try to calm both sides', labelDv: 'ދެ ފަރާތުގެ މީހުންނާ ސުލްޙަ ކުރައް ހަވާފާ', score: 70 },
      { id: 'c', label: 'Stay out of it', labelDv: 'އެކަން ކުރަން އެއްގޮތް', score: 35 },
      { id: 'd', label: 'Pick the side that benefits me', labelDv: 'އަމިއިގެ ފައިދާ ހުންނި ފަރާތުން ކަން', score: 5 },
    ],
  },
  {
    id: 7,
    stage: 1,
    prompt: 'You discover a mistake you made that nobody else has noticed. What do you do?',
    promptDv:
      'ކިޔަ ކުރީ މައިމަތި ހިމެނި މައްޗެއް، އެކަމެއް މައިގައި އެއްވެސް މީހަކު ވަރާ ނުދާ މައްޗެއް، ކިޔަ ކޮބާ ކުރަން؟',
    options: [
      { id: 'a', label: 'Admit it and fix it', labelDv: 'އޮޅުވާ އިއްސެވެ އެކަމާ މެދު ބުނާ ބަދަލު ކުރާ', score: 100 },
      { id: 'b', label: 'Fix it quietly without telling anyone', labelDv: 'އެއްވެސް މީހަކު އަށް ނުބުނާ އެކަމާ މެދު ބަދަލު ކުރާ', score: 55 },
      { id: 'c', label: 'Wait to see if anyone notices', labelDv: 'އެއްވެސް މީހަކު ވަރާތޯ ބަލާ މަޑުކޮށްލާ', score: 25 },
      { id: 'd', label: 'Blame circumstances or someone else', labelDv: 'ގޯހަ އިސް ކޮށް އެހެނިހެން މީހުންނަށް ބަހާ', score: 0 },
    ],
  },
  {
    id: 8,
    stage: 1,
    prompt:
      'You have a clever shortcut that saves the crew time, but it bends a minor ship rule. What matters most?',
    promptDv:
      'ކްރޫ މީހުންގެ ވަގުތު ސޭވް ކުރާ ސުޤަރޓްކަޓެއް އެކަމާގުޅޭ މައިމަތި ކޮއްޗެއްގެ ގަވައިދައެއް ބަދަލު ކުރަން ޖެހޭ. އެއްގޮތް މީހަކު ބަލާނީ ކޮބާ އެންމޭ ކަމެއް؟',
    options: [
      { id: 'a', label: 'Whether the shortcut causes harm or unfairness', labelDv: 'ސުޤަރޓްކަޓް މީހަކަށް ގެއްލުމެއް ނުވާނޭ ކަމެއް', score: 100 },
      { id: 'b', label: 'Whether I can get away with it', labelDv: 'އަމިއިގެ ކަމަށް ކަންބޮޑު ނުވާނޭ ކަމެއް', score: 15 },
      { id: 'c', label: 'Whether the captain approves', labelDv: 'ކެޕްޓަން އެކަމާ ހިމެނި އެކަމެއް', score: 50 },
      { id: 'd', label: 'Getting the job done as fast as possible', labelDv: 'އެއްގޮތް ކަމެއް އެއްގޮތް ފައިސާ ކުރުމަށް ފަސޭހަ ގޮތެއް', score: 35 },
    ],
  },
  {
    id: 9,
    stage: 1,
    prompt: 'Someone disagrees with your opinion in front of the whole crew. How do you react?',
    promptDv:
      'އެތިބި ކްރޫ މީހުންގެ ކުރިން މީހަކު އަމިއިގެ ފިކުރާ އެއް ނުބެރޭ ކޮށް. ކިޔަ ކިޔަ ރިއެކްޓް ކުރަން؟',
    options: [
      { id: 'a', label: 'Listen and explain my reasoning calmly', labelDv: 'އެކަން އަމިއިގެ ފިކުރާ އެއް ހަމަ އަދި ހަމަ އެކަމަށް ހުށަހަޅާ', score: 100 },
      { id: 'b', label: 'Defend my position firmly', labelDv: 'އަމިއިގެ ފިކުރާ އެއް ފަލާތު ކޮށް ދިމާކުރާ', score: 60 },
      { id: 'c', label: 'Become annoyed but continue the discussion', labelDv: 'ހިތް ނުގިނާ ނަމަވެސް ހަވާފާ ހުއްދަވާ', score: 30 },
      { id: 'd', label: 'Make sure they regret challenging me', labelDv: 'އެމީހާ އެކަން ކޮށް ވިޔަ ބަހާ ހަވާފާ ކުރަން', score: 0 },
    ],
  },
  {
    id: 10,
    stage: 1,
    prompt: 'You are given incomplete information about an important decision at sea. What do you do?',
    promptDv:
      'މަޔާއިން މުހިން ނިންނެވި ސިޔާސީ ނިންގެއް ގެނައި ދީ އޮތި ވަގުތު މައްޗެއް، ކިޔަ ކޮބާ ކުރަން؟',
    options: [
      { id: 'a', label: 'Gather more information before deciding', labelDv: 'ނިންގެ ގެނެމުން އިތުރު މަޢުލޫމާޠު ހޯދާ', score: 100 },
      { id: 'b', label: 'Make the best decision I can with what I have', labelDv: 'ހުރި ހިތް ހުރީ އެއް ރަނގަޅު ނިންގެ ގެނައުން', score: 65 },
      { id: 'c', label: 'Ask someone I trust', labelDv: 'އަމިއިގެ އިތުރު މީހަކު ސުވާލު ކުރާ', score: 55 },
      { id: 'd', label: 'Guess and hope the sea sorts it out', labelDv: 'ހަދިވާ ކޮށް މަޔާ އެކަމާ ބަދަލު ކުރާނީ ކިޔާ ވިޔަ', score: 10 },
    ],
  },
  {
    id: 11,
    stage: 1,
    prompt:
      'If nobody is watching, how important is it to follow a rule that exists mainly to keep things fair among the crew?',
    promptDv:
      'އެއްވެސް މީހަކު ބެލާނެ މީހާ ނެތް ވަގުތު، ކްރޫ މީހުންގެ ދެމެދު އެއް ގަވައިދައެއް ހުރީ ފެއަރ ކުރަން ކަމަށް ބަލާށް، އެ ގަވައިދާ ކިޔާނޫޅުން ކޮން ގަރު ވާނެ؟',
    options: [
      { id: 'a', label: 'Very important', labelDv: 'އެއްގޮތް', score: 100 },
      { id: 'b', label: 'Fairly important', labelDv: 'ބޮޑެއް', score: 70 },
      { id: 'c', label: 'Depends on the situation', labelDv: 'ކޮންމެދަށް', score: 40 },
      { id: 'd', label: "If nobody knows, it doesn't matter", labelDv: 'އެއްވެސް މީހަކު އަދަބު ނުނުސި ކަން', score: 5 },
    ],
  },
  {
    id: 12,
    stage: 1,
    prompt:
      'The captain announces, with a completely straight face, that the ship\u2019s most important rule is: \u201cNever question a pirate wearing a ridiculous hat.\u201d The captain is wearing the most ridiculous hat you have ever seen. What do you do?',
    promptDv:
      'ކެޕްޓަން ޑރ. Hakeem އެއް ވެސް ގޮހޮޅު ނެތި މައިމަތި ކޮއްޗެއްގެ އެއް މައި ގަވައިދަ ހުންނަނީ \u201cއެއްވެސް ޕައިރަޓެއް ބޮކުރާ ހެލްމެޓެއް ލައިގެ ސުވާލެއް ނުކުރާ\u201d ކަމަށް އިއުމާރު ކޮށް. އެވަގުތު ކެޕްޓަން ލައިފައި ހުންނީ ކިޔަ ބަދަލު ކުރަން ނުވޭ ބޮކުރާ ހެލްމެޓެއް. ކިޔަ ކޮބާ ކުރަން؟',
    options: [
      { id: 'a', label: 'Ask why the rule exists before deciding whether it makes sense', labelDv: 'އެ ގަވައިދަ އެއް ހުރި ސަބަބު ސުވާލު ކުރާ އަދި އެ ގަވައިދަ މާނަ އަދި ކަން ކުރަން', score: 100 },
      { id: 'b', label: 'Laugh at the hat but follow the rule', labelDv: 'ހެލްމެޓަށް ކިޔާ ކިޔާ ގަވައިދަ ކިޔާ', score: 65 },
      { id: 'c', label: 'Politely point out that the rule is completely ridiculous', labelDv: 'އެ ގަވައިދަ އެއް ނުބަސް ކަމެއް މީހަކަށް ފުގޭ ގޮތަކުން ހައްލު ކުރާ', score: 55 },
      { id: 'd', label: 'Challenge the captain immediately and announce that I am now the captain', labelDv: 'ކެޕްޓަން އަށް ފަހަނަވާ އެއްފަހަނަވާ އަމިއިއަށް ކެޕްޓަން ކިޔައި ގަންނައުން', score: 5 },
    ],
  },

  // STAGE 2 — INTERPERSONAL EMPATHY
  {
    id: 13,
    stage: 2,
    prompt: 'When I see someone in the crew being treated disrespectfully, it physically upsets me.',
    promptDv:
      'ކްރޫ މީހުންގެ ތެރެއިން މީހަކަށް އިޚްތިރާމް ނުކުރާ ކަމެއް ހުއްދަ ކޮށް ބެލި އިރު، އެކަމަށް އަހަރެމެ ހިތުގައި ނުރައްކާވާ ކަމެއް އަސަރު ކުރާ.',
    options: [
      { id: 'a', label: 'Always', labelDv: 'އެއްގޮތް', score: 100 },
      { id: 'b', label: 'Often', labelDv: 'ބޮޑަށް', score: 70 },
      { id: 'c', label: 'Rarely', labelDv: 'ކުޑަކަމަކުން', score: 30 },
      { id: 'd', label: 'Never', labelDv: 'އެއްގޮތް', score: 0 },
    ],
  },
  {
    id: 14,
    stage: 2,
    prompt: 'Before criticizing a crew member, I try to imagine how I would feel if I were in their place.',
    promptDv:
      'ކްރޫ މީހަކަށް ސިޔާސީ ކަމެއް ބުނާ ކުރިން، އަމިއިއަށް އެ މީހާ ހުރި ސިޔާސީ ފުރާނައިލަ ނަމަ ކިޔަ ހިތުގައި ހުާލައިދާނޭ ކަމެއް ކަން ގެންގުޅެއެ.',
    options: [
      { id: 'a', label: 'Often', labelDv: 'ބޮޑަށް', score: 100 },
      { id: 'b', label: 'Sometimes', labelDv: 'ކޮންމެދު', score: 60 },
      { id: 'c', label: 'Rarely', labelDv: 'ކުޑަކަމަކުން', score: 30 },
      { id: 'd', label: 'Never', labelDv: 'އެއްގޮތް', score: 0 },
    ],
  },
  {
    id: 15,
    stage: 2,
    prompt: "I can sense the \u201cvibe\u201d of the ship or someone's discomfort without them saying a word.",
    promptDv:
      'މައިމަތި ކޮއްޗެއްގެ މޯދާ ނުވަތަ މީހެއްގެ ހިތް ނުގިނި ހުރި ކަމެއް އެ މީހާ އެއް ވާހަކަ ނުބުރާ އެ ކަމެއް އަމިއިއަށް ސާފު ވެގެން ހުންނަނީ.',
    options: [
      { id: 'a', label: 'Always', labelDv: 'އެއްގޮތް', score: 100 },
      { id: 'b', label: 'Often', labelDv: 'ބޮޑަށް', score: 70 },
      { id: 'c', label: 'Rarely', labelDv: 'ކުޑަކަމަކުން', score: 30 },
      { id: 'd', label: 'Never', labelDv: 'އެއްގޮތް', score: 0 },
    ],
  },
  {
    id: 16,
    stage: 2,
    prompt:
      'If someone tells me about an event that made them happy, I can easily understand why that event made them happy.',
    promptDv:
      'މީހަކު އެމީހާއަށް ހުރީ އެއް ލަފާ ކަމެއް ކަމަށް ބުނާ ވާހަކަ އެއް ދީ އިރު، އެ ކަމަށް އެ މީހާ ލަފާ ވީ ސަބަބު އަމިއިއަށް ފަސޭހަ ގޮތަކުން ސާފު ވެގެން ހުންނަނީ.',
    options: [
      { id: 'a', label: 'Always', labelDv: 'އެއްގޮތް', score: 100 },
      { id: 'b', label: 'Often', labelDv: 'ބޮޑަށް', score: 70 },
      { id: 'c', label: 'Rarely', labelDv: 'ކުޑަކަމަކުން', score: 30 },
      { id: 'd', label: 'Never', labelDv: 'އެއްގޮތް', score: 0 },
    ],
  },
  {
    id: 17,
    stage: 2,
    prompt:
      'A crew member is unusually quiet during dinner aboard the Black Pearl. Nobody has said anything is wrong. What do you do?',
    promptDv:
      'Black Pearl ގެ މައިމަތި ކޮއްޗެއްގައި ނޭކާސް ފަހަނަވާ ހުއްޓާލާ ވަރަށް ވެސް ކްރޫ މީހެއް ކާއިރު އެއްވެސް ވާހަކަ ނުބުރާ އޮތި އިރު، ކިޔަ ކޮބާ ކުރަން؟',
    options: [
      { id: 'a', label: 'Check privately if they are okay', labelDv: 'އެ މީހާއާ އެކަކު ރައްކާ ހުރި ހިތުގައި ސުވާލު ކުރާ', score: 100 },
      { id: 'b', label: 'Give them space', labelDv: 'އެ މީހާއަށް އިންސާފު ދިނުން', score: 60 },
      { id: 'c', label: 'Assume they are simply tired', labelDv: 'އެ މީހާ ހަނގިރޭކަން ހުރި ކަމަށް ބެލާ', score: 30 },
      { id: 'd', label: 'Ignore it unless they complain', labelDv: 'އެ މީހާ އަމިއި ބުނާ ނަމަ އެކަމާ ކިޔާނޫޅުން', score: 5 },
    ],
  },
  {
    id: 18,
    stage: 2,
    prompt: 'Someone tells you about a problem you have experienced yourself. What is the best response?',
    promptDv:
      'މީހަކު އެމީހާ ދިމާވީ މައްޗެއް އެއް ހުރި ކަމެއް އަމިއި ހުރި ކަމަށް ބުނާ އިރު، އެއް ރަނގަޅު ޖަވާބު ކޮބާ؟',
    options: [
      { id: 'a', label: 'Listen to their experience rather than immediately making it about mine', labelDv: 'އެ މީހާގެ ކަމެއް އަމިއި ކަމެއްގެ މައްޗަށް ބަދަލު ކުރަން ކުރިން އެ މީހާ ދިމާވި ކަމެއް އަޑު އަޑު އަހާ', score: 100 },
      { id: 'b', label: 'Tell them how I solved my own problem', labelDv: 'އަމިއި އެ ކަމެއް ކިޔަ ބަދަލު ކުރީ ގޮތް ބުނާ', score: 40 },
      { id: 'c', label: 'Compare whose problem was worse', labelDv: 'މީހުން ދެމީހުންގެ ކަމެއް ކޮން މީހާ ބޮޑެއް', score: 15 },
      { id: 'd', label: 'Tell them to toughen up', labelDv: 'އެ މީހާއަށް ބާރު ހިންގާ ކަމެއް ބުނާ', score: 0 },
    ],
  },
  {
    id: 19,
    stage: 2,
    prompt: 'You accidentally hurt a crew member\u2019s feelings with a joke. What do you do?',
    promptDv:
      'ކްރޫ މީހަކު ހިތް ނުގިނި ކުރަން ކޮއްފި ކޮޅެއް ހަމަ އެކަމަށް ވެސް ދެރަހާ އެއް ހެދި އަދި އެ މީހާ ހަނގި އަލުން. ކިޔަ ކޮބާ ކުރަން؟',
    options: [
      { id: 'a', label: 'Apologize and try to understand why it hurt', labelDv: 'ސައްހަ އިއްވާލާ އަދި އެކަމަށް ހިތް ނުގިނި ސަބަބު ސާފު ކުރައް ހޯދާ', score: 100 },
      { id: 'b', label: 'Explain that I was only joking', labelDv: 'އަމިއި ކޮޅެއް ހަމަ އެކަމަށް ވެސް ދެރަހާ ހެދި ކަމެއް ކަމަށް ބުނާ', score: 40 },
      { id: 'c', label: 'Avoid the person afterward', labelDv: 'އެ މީހާ އާއި ކުރިން އެއް ގޮތް', score: 15 },
      { id: 'd', label: 'Tell them they are too sensitive', labelDv: 'އެ މީހާ ހަތް އެނދުޅޭ މީހާ ކަމަށް ބުނާ', score: 0 },
    ],
  },
  {
    id: 20,
    stage: 2,
    prompt: 'A nervous new pirate makes an obvious mistake on their first day aboard ship. What is your reaction?',
    promptDv:
      'ހިންގާ ޕައިރަޓެއް ފުރަތަމަ ދުވަހު މައިމަތި ކޮއްޗެއްގައި އެއް ކަން ބޮޑަށް މައްޗެއް ހިންގަ އިރު، ކިޔަ ރިއެކްޓް ކޮބާ؟',
    options: [
      { id: 'a', label: 'Help them learn from it', labelDv: 'އެ މީހާއަށް އެ ކަމެއް ދިރާ ކުރައް ހެދާ', score: 100 },
      { id: 'b', label: 'Correct them firmly', labelDv: 'އެ މީހާ ކަން ބޮޑަށް ބަދަލު ކުރައް ހެދާ', score: 55 },
      { id: 'c', label: 'Laugh about it with the other crew', labelDv: 'އެހެން ކްރޫ މީހުން އެކެއްޓެ ހެދި ކިޔާ', score: 20 },
      { id: 'd', label: 'Decide they are useless', labelDv: 'އެ މީހާ ކޮން ކަކު އެއް ނޫޅޭ ކަމަށް ބެލާ', score: 0 },
    ],
  },
  {
    id: 21,
    stage: 2,
    prompt:
      'When someone is angry with me, I can usually recognize the emotion behind their anger, even when we are arguing aboard ship.',
    promptDv:
      'މީހަކު އަމިއި ކާމިޔާބަށް ހިތް ނުގިނި ކޮށް ހަވާފާ ކުރާ އިރު، މައިމަތި ކޮއްޗެއްގައި ހަވާފާ ކުރާ އިރު ވެސް އެ މީހާ ހިތުގައި ހުރި އިހްސާސް ސާފު ކުރައް ހުރި.',
    options: [
      { id: 'a', label: 'Often', labelDv: 'ބޮޑަށް', score: 100 },
      { id: 'b', label: 'Sometimes', labelDv: 'ކޮންމެދު', score: 60 },
      { id: 'c', label: 'Rarely', labelDv: 'ކުޑަކަމަކުން', score: 30 },
      { id: 'd', label: 'Never', labelDv: 'އެއްގޮތް', score: 0 },
    ],
  },
  {
    id: 22,
    stage: 2,
    prompt: 'A friend receives bad news but says, \u201cI\u2019m fine.\u201d What do you assume?',
    promptDv:
      'އެއް ރައްޔަށް ގޯހަ ޚަބަރެއް އައި އިރު \u201cއަހަރެމެ ފިން\u201d ކިޔާ ބުނާ އިރު، ކިޔަ ބެލަނީ ކޮބާ؟',
    options: [
      { id: 'a', label: 'They may be saying they are fine even though they are hurting', labelDv: 'އެ މީހާ ހިތުގައި ހުރީ ބޮޑު ބިރެއް ނަމަވެސް ފިން ކިޔާ ބުނާ ކަމެއް', score: 100 },
      { id: 'b', label: 'They are definitely fine', labelDv: 'އެމީހާ ސާފު ކޮއް ފިން', score: 20 },
      { id: 'c', label: 'They want attention', labelDv: 'އެ މީހާ ހަމަ ކުރަން ބޯއެ', score: 10 },
      { id: 'd', label: 'I cannot know without asking', labelDv: 'ސުވާލެއް ނުކޮށް އެއް ސާފު ނުވޭ', score: 65 },
    ],
  },
  {
    id: 23,
    stage: 2,
    prompt: 'Someone succeeds at something you secretly wanted to achieve. How do you genuinely feel?',
    promptDv:
      'މީހަކު އެއް ކަމެއް ކިޔަ ހަމަ އެކަމަށް ހަމަ އަޅާފައި ހުންނި ކަމެއް ކާމިޔާބު ކޮށް. ކިޔަ ހިތުގައި ހުރީ ކޮބާ އަދި ކިޔަ އިހްސާސް ކޮށްފައި؟',
    options: [
      { id: 'a', label: 'Happy for them while accepting my own disappointment', labelDv: 'އެމީހާ ކާމިޔާބު ވީތީ ހުށަހަޅާ އަދި އަމިއި ހިތުގައި ހުރި ނުރައްކާވުން ކެމުން', score: 100 },
      { id: 'b', label: 'Happy for them, but frustrated with myself', labelDv: 'އެމީހާ ކާމިޔާބު ވީތީ ހުށަހަޅާ އަދި އަމިއިއަށް ހިތް ނުގިނި', score: 65 },
      { id: 'c', label: 'Mostly jealous', labelDv: 'ބޮޑަށް ހިތުގައި ނުރައްކާ ވެގެން', score: 25 },
      { id: 'd', label: 'Their success bothers me considerably', labelDv: 'އެ މީހާ ކާމިޔާބު ވީ ކަމަށް އަމިއި ހިތުގައި ބޮޑަށް ނުރައްކާވެއްޖެ', score: 0 },
    ],
  },
  {
    id: 24,
    stage: 2,
    prompt:
      'A crew member discovers that the captain has secretly replaced their perfectly good chair with a wooden box labelled \u201cLuxury Pirate Throne.\u201d Everyone else is laughing, but the crew member looks genuinely embarrassed. What do you do?',
    promptDv:
      'ކްރޫ މީހެއް ހުންނި ރަގަސް ފާރު އެއް ވަކި ކޮށް އެ މަގަށް \u201cލަކްސަރީ ޕައިރަޓް ތްރޯ\u201d ކިޔާ ގަލައި ބޯކޮޅެއް ބަދަލު ކޮށްފި ކަމަށް ހޯދާ. އެހެން ކްރޫ މީހުން ކޮޅުން ކިޔާ އިރު އެ މީހާ ބޮޑަށް ހިތް ނުގިނި ހުރި. ކިޔަ ކޮބާ ކުރަން؟',
    options: [
      { id: 'a', label: 'Notice they are uncomfortable and stop the joke from going further', labelDv: 'އެ މީހާ ހިތް ނުގިނި ހުރި ކަމެއް ހޯދާ އަދި އެ ކޮޅު އިތުރު އިސް ނުވާ ކުރާ', score: 100 },
      { id: 'b', label: 'Laugh along but check on them afterward', labelDv: 'ކިޔާ އިރު ފަހުނު އެ މީހާ ސިއްހަތު ސުވާލު ކުރާ', score: 60 },
      { id: 'c', label: 'Tell them it is only a joke and they should enjoy it', labelDv: 'އެ ކޮޅެއް ކަމެއް ކަމަށް ބުނާ އަދި އެ މީހާ ލަފާ ކުރަން', score: 25 },
      { id: 'd', label: 'Join the crew in making the joke even worse', labelDv: 'އެހެން ކްރޫ މީހުން އެކެއްޓެ ކޮޅު އިތުރަށް ބޮޑު ކުރާ', score: 0 },
    ],
  },

  // STAGE 3 — CONSCIOUSNESS DEPTH & REALITY TESTING
  {
    id: 25,
    stage: 3,
    prompt:
      'I see myself as an observer of my thoughts rather than being controlled by them, even when my mind feels like a storm at sea.',
    promptDv:
      'އަމިއި ހިތުގައި ފިކުރާ އެއް ވައްތަރު މަޔާއިން ސިޓީ ހުރި ވަގުތު ވެސް އެ ފިކުރާ ތަކުން ކޮންޓްރޯލް ނުވާ އަމިއި އެ ފިކުރާ ތައް ބެލާ މީހާ އެއް ގޮތަށް ހުންނަނީ.',
    options: [
      { id: 'a', label: 'Always', labelDv: 'އެއްގޮތް', score: 100 },
      { id: 'b', label: 'Sometimes', labelDv: 'ކޮންމެދު', score: 55 },
      { id: 'c', label: 'Never', labelDv: 'އެއްގޮތް', score: 0 },
    ],
  },
  {
    id: 26,
    stage: 3,
    safetyTrigger: true,
    prompt: 'Do you ever feel that you are not in control of your own ideas or thoughts?',
    promptDv:
      'އަމިއި ހިތުގައި ފިކުރާ އެއް ވައްތަރު ކޮންޓްރޯލް ނުވާ އިހްސާސެއް ކިޔަ ހުރި ކަމެއް ކަން ވާނޭ ކަމެއް ހުރި ކަމަށް ސުވާލު ކުރަން؟',
    options: [
      { id: 'a', label: 'No', labelDv: 'ނޫން', score: 100 },
      { id: 'b', label: 'Unsure', labelDv: 'ސާފު ނޫން', score: 50 },
      { id: 'c', label: 'Yes', labelDv: 'އާއ', score: 0 },
    ],
  },
  {
    id: 27,
    stage: 3,
    safetyTrigger: true,
    prompt:
      'Do familiar surroundings sometimes seem strange, confusing, threatening, or unreal to you, as though the ship and sea suddenly feel unfamiliar?',
    promptDv:
      'އެއް ފަހަނަވާ މައިމަތި ކޮއްޗާ އެއް ފަހަނަވާ މަޔާ އެއް ފަހަނަވާ ފިކުރާ ނުގިނި ކަމެއް ކިޔަ ހިތުގައި ހުރި ކަމެއް ފެނި އިހްސާސް ވެއްޖެ ކަމެއް ހުރި ކަމަށް ސުވާލު ކުރަން؟',
    options: [
      { id: 'a', label: 'Never', labelDv: 'އެއްގޮތް', score: 100 },
      { id: 'b', label: 'Rarely', labelDv: 'ކުޑަކަމަކުން', score: 60 },
      { id: 'c', label: 'Often', labelDv: 'ބޮޑަށް', score: 0 },
    ],
  },
  {
    id: 28,
    stage: 3,
    safetyTrigger: true,
    prompt: 'Do you often feel that people are watching you, talking about you, or taking special notice of you?',
    promptDv:
      'މީހުން އަމިއި ބެލާ އަމިއި މާއިލް ވާހަކަ ކުރާ އަމިއި ހަރަން ވާ ކަމެއް ކިޔަ ހުރި ކަމަށް ބޮޑަށް އިހްސާސް ވެއްޖެ ކަމެއް ހުރި ކަމަށް ސުވާލު ކުރަން؟',
    options: [
      { id: 'a', label: 'Never', labelDv: 'އެއްގޮތް', score: 100 },
      { id: 'b', label: 'Rarely', labelDv: 'ކުޑަކަމަކުން', score: 60 },
      { id: 'c', label: 'Often', labelDv: 'ބޮޑަށް', score: 0 },
    ],
  },
  {
    id: 29,
    stage: 3,
    prompt:
      'When a strong emotion takes over, can you step back and recognize that you are experiencing an emotion rather than simply becoming the emotion?',
    promptDv:
      'ބޮޑު އިހްސާސެއް އަމިއި ކޮއް ހިންގަ އިރު އެ އިހްސާސް ވެރި ނުވާ އެ އިހްސާސް އެއް ކަމަށް ސާފު ކުރައް ފެއްދައި އެ އިހްސާސް ވެރި ނުވާ ކަން ކިޔަ ހުއްދަ ހުންނޭ ކަމަށް ސުވާލު ކުރަން؟',
    options: [
      { id: 'a', label: 'Usually', labelDv: 'އެއްގޮތް', score: 100 },
      { id: 'b', label: 'Sometimes', labelDv: 'ކޮންމެދު', score: 55 },
      { id: 'c', label: 'Rarely', labelDv: 'ކުޑަކަމަކުން', score: 25 },
      { id: 'd', label: 'Never', labelDv: 'އެއްގޮތް', score: 0 },
    ],
  },
  {
    id: 30,
    stage: 3,
    prompt:
      'When you have a strange or frightening thought, can you recognize that having the thought does not necessarily mean it is true?',
    promptDv:
      'އަމިއި ހިތުގައި އަކުރެއް ނުވަތަ ބިރު އިހްސާސެއް އައި ފިކުރާ އެއް އައި އިރު އެ ފިކުރާ އެއް ސާފު ކަމަށް އެ ފިކުރާ އެއް ހަމަ ކަން ނުވާ ކަން ސާފު ކުރައް ހުއްދަ ހުންނޭ ކަމަށް ސުވާލު ކުރަން؟',
    options: [
      { id: 'a', label: 'Usually', labelDv: 'އެއްގޮތް', score: 100 },
      { id: 'b', label: 'Sometimes', labelDv: 'ކޮންމެދު', score: 55 },
      { id: 'c', label: 'Rarely', labelDv: 'ކުޑަކަމަކުން', score: 25 },
      { id: 'd', label: 'Never', labelDv: 'އެއްގޮތް', score: 0 },
    ],
  },
  {
    id: 31,
    stage: 3,
    prompt:
      'Have you ever experienced a moment when reality felt unusually dreamlike or unreal, even while everything around you appeared normal?',
    promptDv:
      'އެއް ފަހަނަވާ މައިމަތި މޯދު ފެންނަ ކަމެއް ހުރި ނަމަވެސް ރިއެލިޓީ އެއް ފޮތަކެއް ފަދަ އިހްސާސެއް ކިޔަ ލިބިފައި ހުރި ކަމެއް ހުރި ކަމަށް ސުވާލު ކުރަން؟',
    options: [
      { id: 'a', label: 'Never', labelDv: 'އެއްގޮތް', score: 100 },
      { id: 'b', label: 'Rarely', labelDv: 'ކުޑަކަމަކުން', score: 70 },
      { id: 'c', label: 'Sometimes', labelDv: 'ކޮންމެދު', score: 35 },
      { id: 'd', label: 'Often', labelDv: 'ބޮޑަށް', score: 0 },
    ],
  },
  {
    id: 32,
    stage: 3,
    prompt:
      'When you strongly believe something happened, but another person remembers it differently, what do you usually do?',
    promptDv:
      'އަމިއި ބޮޑަށް ހުންނި ކަމެއް ހަރަން ވި ކަމެއް އެހެން މީހަކު އެއް ގޮތަކު ހަންދާ ކަމަށް ބުނާ އިރު ކިޔަ އާންގޭ ކުރަން؟',
    options: [
      { id: 'a', label: 'Consider that my memory could be wrong', labelDv: 'އަމިއި ހަންދާ ކަމެއް މައްޗެއް ވެސް ސާފު ކުރައް ހުރި', score: 100 },
      { id: 'b', label: 'Discuss the differences and try to establish what happened', labelDv: 'ތަފާތު ކަން ތައް ހަވާފާ ކޮށް އަބައިލަކު ހަރަން ވީ ކަމެއް ސާފު ކުރައް ހޯދާ', score: 80 },
      { id: 'c', label: 'Trust my memory unless proven otherwise', labelDv: 'ސާފު ނުވާ ކަމެއް ނޫން އަމިއި ހަންދާ ކަމެއް އިތުރު', score: 40 },
      { id: 'd', label: 'Assume the other person is probably lying', labelDv: 'އެ މީހާ ދެރިހެއް ވެއްޖެ ކަމަށް ބެލާ', score: 0 },
    ],
  },
  {
    id: 33,
    stage: 3,
    prompt:
      'When several unrelated events happen around you, do you sometimes feel they are connected specifically to you?',
    promptDv:
      'އެއް ގުޅުން ނެތި ކަން ތައް އެއްއެއް ހަރަން ވެއްޖެ އިރު އެ ކަން ތައް އަމިއި އާއި ގުޅިފައި ހުރި ކަމެއް ކިޔަ އިހްސާސް ވެއްޖެ ކަމެއް ހުރި ކަމަށް ސުވާލު ކުރަން؟',
    options: [
      { id: 'a', label: 'Never', labelDv: 'އެއްގޮތް', score: 100 },
      { id: 'b', label: 'Rarely', labelDv: 'ކުޑަކަމަކުން', score: 70 },
      { id: 'c', label: 'Sometimes', labelDv: 'ކޮންމެދު', score: 30 },
      { id: 'd', label: 'Often', labelDv: 'ބޮޑަށް', score: 0 },
    ],
  },
  {
    id: 34,
    stage: 3,
    prompt: 'Can you usually distinguish between something you strongly suspect and something you actually know to be true?',
    promptDv:
      'އަމިއި ބޮޑަށް ހިޔާން ކުރާ ކަމެއް އަދި ސާފު ކޮއް ހުންނި ކަމެއް އެއް ކަން ސާފު ގޮތަކުން ފުލުއްވާ ކަން ކިޔަ ހުއްދަ ހުންނޭ ކަމަށް ސުވާލު ކުރަން؟',
    options: [
      { id: 'a', label: 'Easily', labelDv: 'ފަސޭހަ ގޮތަށް', score: 100 },
      { id: 'b', label: 'Usually', labelDv: 'އެއްގޮތް', score: 70 },
      { id: 'c', label: 'Sometimes', labelDv: 'ކޮންމެދު', score: 35 },
      { id: 'd', label: 'Rarely', labelDv: 'ކުޑަކަމަކުން', score: 0 },
    ],
  },
  {
    id: 35,
    stage: 3,
    prompt: 'When your mind produces an unusual idea, how do you normally treat it?',
    promptDv:
      'އަމިއި ހިތުގައި އަކުރެއް ފިކުރާ އެއް އައި އިރު ކިޔަ އެ ފިކުރާ އެއް ކިޔަ މޮޅު ގޮތަކު ހައްލު ކުރަން؟',
    options: [
      { id: 'a', label: 'Examine it and compare it with reality', labelDv: 'އެ ފިކުރާ އެއް ބަލާ ރިއެލިޓީ އާއި އަޅާއިގެން ބަލާ', score: 100 },
      { id: 'b', label: 'Think about it for a while', labelDv: 'އެ ފިކުރާ އެއް މަޑުކޮށް ބަލާ', score: 60 },
      { id: 'c', label: 'Accept it if it feels convincing', labelDv: 'އެ ފިކުރާ އެއް ސާފު ކޮއް ހުންނި ކަމެއް ކަމަށް ހިތުގައި ހިގާ', score: 20 },
      { id: 'd', label: 'Assume it must be true because I experienced it', labelDv: 'އަމިއި އިހްސާސް ކުރީ ތީ އެ ފިކުރާ އެއް ސާފު ކަމަށް ބެލާ', score: 0 },
    ],
  },
  {
    id: 36,
    stage: 3,
    prompt:
      'The Black Pearl disappears into thick fog. You look over the side and see a pirate skeleton waving at you from the water while shouting, \u201cYour mother says you are late for dinner!\u201d Nobody else sees or hears anything. What is the most sensible first reaction?',
    promptDv:
      'Black Pearl ގެ މައިމަތި ކޮއްޗެއް ބޮޑު ހިޔަ ގަލައި ދެމި ހިމެނި. އެއް ފަރާތަށް ބެލާ އިރު މަޔާއިން ޕައިރަޓް ކަނޑުކޮޅެއް އަތްލައި އަހަރެމެ \u201cއެއް މާފޮޅުން އެހެން ނިއުނު ބުނެއް!\u201d ކިޔާ ކިޔާ ކަމެއް ހުރި. އެއްވެސް މީހަކު އެކަމެއް ނުފެންނެ އެކަމެއް ނުއަހައެ. އެއް މޮޅު ފުރަތަމަ ރިއެކްޝަން ކޮބާ؟',
    options: [
      { id: 'a', label: 'Check for an ordinary explanation and ask the crew what they actually observed', labelDv: 'އެއް އާންގޭ ސަބަބެއް ހޯދާ އަދި ކްރޫ މީހުން އަބައިލަކު ހަރަން ވީ ކަމެއް ސުވާލު ކުރާ', score: 100 },
      { id: 'b', label: 'Assume I probably misunderstood what I saw or heard', labelDv: 'އަމިއި ފެނީ އަހަނީ ކަމެއް ސާފު ނުވީ ކަމަށް ބެލާ', score: 75 },
      { id: 'c', label: 'Become curious and investigate while keeping an open mind', labelDv: 'ހިތުގައި ހުވައި ހުރި ހިތުގައި ސުވާލު ކުރާ', score: 55 },
      { id: 'd', label: 'Immediately conclude that the ghost pirate has personally selected me for a supernatural mission', labelDv: 'އެ ކަނޑުކޮޅު ޕައިރަޓް އަމިއިއަށް ޚާއްޞަ ސިޔާސީ މިޝަނެއްގެ އިޚްތިޔާރު ކޮށްފި ކަމަށް ބަހާ', score: 0 },
    ],
  },
];
