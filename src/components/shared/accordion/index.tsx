import { FC } from 'react';

type TAccordionProps = {
  children: React.ReactNode;
};

export const Accordion: FC<TAccordionProps> = ({children}) => {
  return (
    <ul>
      {children}
    </ul>
  );
};