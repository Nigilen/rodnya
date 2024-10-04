'use client'

import { FC } from 'react';
import styles from './services.module.css';
import { AccordionItem } from '../../shared/accordion/accordion-item/accordion-item';
import { Accordion } from '../../shared/accordion';
import { PWithUl } from '@/src/ui-kit/p-with-ul/p-with-ul';
import cn from 'classnames';


const servicesMock = [
  {
    title: 'PR-проекты и ритейнеры: стратегии, реализация',
    content: {
      text: 'Мы верим в формулу do+say, поэтому в разработке идей и механик особое внимание уделяем аналитике и коммуникационной стратегии',
      list: [
        'Анализ присутствия в информационном поле бренда и конкурентов',
        'Разработка стратегии регулярного присутствия,  постановка долгосрочных целей',
        'Реализация day-to-day работы с медиа (СМИ, ТГ-каналы)',
        'Антикризисные коммуникации',
        'Анализ присутствия в информационном поле бренда и конкурентов',
        'Разработка стратегии регулярного присутствия,  постановка долгосрочных целей',
        'Реализация day-to-day работы с медиа (СМИ, ТГ-каналы)',
        'Антикризисные коммуникации',
      ],
    }
  },
  {
    title: 'PR-проекты и ритейнеры: стратегии, реализация',
    content: {
      text: 'Мы верим в формулу do+say, поэтому в разработке идей и механик особое внимание уделяем аналитике и коммуникационной стратегии',
      list: [
        'Анализ присутствия в информационном поле бренда и конкурентов',
        'Разработка стратегии регулярного присутствия,  постановка долгосрочных целей',
        'Реализация day-to-day работы с медиа (СМИ, ТГ-каналы)',
        'Антикризисные коммуникации',
      ],
    }
  }
];

type TServicesProps = {
  header: string
};

export const Services: FC<TServicesProps> = ({header}) => {

  return (
    <div className={cn(styles.services, styles.wrapper, 'container')}>
      <h2 className={styles.services_heading}>{header}</h2>
      <Accordion>
        {servicesMock.map((service, index) => (
          <AccordionItem key={index} title={service.title}>
            <PWithUl text={service.content.text} list={service.content.list} />
          </AccordionItem>
        ))}
      </Accordion>
      
    </div>
  );
};