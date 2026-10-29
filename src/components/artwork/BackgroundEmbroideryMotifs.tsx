import React from 'react';

/**
 * BackgroundEmbroideryMotifs
 * Handcrafted vector embroidery motifs modeled directly after the authentic 
 * terracotta embroidered linen textile (scalloped lace rosettes, radiating spoke wheels,
 * sunburst daisies, and 8-petal blossoms).
 * Positioned tastefully as ambient atmospheric watermarks in the background margins.
 */

export const ScallopedLaceRosette: React.FC<{
  size?: number;
  className?: string;
  color?: string;
  accentColor?: string;
}> = ({
  size = 200,
  className = '',
  color = '#DEC5A3',
  accentColor = '#B8442D',
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      {/* Outer scalloped ring with 10 lobes */}
      <g stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path
          d="M 100,10 
             C 112,10 120,22 131,23 
             C 142,24 152,36 161,43 
             C 170,50 174,65 178,76 
             C 182,87 181,102 178,113 
             C 175,124 167,137 159,146 
             C 151,155 140,165 128,169 
             C 116,173 103,178 91,176 
             C 79,174 68,165 57,159 
             C 46,153 38,141 33,130 
             C 28,119 25,105 27,93 
             C 29,81 35,69 42,59 
             C 49,49 59,41 71,34 
             C 83,27 92,10 100,10 Z"
          strokeDasharray="3 2"
        />
        {/* Scalloped decorative outer boundary */}
        <circle cx="100" cy="100" r="82" stroke={color} strokeWidth="1" strokeDasharray="2 3" opacity="0.6" />
        <circle cx="100" cy="100" r="76" stroke={color} strokeWidth="1.5" />
      </g>

      {/* Radiating satin-stitch rib spokes */}
      <g stroke={color} strokeWidth="1" opacity="0.75">
        {Array.from({ length: 24 }).map((_, i) => {
          const angle = (i * 360) / 24;
          const rad = (angle * Math.PI) / 180;
          const x1 = 100 + Math.cos(rad) * 48;
          const y1 = 100 + Math.sin(rad) * 48;
          const x2 = 100 + Math.cos(rad) * 75;
          const y2 = 100 + Math.sin(rad) * 75;
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} strokeDasharray="3 1.5" />;
        })}
      </g>

      {/* Middle eyelet perforations ring */}
      <circle cx="100" cy="100" r="48" stroke={color} strokeWidth="1.6" />
      <g fill={color}>
        {Array.from({ length: 16 }).map((_, i) => {
          const angle = (i * 360) / 16;
          const rad = (angle * Math.PI) / 180;
          const cx = 100 + Math.cos(rad) * 48;
          const cy = 100 + Math.sin(rad) * 48;
          return <circle key={i} cx={cx} cy={cy} r="2.2" fill={accentColor} opacity="0.8" />;
        })}
      </g>

      {/* Inner floral star rosette */}
      <circle cx="100" cy="100" r="30" stroke={color} strokeWidth="1.2" strokeDasharray="2 2" />
      <g stroke={accentColor} strokeWidth="1.5" fill="none">
        {Array.from({ length: 8 }).map((_, i) => {
          const angle = (i * 360) / 8;
          const rad = (angle * Math.PI) / 180;
          const tipX = 100 + Math.cos(rad) * 26;
          const tipY = 100 + Math.sin(rad) * 26;
          const leftRad = ((angle - 22.5) * Math.PI) / 180;
          const rightRad = ((angle + 22.5) * Math.PI) / 180;
          const b1X = 100 + Math.cos(leftRad) * 12;
          const b1Y = 100 + Math.sin(leftRad) * 12;
          const b2X = 100 + Math.cos(rightRad) * 12;
          const b2Y = 100 + Math.sin(rightRad) * 12;
          return (
            <path
              key={i}
              d={`M 100,100 Q ${b1X},${b1Y} ${tipX},${tipY} Q ${b2X},${b2Y} 100,100`}
              strokeLinecap="round"
            />
          );
        })}
      </g>

      {/* Central French knot core */}
      <circle cx="100" cy="100" r="6" fill={color} stroke={accentColor} strokeWidth="1.2" />
      <circle cx="100" cy="100" r="2.5" fill={accentColor} />
    </svg>
  );
};

