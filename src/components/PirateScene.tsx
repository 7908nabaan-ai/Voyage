import type { PirateSceneKey } from '@/types';

interface SceneProps {
  scene: PirateSceneKey;
  className?: string;
}

export function PirateScene({ scene, className }: SceneProps) {
  return (
    <svg
      viewBox="0 0 400 300"
      className={className}
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-hidden="true"
    >
      {renderScene(scene)}
    </svg>
  );
}

function renderScene(scene: PirateSceneKey) {
  switch (scene) {
    case 'blackPearlShip':
      return <BlackPearlShip />;
    case 'cardboardBoat':
      return <CardboardBoat />;
    case 'captainHakeem':
      return <CaptainHakeem />;
    case 'femalePirate':
      return <FemalePirate />;
    case 'crewDeck':
      return <CrewDeck />;
    case 'skullTreasure':
      return <SkullTreasure />;
    case 'fogOcean':
      return <FogOcean />;
    case 'tavern':
      return <Tavern />;
    case 'graveyard':
      return <Graveyard />;
    case 'lanternDeck':
      return <LanternDeck />;
    case 'rigging':
      return <Rigging />;
    case 'treasureMap':
      return <TreasureMap />;
    default:
      return <FogOcean />;
  }
}

const OCEAN = '#0E2A47';
const SKY_TOP = '#1A1A2E';
const SKY_MID = '#16213E';
const MOON = '#E8E8E8';
const FOG = '#2C3E5A';
const LANTERN = '#F5A623';
const SAND = '#C8A464';
const WOOD = '#5C3A1E';
const WOOD_LIGHT = '#7A4F2A';
const SKULL = '#F0EBD8';
const SKULL_SHADOW = '#C4BDAA';
const SKIN = '#D4A574';
const SKIN_DARK = '#B8895E';
const RED = '#C0392B';
const GREEN = '#1E8449';

function Sky({ gradient }: { gradient?: string }) {
  return (
    <>
      <defs>
        <linearGradient id={gradient || 'sky'} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={SKY_TOP} />
          <stop offset="50%" stopColor={SKY_MID} />
          <stop offset="100%" stopColor={OCEAN} />
        </linearGradient>
      </defs>
      <rect width="400" height="300" fill={`url(#${gradient || 'sky'})`} />
    </>
  );
}

function Moon() {
  return (
    <g>
      <circle cx="320" cy="55" r="25" fill={MOON} opacity="0.9" />
      <circle cx="310" cy="48" r="22" fill={SKY_MID} opacity="0.5" />
      <circle cx="320" cy="55" r="35" fill={MOON} opacity="0.15" />
    </g>
  );
}

function Ocean({ y = 220 }: { y?: number }) {
  return (
    <g>
      <rect x="0" y={y} width="400" height={300 - y} fill={OCEAN} />
      <path
        d={`M0 ${y + 10} Q50 ${y + 5} 100 ${y + 10} T200 ${y + 10} T300 ${y + 10} T400 ${y + 10}`}
        stroke={FOG}
        strokeWidth="1.5"
        fill="none"
        opacity="0.4"
      />
      <path
        d={`M0 ${y + 25} Q60 ${y + 20} 120 ${y + 25} T240 ${y + 25} T400 ${y + 25}`}
        stroke={FOG}
        strokeWidth="1.5"
        fill="none"
        opacity="0.3"
      />
    </g>
  );
}

function FogLayer() {
  return (
    <g opacity="0.35">
      <ellipse cx="100" cy="200" rx="120" ry="25" fill={FOG} />
      <ellipse cx="280" cy="190" rx="140" ry="30" fill={FOG} />
      <ellipse cx="200" cy="210" rx="180" ry="20" fill={FOG} />
    </g>
  );
}

