import { type FC, type SVGProps } from "react";

type TIconArrow = SVGProps<SVGSVGElement> & {
  direction?: "backward" | "forward";
};

export const IconArrow: FC<TIconArrow> = ({
  className,
  direction = "backward",
}) => {
  return (
    <svg
      className={className}
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="24" cy="24" r="23" stroke="white" strokeWidth="2" />
      <path
        d="M31 24L16 24"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
      {direction === "backward" ? (
        <path
          d="M24 15L15 24L24 33"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="square"
          strokeLinejoin="round"
        />
      ) : (
        <path
          d="M24 15L33 24L24 33"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="square"
          strokeLinejoin="round"
        />
      )}
    </svg>
  );
};
