import { FC } from 'react';

interface IMpIcon {
  value: number;
  color: string;
}

const MpIcon: FC<IMpIcon> = ({ value, color }) => {
  const svg = (
    <svg width="38" height="35" viewBox="0 0 38 35" stroke={color} fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="Level_yellow">
        <g id="Rectangle 10029" filter="url(#filter0_b_927_7847)">
          <path
            d="M4.77344 5.17458L8.53056 1H28.986L33.1606 5.17458V25.2126L28.986 29.3872H8.53056L4.77344 25.2126V5.17458Z"
            fill="#D9D9D9"
            fillOpacity="0.24"
          />
        </g>
        <path
          id="Rectangle 10028"
          d="M4.77344 5.55832C4.77344 5.31128 4.86488 5.07298 5.03014 4.88935L8.23263 1.33103C8.42227 1.12032 8.69244 1 8.97592 1H28.5718C28.837 1 29.0914 1.10536 29.2789 1.29289L32.8677 4.88169C33.0552 5.06923 33.1606 5.32358 33.1606 5.5888V24.7984C33.1606 25.0636 33.0552 25.3179 32.8677 25.5055L29.2789 29.0943C29.0914 29.2818 28.837 29.3872 28.5718 29.3872H8.97593C8.69244 29.3872 8.42227 29.2668 8.23263 29.0561L5.03014 25.4978C4.86488 25.3142 4.77344 25.0759 4.77344 24.8288V5.55832Z"
          stroke="white"
          strokeWidth="1.65"
        />
        <path
          id="Rectangle 10032"
          d="M10 34L7.02685 34C6.76037 34 6.5049 33.8936 6.31716 33.7045L1.29031 28.6407C1.10435 28.4534 1 28.2001 1 27.9362L1 19"
          // stroke="#FC8A03"
          strokeWidth="1.65"
          strokeLinecap="round"
        />
        <path
          id="Rectangle 10034"
          d="M31.3887 34L36.7089 28.6407C36.8948 28.4534 36.9992 28.2001 36.9992 27.9362L36.9992 19"
          // stroke="#FE8201"
          strokeWidth="1.65"
          strokeLinecap="round"
        />
      </g>
      <defs>
        <filter
          id="filter0_b_927_7847"
          x="-3.22656"
          y="-7"
          width="44.3872"
          height="44.3872"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="4" />
          <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_927_7847" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_927_7847"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );

  return (
    <div className={'relative'}>
      {svg}
      <div className={'absolute top-[3px] left-0 right-0 text-xl'}>{value}</div>
    </div>
  );
};

export default MpIcon;
