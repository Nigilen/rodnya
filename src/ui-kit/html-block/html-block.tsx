import { type HTMLProps, type FC } from 'react';
import DOMPurify from 'isomorphic-dompurify';

interface Props extends HTMLProps<HTMLDivElement> {
  rawHtml: string;
}

export const HTMLBlock: FC<Props> = ({ rawHtml, className }) => {
  const sanitizedHtml = DOMPurify.sanitize(rawHtml);

  return <div className={className} dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />;
};

