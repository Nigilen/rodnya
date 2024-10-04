import { type FC, type SVGProps } from 'react';

type TIconPlus = SVGProps<SVGSVGElement>

export const IconPlus: FC<TIconPlus> = ({ className }) => {
  return (
    <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line className={className} x1="11.5386" y1="22.7" x2="11.5386" y2="-4.95091e-05" stroke="black" strokeWidth="3.75"/>
      <line y1="11.5386" x2="22.7" y2="11.5386" stroke="black" strokeWidth="3.75"/>
    </svg>
  );
};

