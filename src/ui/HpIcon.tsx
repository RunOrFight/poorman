import { FC } from "react";

interface DamageIconProps {
    value: number;
    color: string;
}

const HpIcon: FC<DamageIconProps> = ({ value, color }) => {
    const svg = (
        <svg width="46" height="40" viewBox="0 0 46 40" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={color}>
            <g filter="url(#filter0_b_771_1946)">
                <path d="M24.9997 5L20.2286 10L15.0238 5H8.08401L2.01172 11.5753V17.7123L20.0117 36.7704L38.0117 17.7123V11.5753L31.9394 5H24.9997Z" fill="#D9D9D9" fillOpacity="0.24" />
            </g>
            <path d="M24.7042 5.30965L20.9213 9.27409C20.5391 9.67461 19.9042 9.68841 19.505 9.3049L15.314 5.27885C15.1278 5.09992 14.8795 5 14.6213 5H8.52171C8.24269 5 7.97635 5.11657 7.78705 5.32155L2.27707 11.288C2.10646 11.4728 2.01172 11.715 2.01172 11.9665V17.3147C2.01172 17.5701 2.10939 17.8157 2.28472 18.0014L19.4928 36.2209C19.8907 36.6422 20.5622 36.6382 20.955 36.2122L37.7469 17.9995C37.9172 17.8149 38.0117 17.5729 38.0117 17.3217V11.9665C38.0117 11.715 37.917 11.4728 37.7464 11.288L32.2364 5.32155C32.0471 5.11657 31.7808 5 31.5017 5H25.4277C25.1543 5 24.8929 5.11189 24.7042 5.30965Z" stroke="white" strokeWidth="1.65" />
            <path d="M44.5119 10V18.4503C44.5119 18.69 44.4258 18.9218 44.2693 19.1033L34.0117 31" stroke="white" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M20.5117 6L15.4349 1.26845C15.2498 1.09593 15.0062 1 14.7531 1H8.24476C7.99085 1 7.74644 1.09659 7.56113 1.27017L2.51172 6" stroke="white" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M1.51172 23.5L16.5117 39" strokeWidth="1.65" strokeLinecap="round" />
            <path d="M25.0117 1H34.5338C34.8168 1 35.0866 1.11996 35.2762 1.33012L41.2542 7.95594C41.42 8.13968 41.5117 8.37835 41.5117 8.62582V15" strokeWidth="1.65" strokeLinecap="round" />
            <defs>
                <filter id="filter0_b_771_1946" x="-4.59457" y="-1.60629" width="49.2126" height="44.9831" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feGaussianBlur in="BackgroundImageFix" stdDeviation="3.30315" />
                    <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_771_1946" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_771_1946"result="shape" />
                </filter>
            </defs>
        </svg>
    );

    return (
        <div className={"relative"}>
            {svg}
            <div className={"absolute top-[6px] left-0 right-[5px] text-xl"}>{value}</div>
        </div>
    );
};

export default HpIcon;
