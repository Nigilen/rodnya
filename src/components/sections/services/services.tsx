'use client'

import { FC } from 'react';
import styles from './services.module.css';
import { AccordionItem } from '../../shared/accordion/accordion-item/accordion-item';
import { Accordion } from '../../shared/accordion';
import cn from 'classnames';
import { ServicesList } from '@/src/ui-kit/services-list/services-list';
import { HTMLBlock } from '@/src/ui-kit/html-block/html-block';


export type TList = {
  item: string
}

export type TValue = string | TList[]

type TContent = {
  type: string,
  value: TValue
}
    
type TService = {
  id: string,
  title: string,
  content: TContent[]
}

type TServicesProps = {
  header: string;
  data: TService[];
};

export const Services: FC<TServicesProps> = ({header, data}) => {
  return (
    <div className={cn(styles.services, styles.wrapper)}>
      <h2 className={styles.services_heading}>{header}</h2>
      {data && 
        <Accordion>
          {data.map((service: TService) => (
            <AccordionItem key={service.id} title={service.title} >
              <div className={styles.service_content}>
                {service.content.map((item, i: number) => {
                  if (Array.isArray(item.value)) {
                    return <ServicesList list={item.value} key={i}/>
                  }
                  if (typeof item.value === 'string') {

                    return <HTMLBlock className={styles.paragraph} rawHtml={item.value} key={i}/>
                  }
                })}
              </div>
            </AccordionItem>
          ))}
        </Accordion>
      }
      
    </div>
  );
};