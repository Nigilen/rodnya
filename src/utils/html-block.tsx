import { type HTMLProps, type FC } from 'react';
import DOMPurify from 'isomorphic-dompurify';

interface IHTMLBlockProps extends HTMLProps<HTMLDivElement> {
  rawHtml: string;
}

const HTMLBlock: FC<IHTMLBlockProps> = ({ rawHtml, className }) => {
  const sanitizedHtml = DOMPurify.sanitize(rawHtml);

  return <div className={className} dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />;
};

export { HTMLBlock };
