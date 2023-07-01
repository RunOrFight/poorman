import { FC } from 'react';

interface IDamageIconProps {
  value: number;
  color: string;
}

const DamageIcon: FC<IDamageIconProps> = ({ value, color }) => {
  const svg = (
    <svg
      width="36"
      height="44"
      viewBox="0 0 36 44"
      stroke={color}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Fire__yellow">
        <path id="Vector 87" d="M10 8L1 26.2199" strokeWidth="1.65" strokeLinecap="round" />
        <path
          id="Vector 86"
          d="M18.7598 42.3172H28.4229C28.6715 42.3172 28.9074 42.2068 29.0666 42.0157L34.9058 35.0086C35.0313 34.858 35.1001 34.6682 35.1001 34.4722V30.5"
          strokeWidth="1.65"
          strokeLinecap="round"
        />
        <g id="Vector 83" filter="url(#filter0_b_927_7841)">
          <path
            d="M5.35156 26.4072L18.3685 1.25684L26.7196 19.2731L29.6525 13.4073L32.1664 26.4072V31.5728L25.9183 38.5462H18.3685H9.25664L5.35156 31.5728V26.4072Z"
            fill="#D9D9D9"
            fillOpacity="0.24"
          />
        </g>
        <path
          id="Vector 82"
          d="M5.43791 26.2322L17.5679 1.62413C17.8836 0.983645 18.8045 1.00625 19.0884 1.66146L26.2841 18.2681C26.437 18.6208 26.9445 18.5987 27.066 18.234L28.3829 14.2833C28.5135 13.8916 29.0721 13.9049 29.1838 14.3024L32.5541 26.2962C32.5749 26.3699 32.5854 26.4462 32.5854 26.5228V31.2844C32.5854 31.4713 32.5229 31.6529 32.4078 31.8002L27.3902 38.2242C27.2314 38.4275 26.9878 38.5463 26.7299 38.5463H18.3685H9.74779C9.44449 38.5463 9.16486 38.3824 9.01666 38.1178L5.45839 31.7637C5.38835 31.6386 5.35156 31.4976 5.35156 31.3542V26.6027C5.35156 26.4742 5.38111 26.3474 5.43791 26.2322Z"
          stroke="white"
          strokeWidth="1.38264"
        />
      </g>
      <defs>
        <filter
          id="filter0_b_927_7841"
          x="-2.64844"
          y="-6.74316"
          width="42.8149"
          height="53.2896"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="4" />
          <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_927_7841" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_927_7841"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );

  return (
    <div className={'relative'}>
      {svg}
      <div className={'absolute top-[13px] left-0 right-0 text-xl'}>{value}</div>
    </div>
  );
};

export default DamageIcon;
