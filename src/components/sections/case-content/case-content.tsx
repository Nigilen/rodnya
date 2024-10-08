import { CoupleColumns } from "../../blocks/couple-columns";
import styles from './case-content.module.css';
import { CaseAbout } from "./case-about/case-about";
import { Summary } from "@/src/ui-kit/summary/summary";
import { Summaries } from "../../blocks/summaries/summaries";
import { NextCaseLink } from "./next-case-link/next-case-link";
import cn from 'classnames';
import { FC } from "react";
import { HTMLBlock } from "@/src/utils/html-block";

type Data = {
  data: {
    slug: string,
    title: string,
    slider: string[],
    source_name_1: string,
    source_url_1: string,
    source_name_2: string,
    source_url_2: string,
    client: string,
    task: string,
    decision: string,
    results:
      {
        name: string,
        description: string
      }[],
    awards: {
        name: string,
        number: number
      }[] 
  }
}

export const CaseContent: FC<Data> = ({data}) => {

  const works = [
    {
      id: 'wd1',
      title: data.source_name_1,
      link: data.source_url_1,
    },
    {
      id: 'wd2',
      title: data.source_name_2,
      link: data.source_url_2,
    }
  ]

  return (
    <div>
      <article className={styles.case}>
        <header className={cn(styles.case_header, 'container')}>
          <CoupleColumns heading={data.title} project={data.client}>
            <CaseAbout works={works} awards={data.awards} />
          </CoupleColumns>
        </header>
        <section className={cn(styles.case_content, 'container')}>
          <CoupleColumns heading='Задача и&nbsp;контекст' border>
            <HTMLBlock rawHtml={data.task} />
          </CoupleColumns>   
          <CoupleColumns heading={"Решение"} border>
            <HTMLBlock rawHtml={data.decision} />
          </CoupleColumns>
          <CoupleColumns heading={"Результаты"} border>
            <Summaries>
              {data.results.map((result, i) => (
                <Summary key={i} termin={result.description} definition={result.name} />
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