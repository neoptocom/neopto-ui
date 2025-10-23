import { useMemo } from "react";

interface AnimatedBgCircleProps {
  colors: string[];
  delay?: number;
  stretch?: boolean;
}

const AnimatedBgCircle = ({ colors, delay = 0 }: AnimatedBgCircleProps) => {
  const uniqueId = useMemo(() => Math.random().toString(36).substr(2, 9), []);

  return (
    <svg viewBox="0 0 64 64" fill="none" className="h-full transition-all duration-500 ease-in-out w-full">
      <style>
        {`
          @keyframes colorCycle-${uniqueId} {
            0% { fill: ${colors[0]}; }
            25% { fill: ${colors[1]}; }
            50% { fill: ${colors[2]}; }
            75% { fill: ${colors[3]}; }
            100% { fill: ${colors[0]}; }
          }
          @keyframes fadeIn-${uniqueId} {
            0% { opacity: 0; }
            100% { opacity: 1; } 
          }
          .animated-circle-${uniqueId} {
            animation: 
              fadeIn-${uniqueId} 1.5s ease-in-out 1.5s forwards,
              colorCycle-${uniqueId} 4s infinite linear ${delay}s;
            opacity: 0;
            transition: all 0.5s ease-in-out;
          }
        `}
      </style>
      <g style={{ mixBlendMode: "overlay" }} filter="url(#filter0_f_241_319)">
        <ellipse cx="32" rx="20" cy="32" ry="20" className={`animated-circle-${uniqueId}`} />
      </g>
      <defs>
        <filter id="filter0_f_241_319" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="4" result="effect1_foregroundBlur_241_319" />
        </filter>
      </defs>
    </svg>
  );
};

export default AnimatedBgCircle;

