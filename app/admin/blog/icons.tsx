// Small, consistent inline-SVG icon set for the admin UI — replaces emoji
// (renders inconsistently across OS/browsers, reads as informal) with a
// single coherent line-icon style, same pattern as components/phone-icon.tsx
// on the public site. 20x20, 1.75 stroke, currentColor — just set text color.

import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function base(children: React.ReactNode, props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export function SparklesIcon(props: IconProps) {
  return base(
    <>
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8" />
    </>,
    props
  );
}

export function TagIcon(props: IconProps) {
  return base(
    <>
      <path d="M12.59 2.59a2 2 0 0 0-1.41-.59H4a2 2 0 0 0-2 2v7.17a2 2 0 0 0 .59 1.41l9 9a2 2 0 0 0 2.82 0l7.17-7.17a2 2 0 0 0 0-2.82z" />
      <circle cx="7.5" cy="7.5" r="1.25" fill="currentColor" stroke="none" />
    </>,
    props
  );
}

export function ListPlusIcon(props: IconProps) {
  return base(
    <>
      <path d="M3 6h12M3 12h8M3 18h8" />
      <path d="M18 14v8M14 18h8" />
    </>,
    props
  );
}

export function PlusIcon(props: IconProps) {
  return base(<path d="M12 5v14M5 12h14" />, props);
}

export function ExternalLinkIcon(props: IconProps) {
  return base(
    <>
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <path d="M15 3h6v6M10 14 21 3" />
    </>,
    props
  );
}

export function SaveIcon(props: IconProps) {
  return base(
    <>
      <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2Z" />
      <path d="M17 21v-8H7v8M7 3v5h8" />
    </>,
    props
  );
}

export function RocketIcon(props: IconProps) {
  return base(
    <>
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 19 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </>,
    props
  );
}

export function RefreshIcon(props: IconProps) {
  return base(
    <>
      <path d="M21 12a9 9 0 0 1-15.3 6.36M3 12a9 9 0 0 1 15.3-6.36" />
      <path d="M21 3v6h-6M3 21v-6h6" />
    </>,
    props
  );
}

export function ChevronDownIcon(props: IconProps) {
  return base(<path d="m6 9 6 6 6-6" />, props);
}

export function BeakerIcon(props: IconProps) {
  return base(
    <>
      <path d="M9 2v6L4.5 17a2 2 0 0 0 1.8 3h11.4a2 2 0 0 0 1.8-3L15 8V2" />
      <path d="M8 2h8M7 14h10" />
    </>,
    props
  );
}

export function TrashIcon(props: IconProps) {
  return base(
    <>
      <path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m3 0-1 14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2L4 6h16Z" />
      <path d="M10 11v6M14 11v6" />
    </>,
    props
  );
}

export function LightbulbIcon(props: IconProps) {
  return base(
    <>
      <path d="M9 18h6M10 22h4" />
      <path d="M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.3 1 2.1v.2h6v-.2c0-.8.4-1.6 1-2.1A7 7 0 0 0 12 2Z" />
    </>,
    props
  );
}

export function SearchIcon(props: IconProps) {
  return base(
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4.3-4.3" />
    </>,
    props
  );
}

export function XIcon(props: IconProps) {
  return base(<path d="M18 6 6 18M6 6l12 12" />, props);
}

export function ImageIcon(props: IconProps) {
  return base(
    <>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor" stroke="none" />
      <path d="m21 15-5-5L5 21" />
    </>,
    props
  );
}