export const SunburstDaisyMedallion: React.FC<{
  size?: number;
  className?: string;
  color?: string;
  accentColor?: string;
}> = ({
  size = 180,
  className = '',
  color = '#DEC5A3',
  accentColor = '#B8442D',
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 180 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      {/* Radiating Daisy Petals with pointed feather-stitch crowns */}
      <g stroke={color} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none">
        {Array.from({ length: 20 }).map((_, i) => {
          const angle = (i * 360) / 20;
          const rad = (angle * Math.PI) / 180;
          const tipX = 100 + Math.cos(rad) * 78 - 10;
          const tipY = 100 + Math.sin(rad) * 78 - 10;
          const p1X = 100 + Math.cos(rad - 0.1) * 44 - 10;
          const p1Y = 100 + Math.sin(rad - 0.1) * 44 - 10;
          const p2X = 100 + Math.cos(rad + 0.1) * 44 - 10;
          const p2Y = 100 + Math.sin(rad + 0.1) * 44 - 10;
          return (
            <path
              key={i}
              d={`M ${p1X},${p1Y} L ${tipX},${tipY} L ${p2X},${p2Y}`}
              strokeDasharray="2 1.5"
            />
          );
        })}
      </g>

      {/* Outer petal border ring */}
      <circle cx="90" cy="90" r="68" stroke={color} strokeWidth="1" strokeDasharray="3 3" opacity="0.7" />

      {/* Mid circular band */}
      <circle cx="90" cy="90" r="42" stroke={color} strokeWidth="1.5" />
      <circle cx="90" cy="90" r="36" stroke={accentColor} strokeWidth="1" strokeDasharray="2 2" opacity="0.8" />

      {/* Radiating pistil spokes from core */}
      <g stroke={accentColor} strokeWidth="1.2">
        {Array.from({ length: 12 }).map((_, i) => {
          const angle = (i * 360) / 12;
          const rad = (angle * Math.PI) / 180;
          const x1 = 90 + Math.cos(rad) * 16;
          const y1 = 90 + Math.sin(rad) * 16;
          const x2 = 90 + Math.cos(rad) * 32;
          const y2 = 90 + Math.sin(rad) * 32;
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} strokeLinecap="round" />;
        })}
      </g>

      {/* Center cluster of French knots */}
      <circle cx="90" cy="90" r="14" fill={color} stroke={accentColor} strokeWidth="1.5" />
      <circle cx="90" cy="90" r="5" fill={accentColor} />
      {Array.from({ length: 6 }).map((_, i) => {
        const angle = (i * 360) / 6;
        const rad = (angle * Math.PI) / 180;
        const cx = 90 + Math.cos(rad) * 9;
        const cy = 90 + Math.sin(rad) * 9;
        return <circle key={i} cx={cx} cy={cy} r="1.5" fill="#533630" />;
      })}
    </svg>
  );
};

export const EightPetalNeedleworkBlossom: React.FC<{
  size?: number;
  className?: string;
  color?: string;
  accentColor?: string;
}> = ({
  size = 140,
  className = '',
  color = '#DEC5A3',
  accentColor = '#B8442D',
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 140 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      <g stroke={color} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none">
        {Array.from({ length: 8 }).map((_, i) => {
          const angle = (i * 360) / 8;
          const rad = (angle * Math.PI) / 180;
          const tipX = 70 + Math.cos(rad) * 58;
          const tipY = 70 + Math.sin(rad) * 58;
          const wRad1 = ((angle - 18) * Math.PI) / 180;
          const wRad2 = ((angle + 18) * Math.PI) / 180;
          const b1X = 70 + Math.cos(wRad1) * 36;
          const b1Y = 70 + Math.sin(wRad1) * 36;
          const b2X = 70 + Math.cos(wRad2) * 36;
          const b2Y = 70 + Math.sin(wRad2) * 36;
          const c1X = 70 + Math.cos(wRad1) * 16;
          const c1Y = 70 + Math.sin(wRad1) * 16;
          const c2X = 70 + Math.cos(wRad2) * 16;
          const c2Y = 70 + Math.sin(wRad2) * 16;
          return (
            <g key={i}>
              <path
                d={`M ${c1X},${c1Y} Q ${b1X},${b1Y} ${tipX},${tipY} Q ${b2X},${b2Y} ${c2X},${c2Y}`}
              />
              {/* Inner satin rib stitches */}
              <line
                x1={70 + Math.cos(rad) * 20}
                y1={70 + Math.sin(rad) * 20}
                x2={70 + Math.cos(rad) * 48}
                y2={70 + Math.sin(rad) * 48}
                strokeDasharray="2 2"
                strokeWidth="1"
                opacity="0.75"
              />
            </g>
          );
        })}
      </g>

      {/* Central ring with stitched core */}
      <circle cx="70" cy="70" r="16" stroke={accentColor} strokeWidth="1.5" strokeDasharray="3 1.5" />
      <circle cx="70" cy="70" r="10" fill={color} stroke={accentColor} strokeWidth="1" />
      <circle cx="70" cy="70" r="3.5" fill={accentColor} />
    </svg>
  );
};