function Lantern({ x, y, scale = 1 }: { x: number; y: number; scale?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <line x1="0" y1="-30" x2="0" y2="-5" stroke={WOOD_LIGHT} strokeWidth="1.5" />
      <rect x="-6" y="-5" width="12" height="18" rx="2" fill={WOOD} />
      <rect x="-4" y="-3" width="8" height="14" rx="1" fill={LANTERN} opacity="0.9" />
      <circle cx="0" cy="4" r="3" fill={LANTERN} opacity="0.6" />
    </g>
  );
}

function PirateSkeleton({ x, y, scale = 1, waving = false }: { x: number; y: number; scale?: number; waving?: boolean }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <ellipse cx="0" cy="-20" rx="10" ry="12" fill={SKULL} />
      <ellipse cx="-3" cy="-21" rx="2.5" ry="3" fill="#1A1A2E" />
      <ellipse cx="3" cy="-21" rx="2.5" ry="3" fill="#1A1A2E" />
      <path d="M-4 -15 L-3 -13 L-2 -15 L-1 -13 L0 -15 L1 -13 L2 -15 L3 -13 L4 -15" stroke="#1A1A2E" strokeWidth="0.8" fill="none" />
      <line x1="0" y1="-8" x2="0" y2="15" stroke={SKULL} strokeWidth="3" />
      <line x1="0" y1="-5" x2="-10" y2="5" stroke={SKULL} strokeWidth="2" />
      <line x1="0" y1="-5" x2={waving ? '14' : '10'} y2={waving ? '-10' : '5'} stroke={SKULL} strokeWidth="2" />
      <path d="M-4 15 L-6 28 M4 15 L6 28" stroke={SKULL} strokeWidth="2" />
    </g>
  );
}

function Ship({ x, y, scale = 1, flag = true }: { x: number; y: number; scale?: number; flag?: boolean }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <path d="M-40 0 Q-35 15 -25 18 L25 18 Q35 15 40 0 Z" fill={WOOD} />
      <path d="M-40 0 L40 0" stroke={WOOD_LIGHT} strokeWidth="2" />
      <line x1="-30" y1="0" x2="-30" y2="-60" stroke={WOOD_LIGHT} strokeWidth="2" />
      <line x1="-30" y1="-60" x2="-10" y2="-50" stroke={WOOD_LIGHT} strokeWidth="1" />
      {flag && (
        <>
          <line x1="-30" y1="-60" x2="-30" y2="-80" stroke={WOOD_LIGHT} strokeWidth="1.5" />
          <path d="M-30 -78 L-15 -75 L-30 -70 Z" fill={RED} />
          <circle cx="-37" cy="-74" r="3" fill={SKULL} opacity="0.8" />
        </>
      )}
      <rect x="-20" y="-15" width="14" height="14" fill="#1A1A2E" stroke={WOOD_LIGHT} strokeWidth="1" />
      <rect x="0" y="-12" width="10" height="10" fill="#1A1A2E" stroke={WOOD_LIGHT} strokeWidth="1" />
    </g>
  );
}

function BlackPearlShip() {
  return (
    <g>
      <Sky />
      <Moon />
      <Ocean />
      <Ship x={200} y={220} scale={1.5} />
      <FogLayer />
      <circle cx="200" cy="220" r="60" fill={FOG} opacity="0.2" />
    </g>
  );
}

function CardboardBoat() {
  return (
    <g>
      <Sky />
      <Moon />
      <Ocean y={230} />
      <g transform="translate(200 225)">
        <path d="M-30 0 Q-25 10 -18 12 L18 12 Q25 10 30 0 Z" fill="#B8860B" />
        <rect x="-8" y="-20" width="16" height="20" fill="#A0522D" opacity="0.6" />
        <text x="0" y="-10" fontSize="8" fill="#5C3A1E" textAnchor="middle" fontWeight="bold">BOX</text>
        <line x1="0" y1="-20" x2="0" y2="-30" stroke="#5C3A1E" strokeWidth="1" />
        <path d="M0 -28 L12 -25 L0 -22 Z" fill={RED} />
      </g>
      <FogLayer />
    </g>
  );
}

