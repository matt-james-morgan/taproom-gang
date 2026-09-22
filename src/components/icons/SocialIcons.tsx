import type { SVGProps } from "react";

interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
}

const iconDefaults = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export const InstagramIcon = ({ size = 24, ...props }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    {...iconDefaults}
    {...props}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37Z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

export const YoutubeIcon = ({ size = 24, ...props }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    {...iconDefaults}
    {...props}
  >
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33Z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
  </svg>
);

export const SpotifyIcon = ({ size = 24, ...props }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    {...iconDefaults}
    {...props}
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M6.5 9.75c4-1.2 8.4-.8 11 1" />
    <path d="M7 13c3.2-.9 6.8-.6 9 .8" />
    <path d="M7.7 16c2.4-.6 5-.4 6.7.7" />
  </svg>
);
