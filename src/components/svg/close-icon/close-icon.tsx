import { FC, SVGProps } from "react";

type CloseIcon = SVGProps<SVGSVGElement>;

export const CloseIcon: FC<CloseIcon> = ({className}) => {
  return (
    <svg className={className} width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M36.0501 40.3051L0.694784 4.94975L5.64453 0L40.9999 35.3553L36.0501 40.3051Z" fill="white"/>
      <path d="M41.0004 4.94988L5.64506 40.3052L0.695312 35.3555L36.0507 0.000130296L41.0004 4.94988Z" fill="white"/>
    </svg>
  );
}