function CaptainHakeem() {
  return (
    <g>
      <Sky gradient="sky2" />
      <Moon />
      <Ocean y={240} />
      <g transform="translate(200 200)">
        <rect x="-50" y="0" width="100" height="30" fill={WOOD} />
        <rect x="-30" y="-50" width="3" height="50" fill={WOOD_LIGHT} />
        <circle cx="30" cy="-60" r="12" fill={WOOD_LIGHT} />
        <line x1="30" y1="-60" x2="30" y2="-80" stroke={WOOD_LIGHT} strokeWidth="1.5" />
        <line x1="30" y1="-72" x2="50" y2="-68" stroke={WOOD_LIGHT} strokeWidth="1" />
        <line x1="30" y1="-68" x2="52" y2="-55" stroke={WOOD_LIGHT} strokeWidth="1" />
      </g>
      <g transform="translate(200 180)">
        <circle cx="0" cy="-30" r="14" fill={SKIN} />
        <ellipse cx="-4" cy="-32" rx="2" ry="2.5" fill="#1A1A2E" />
        <ellipse cx="4" cy="-32" rx="2" ry="2.5" fill="#1A1A2E" />
        <path d="M-4 -24 Q0 -22 4 -24" stroke="#1A1A2E" strokeWidth="1" fill="none" />
        <path d="M-16 -44 Q0 -58 16 -44 Q18 -38 16 -36 Q0 -28 -16 -36 Q-18 -38 -16 -44" fill="#8B4513" />
        <ellipse cx="0" cy="-42" rx="20" ry="6" fill="#A0522D" />
        <rect x="-12" y="-18" width="24" height="25" rx="4" fill={RED} />
        <path d="M-16 -38 L14 -22 M-14 -36 L16 -20" stroke="#FFD700" strokeWidth="1.5" />
      </g>
      <FogLayer />
    </g>
  );
}

function FemalePirate() {
  return (
    <g>
      <Sky />
      <Moon />
      <Ocean y={250} />
      <g transform="translate(180 200)">
        <circle cx="0" cy="-30" r="12" fill={SKIN} />
        <path d="M-12 -35 Q-10 -45 0 -42 Q10 -45 12 -35 Q10 -30 0 -28 Q-10 -30 -12 -35" fill="#2C1810" />
        <ellipse cx="-3" cy="-30" rx="1.5" ry="2" fill="#1A1A2E" />
        <ellipse cx="3" cy="-30" rx="1.5" ry="2" fill="#1A1A2E" />
        <path d="M-3 -25 Q0 -23 3 -25" stroke="#1A1A2E" strokeWidth="0.8" fill="none" />
        <rect x="-10" y="-18" width="20" height="22" rx="3" fill={GREEN} />
        <line x1="0" y1="-18" x2="0" y2="4" stroke="#FFD700" strokeWidth="0.8" />
        <path d="M-10 -10 L10 -10" stroke="#FFD700" strokeWidth="0.8" />
        <path d="M10 -15 Q25 -20 28 -35 Q30 -50 20 -55" stroke={SKIN} strokeWidth="2" fill="none" />
      </g>
      <Ship x={250} y={245} scale={0.5} flag={false} />
      <FogLayer />
    </g>
  );
}

function CrewDeck() {
  return (
    <g>
      <Sky />
      <Moon />
      <rect x="0" y="220" width="400" height="80" fill={WOOD} />
      <line x1="0" y1="220" x2="400" y2="220" stroke={WOOD_LIGHT} strokeWidth="2" />
      {[40, 120, 200, 280, 360].map((x, i) => (
        <g key={i} transform={`translate(${x} 210)`}>
          <circle cx="0" cy="-10" r="6" fill={SKIN} />
          <rect x="-5" y="-4" width="10" height="14" rx="2" fill={i % 2 === 0 ? RED : GREEN} />
        </g>
      ))}
      <Lantern x={30} y={210} scale={0.7} />
      <Lantern x={370} y={210} scale={0.7} />
      <FogLayer />
    </g>
  );
}

