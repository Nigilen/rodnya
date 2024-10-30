'use client'
import { FC, useState } from "react";
import { CasesPreview } from "../../blocks/cases-preview";
// import { useInView } from "react-intersection-observer";
import styles from "./grid.module.css";
import cn from 'classnames';
import { useInView } from "react-intersection-observer";

type Case ={
  slug: string,
  title: string,
  preview: string,
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

type Cases = {
  cases: Case[]
}

export const Grid: FC<Cases> = ({cases}) => {
  const [state, setState] = useState(0);
  const [count, setCount] = useState(1);

  const addCases = (i: number) => {
    setState(i)
    setCount(count + 1)
  }

  const { ref } = useInView({
    threshold: 1,
    onChange(inView) {
      if (inView) {
        addCases(2 * count)
      }
    }
  });

  const twoCase = cases.slice(0, state + 2);
  
  return (
    <>
      <ul className={cn(styles.grid, styles.wrapper, 'container')}>
        {twoCase.map((item: Case) => (
          <CasesPreview 
            key={item.slug} 
            alias={'/cases/' + item.slug} 
            company={item.client} 
            title={item.title} 
            img={item.slider.length < 1 ? item.preview : item.slider[0]} 
          />
        ))}
      </ul>
      <div className={styles.load_triger} ref={ref}></div>
    </>
  );
}