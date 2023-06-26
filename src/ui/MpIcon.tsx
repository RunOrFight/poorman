import { FC } from 'react';

interface DamageIconProps {
  value: number;
  color: string;
}

const MpIcon: FC<DamageIconProps> = ({ value, color }) => {
  const svg = (
    <svg
      width="59"
      height="58"
      viewBox="0 0 59 58"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke={color}
    >
      <g filter="url(#filter0_b_771_1940)">
        <circle
          cx="15.5166"
          cy="15.5166"
          r="15.5166"
          transform="matrix(0.734414 0.678702 -0.678701 0.734415 27.8672 7.00732)"
          fill="#D9D9D9"
          fillOpacity="0.24"
        />
        <circle
          cx="15.5166"
          cy="15.5166"
          r="14.6909"
          transform="matrix(0.734414 0.678702 -0.678701 0.734415 27.8672 7.00732)"
          strokeWidth="1.65157"
          strokeLinecap="round"
        />
      </g>
      <path
        d="M26.1653 53.0567C22.8606 52.6615 19.6729 51.5889 16.8014 49.906C13.93 48.223 11.4365 45.9659 9.47683 43.2756C7.51719 40.5854 6.1335 37.5198 5.41226 34.2706C4.69102 31.0214 4.64772 27.6584 5.28508 24.3917C5.92244 21.1251 7.22676 18.025 9.1165 15.2853C11.0062 12.5456 13.4408 10.2252 16.268 8.46899C19.0952 6.71283 22.2542 5.5587 25.5477 5.07874C28.8412 4.59879 32.1983 4.80332 35.4091 5.67957"
        strokeWidth="1.65157"
        strokeLinecap="round"
      />
      <path
        d="M47.1732 14.0019C50.6065 17.8872 52.7013 22.7725 53.1489 27.938"
        strokeWidth="1.65157"
        strokeLinecap="round"
      />
      <path
        d="M37.7484 46.652C35.2418 47.8927 32.4998 48.5854 29.7047 48.684C26.9096 48.7826 24.1255 48.2847 21.5378 47.2236C18.9501 46.1625 16.618 44.5624 14.6968 42.5299C12.7756 40.4974 11.3092 38.079 10.3954 35.4356C9.48153 32.7923 9.14111 29.9847 9.39677 27.1995C9.65244 24.4144 10.4983 21.7157 11.8781 19.2829C13.258 16.8501 15.1401 14.7391 17.3992 13.0903C19.6584 11.4415 22.2428 10.2927 24.9804 9.72047"
        stroke="white"
        strokeWidth="1.65157"
        strokeLinecap="round"
      />
      <path
        d="M37.3349 11.0664C39.8206 12.2081 42.0411 13.8549 43.8552 15.902C45.6693 17.9491 47.0371 20.3517 47.8715 22.9565C48.7059 25.5614 48.9886 28.3114 48.7017 31.0316C48.4147 33.7517 47.5643 36.3822 46.2046 38.7555"
        stroke="white"
        strokeWidth="1.65157"
        strokeLinecap="round"
      />
      <defs>
        <filter
          id="filter0_b_771_1940"
          x="6.60855"
          y="6.81119"
          width="44.2458"
          height="44.2458"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="3.30315" />
          <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_771_1940" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_771_1940"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );

  return (
    <div className={'relative'}>
      {svg}
      <div className={'absolute top-[16px] left-0 right-[3px] text-xl'}>{value}</div>
    </div>
  );
};

export default MpIcon;