function SkullTreasure() {
  return (
    <g>
      <Sky />
      <Moon />
      <Ocean y={230} />
      <g transform="translate(200 230)">
        <path d="M-60 0 Q-40 -30 -20 -25 L20 -25 Q40 -30 60 0 Z" fill="#2A2A3E" />
        <ellipse cx="-20" cy="-40" rx="12" ry="15" fill={SKULL} />
        <ellipse cx="-23" cy="-42" rx="3" ry="4" fill="#1A1A2E" />
        <ellipse cx="-17" cy="-42" rx="3" ry="4" fill="#1A1A2E" />
        <path d="M-24 -30 L-22 -27 L-20 -30 L-18 -27 L-16 -30" stroke="#1A1A2E" strokeWidth="0.8" fill="none" />
        <path d="M-20 -25 L-20 -18" stroke={SKULL_SHADOW} strokeWidth="1.5" />
        <rect x="-5" y="-15" width="20" height="12" rx="2" fill="#FFD700" />
        <rect x="2" y="-12" width="6" height="6" fill="#FFA500" opacity="0.7" />
        <circle cx="8" cy="-18" r="3" fill="#FFD700" />
      </g>
      <FogLayer />
    </g>
  );
}

function FogOcean() {
  return (
    <g>
      <Sky />
      <Moon />
      <Ocean />
      <FogLayer />
      <ellipse cx="200" cy="210" rx="200" ry="30" fill={FOG} opacity="0.5" />
      <ellipse cx="100" cy="230" rx="150" ry="20" fill={FOG} opacity="0.4" />
    </g>
  );
}

function Tavern() {
  return (
    <g>
      <rect width="400" height="300" fill="#2A1A0E" />
      <rect x="0" y="220" width="400" height="80" fill="#1A0E06" />
      {[80, 200, 320].map((x, i) => (
        <g key={i}>
          <rect x={x - 30} y="0" width="60" height="220" fill="#3A2A1E" opacity="0.5" />
          <Lantern x={x} y={50} scale={1.2} />
          <circle cx={x} cy={55} r="30" fill={LANTERN} opacity="0.15" />
        </g>
      ))}
      <rect x="100" y="180" width="200" height="10" fill={WOOD_LIGHT} />
      <g transform="translate(150 195)">
        <rect x="-15" y="0" width="30" height="20" rx="3" fill="#8B4513" />
        <circle cx="0" cy="-5" r="8" fill={SKIN} />
      </g>
      <g transform="translate(250 195)">
        <rect x="-15" y="0" width="30" height="20" rx="3" fill="#8B4513" />
        <circle cx="0" cy="-5" r="8" fill={SKIN_DARK} />
      </g>
    </g>
  );
}

function Graveyard() {
  return (
    <g>
      <Sky />
      <Moon />
      <Ocean y={250} />
      <rect x="0" y="230" width="400" height="70" fill={SAND} opacity="0.6" />
      {[60, 150, 250, 340].map((x, i) => (
        <g key={i} transform={`translate(${x} 240)`}>
          <path d={`M0 0 L0 -${20 + i * 5} Q5 -${25 + i * 5} 10 -${20 + i * 5} L10 0 Z`} fill={SKULL_SHADOW} opacity="0.7" />
          <line x1="5" y1={-15} x2="5" y2={-10} stroke="#1A1A2E" strokeWidth="1" />
          <line x1="2" y1={-13} x2="8" y2={-13} stroke="#1A1A2E" strokeWidth="1" />
        </g>
      ))}
      <g transform="translate(200 245)">
        <ellipse cx="0" cy="-8" rx="8" ry="10" fill={SKULL} opacity="0.5" />
        <line x1="0" y1="0" x2="0" y2="-5" stroke={SKULL} strokeWidth="2" opacity="0.5" />
      </g>
      <FogLayer />
    </g>
  );
}

