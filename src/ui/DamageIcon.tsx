import { FC } from "react";

interface DamageIconProps {
    value: number;
    color: string;
}

const DamageIcon: FC<DamageIconProps> = ({ value, color }) => {
    const svg = (
        <svg width="42" height="74" viewBox="0 0 42 74" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={color}>
            <path d="M3.58197 57.5485L7.21594 63.1643C7.40022 63.4491 7.7163 63.621 8.05551 63.621L28.5115 63.6209" stroke="white" stroke-width="1.65" stroke-linecap="round"/>
            <path d="M20.0117 1L1.01172 38.5" stroke-width="1.65" stroke-linecap="round"/>
            <path d="M21.0117 60H32.5433C32.8401 60 33.1216 59.8682 33.3116 59.6402L40.2799 51.2781C40.4297 51.0984 40.5117 50.8719 40.5117 50.638V48.5" stroke-width="1.65" stroke-linecap="round"/>
            <g filter="url(#filter0_b_771_1954)">
                <path d="M5.01172 41.0137L20.5457 11L30.5117 32.5L34.0117 25.5L37.0117 41.0137V47.1781L29.5554 55.5H20.5457H9.67191L5.01172 47.1781V41.0137Z" fill="#D9D9D9" fill-opacity="0.24"/>
            </g>
            <path d="M5.11477 40.8046L19.5903 11.4382C19.9671 10.6739 21.066 10.7008 21.4048 11.4827L29.992 31.3005C30.1744 31.7215 30.78 31.6951 30.9251 31.2598L32.4967 26.5452C32.6525 26.0778 33.3191 26.0937 33.4524 26.568L37.4744 40.881C37.4992 40.9691 37.5117 41.0601 37.5117 41.1515V46.8338C37.5117 47.0569 37.4371 47.2736 37.2998 47.4494L31.312 55.1156C31.1225 55.3582 30.8318 55.5 30.5239 55.5H20.5457H10.258C9.89609 55.5 9.56238 55.3044 9.38553 54.9886L5.13921 47.4058C5.05562 47.2565 5.01172 47.0882 5.01172 46.9172V41.2468C5.01172 41.0934 5.04698 40.9422 5.11477 40.8046Z" stroke="white" stroke-width="1.65"/>
            <defs>
                <filter id="filter0_b_771_1954" x="-1.59457" y="4.39371" width="45.2126" height="57.7126" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feGaussianBlur in="BackgroundImageFix" stdDeviation="3.30315"/>
                    <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_771_1954"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_771_1954" result="shape"/>
                </filter>
            </defs>
        </svg>

    );

    return (
        <div className={"relative"}>
            {svg}
            <div className={"absolute top-[30px] left-0 right-0 text-xl"}>{value}</div>
        </div>
    );
};

export default DamageIcon;
