import { FC } from 'react';

interface IHpIcon {
  value: number;
  color: string;
}

const HpIcon: FC<IHpIcon> = ({ value, color }) => {
  const svg = (
    <svg
      width="41"
      height="38"
      viewBox="0 0 41 38"
      stroke={color}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="HP_yellow">
        <g id="Vector" filter="url(#filter0_b_927_7853)">
          <path
            d="M23.9413 4.79004L19.2812 9.52689L14.1975 4.79004H7.41927L1.48828 11.0193V16.8333L19.0694 34.8883L36.6506 16.8333V11.0193L30.7196 4.79004H23.9413Z"
            fill="#D9D9D9"
            fillOpacity="0.24"
          />
        </g>
        <path
          id="Vector_2"
          d="M23.6351 5.10131L19.9925 8.8039C19.5966 9.20633 18.9522 9.22034 18.5392 8.8355L14.4977 5.06971C14.3048 4.88998 14.0509 4.79004 13.7873 4.79004H7.86597C7.58072 4.79004 7.30794 4.90697 7.11124 5.11356L1.77566 10.7175C1.59118 10.9113 1.48828 11.1685 1.48828 11.4361V16.4098C1.48828 16.6813 1.5943 16.9422 1.78377 17.1368L18.5256 34.3298C18.9381 34.7535 19.6201 34.7494 20.0275 34.3208L36.3638 17.135C36.5479 16.9413 36.6506 16.6843 36.6506 16.417V11.4361C36.6506 11.1685 36.5477 10.9113 36.3632 10.7175L31.0276 5.11356C30.8309 4.90697 30.5581 4.79004 30.2729 4.79004H24.378C24.0986 4.79004 23.831 4.90218 23.6351 5.10131Z"
          stroke="white"
          strokeWidth="1.71947"
        />
        <path
          id="Vector_3"
          d="M1 22.3154L15.651 36.9997"
          strokeWidth="1.65"
          strokeLinecap="round"
        />
        <path
          id="Vector_4"
          d="M28 1H33.233C33.5225 1 33.7989 1.1204 33.996 1.33234L39.7891 7.56025C39.9685 7.75307 40.0682 8.00666 40.0682 8.27001V16.4189"
          strokeWidth="1.65"
          strokeLinecap="round"
        />
      </g>
      <defs>
        <filter
          id="filter0_b_927_7853"
          x="-6.51172"
          y="-3.20996"
          width="51.1621"
          height="46.0981"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="4" />
          <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_927_7853" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_927_7853"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );

  return (
    <div className={'relative'}>
      {svg}
      <div className={'absolute top-[6px] left-0 right-0 text-xl hp-text'}>{value}</div>
    </div>
  );
};

export default HpIcon;