function LanternDeck() {
  return (
    <g>
      <Sky />
      <Moon />
      <rect x="0" y="200" width="400" height="100" fill={WOOD} />
      <line x1="0" y1="200" x2="400" y2="200" stroke={WOOD_LIGHT} strokeWidth="2" />
      <Lantern x={50} y={195} scale={1.3} />
      <Lantern x={150} y={195} scale={1.3} />
      <Lantern x={250} y={195} scale={1.3} />
      <Lantern x={350} y={195} scale={1.3} />
      <circle cx="50" cy="190" r="40" fill={LANTERN} opacity="0.12" />
      <circle cx="150" cy="190" r="40" fill={LANTERN} opacity="0.12" />
      <circle cx="250" cy="190" r="40" fill={LANTERN} opacity="0.12" />
      <circle cx="350" cy="190" r="40" fill={LANTERN} opacity="0.12" />
      <FogLayer />
    </g>
  );
}

function Rigging() {
  return (
    <g>
      <Sky />
      <Moon />
      <Ocean y={240} />
      <g transform="translate(200 240)">
        <rect x="-60" y="0" width="120" height="20" fill={WOOD} />
        <line x1="-20" y1="0" x2="-20" y2="-120" stroke={WOOD_LIGHT} strokeWidth="2" />
        <line x1="20" y1="0" x2="20" y2="-120" stroke={WOOD_LIGHT} strokeWidth="2" />
        <line x1="-20" y1="-40" x2="20" y2="-40" stroke={WOOD_LIGHT} strokeWidth="1" />
        <line x1="-20" y1="-80" x2="20" y2="-80" stroke={WOOD_LIGHT} strokeWidth="1" />
        <line x1="-20" y1="0" x2="20" y2="-40" stroke={WOOD_LIGHT} strokeWidth="1" />
        <line x1="20" y1="0" x2="-20" y2="-40" stroke={WOOD_LIGHT} strokeWidth="1" />
        <line x1="-20" y1="-40" x2="20" y2="-80" stroke={WOOD_LIGHT} strokeWidth="1" />
        <line x1="20" y1="-40" x2="-20" y2="-80" stroke={WOOD_LIGHT} strokeWidth="1" />
      </g>
      <g transform="translate(200 175)">
        <circle cx="0" cy="-10" r="7" fill={SKIN} />
        <rect x="-5" y="-3" width="10" height="12" rx="2" fill={RED} />
      </g>
      <Lantern x={140} y={210} scale={0.8} />
      <FogLayer />
    </g>
  );
}

function TreasureMap() {
  return (
    <g>
      <Sky />
      <Moon />
      <rect x="0" y="240" width="400" height="60" fill={SAND} opacity="0.5" />
      <g transform="translate(200 200)">
        <rect x="-80" y="-30" width="160" height="60" rx="4" fill="#D4B683" transform="rotate(-3)" />
        <rect x="-78" y="-28" width="156" height="56" rx="3" fill="none" stroke="#8B6914" strokeWidth="1" transform="rotate(-3)" />
        <path d="M-50 -15 Q-30 -25 -10 -10 Q10 -20 30 -5 Q50 -15 60 0" stroke="#5C3A1E" strokeWidth="1.5" fill="none" transform="rotate(-3)" />
        <text x="-20" y="5" fontSize="10" fill="#5C3A1E" fontWeight="bold">X</text>
        <circle cx="-20" cy="2" r="8" fill="none" stroke={RED} strokeWidth="1.5" />
      </g>
      <g transform="translate(120 190)">
        <circle cx="0" cy="-8" r="6" fill={SKIN} />
        <rect x="-5" y="-2" width="10" height="10" rx="2" fill={RED} />
      </g>
      <g transform="translate(280 195)">
        <circle cx="0" cy="-8" r="6" fill={SKIN_DARK} />
        <rect x="-5" y="-2" width="10" height="10" rx="2" fill={GREEN} />
      </g>
      <FogLayer />
    </g>
  );
}
