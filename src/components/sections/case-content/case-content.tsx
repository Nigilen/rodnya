import { Paragraph } from "@/src/ui-kit/paragraph/paragraph";
import { CoupleColumns } from "../../blocks/couple-columns";
import styles from './case-content.module.css';
import { CaseAbout } from "./case-about/case-about";
import { Summary } from "@/src/ui-kit/summary/summary";
import { Summaries } from "../../blocks/summaries/summaries";
import { NextCaseLink } from "./next-case-link/next-case-link";
import cn from 'classnames';


const caseMock = {
  works: [
    'Ролик',
    'Сайт проекта'
  ],
  awards: [
    {
      text: 'Red Apple',
      counter: 5
    },
    {
      text: 'Сannes Lionese',
      counter: 3
    },
    {
      text: 'Silver Mercury',
      counter: 2
    },
    {
      text: 'ADCR Awards',
      counter: 1
    }
  ],
  summaries: [
    {
      termin: '221',
      definition: 'Публикация'
    },
    {
      termin: '125 млн',
      definition: 'OTS'
    },
    {
      termin: '361+',
      definition: 'комментариев'
    },
    {
      termin: '76к',
      definition: 'посещений лендинга'
    },
  ],
}

export const CaseContent = () => {
  return (
    <div>
      <article className={styles.case}>
        <header className={cn(styles.case_header, 'container')}>
          <CoupleColumns heading={"Видеть человека"} project={'Яндекс GO'}>
            <CaseAbout works={caseMock.works} awards={caseMock.awards} />
          </CoupleColumns>
        </header>
        <section className={cn(styles.case_content, 'container')}>
          <CoupleColumns heading='Задача и&nbsp;контекст' border>
            <Paragraph text="Миссия Яндекса как крупной IT компании — создавать массовые сервисы, которые будут приносить пользу и упрощать жизнь. При этом сервисы не могут считаться в полной мере массовыми, если их возможности недоступны для некоторых групп людей. В 2021 году мобильное приложение было адаптировано для незрячих пользователей, но проблемы оставались в процессе заказа и при общении с водителем."/>
            <Paragraph text="Осенью 2022 г. Яндекс Go «Специальные возможности» — дополнительные опции в тарифах, которые делали передвижение легче. В них вошли опции: «буду с инвалидным креслом», «общаюсь только текстом», «перевозка собаки-поводыря», «помогите найти машину» и другие."/>
            <Paragraph text="Важно было найти способ повысить уровень осведомленности о новых функциях в приложении среди людей с ограниченными возможностями и сформировать доверие к сервису."/>
          </CoupleColumns>   
          <CoupleColumns heading={"Решение"} border>
            <Paragraph text="Ключом к формированию доверия мы предложили сделать пользователей приложения, пригласив их стать участниками проекта. А безопасность коммуникации предложили обеспечить за счет ясной роли бренда как организатора услуг: без героизации, драматизма и эвфемизмов." />
            <Paragraph text="Так родилась кампания «Видеть человека» — проект о людях, для которых Яндекс Go адаптировал сервис. Они рассказали о том, как им пользоваться, а водители увидели, что личность больше ярлыков."/>
          </CoupleColumns>
          <CoupleColumns heading={"Результаты"} border>
            <Summaries>
              {caseMock.summaries.map((summary, index) => (
                <Summary key={index} termin={summary.termin} definition={summary.definition} />
              ))}
            </Summaries>
          </CoupleColumns>  
          <footer className={styles.case_footer}>
            <CoupleColumns heading={"День Работника Торговли"} border>
              <NextCaseLink />
            </CoupleColumns> 
          </footer>   
        </section>
      </article>
    </div>
  )
}