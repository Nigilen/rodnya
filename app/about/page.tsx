import { CoupleColumns } from "@/src/components/blocks/couple-columns";
import { List } from "@/src/components/blocks/list/list";
import { Actions } from "@/src/components/sections/actions/actions";
import { Hero } from "@/src/components/sections/hero/hero";
import { Services } from "@/src/components/sections/services/services";
import { Team } from "@/src/components/sections/team/team";
import { Award } from "@/src/ui-kit/award/award";
import { Paragraph } from "@/src/ui-kit/paragraph/paragraph";
import styles from "./about.module.css";
import cn from "classnames";
import { getServices, getTeam } from "@/src/api/api";

const awardsMock = [
  {
    title: "Сannes Liones",
    counter: 3
  },
  {
    title: "Ad Black Sea",
    counter: 2
  },
  {
    title: "Silver Mercury",
    counter: 6
  },
  {
    title: "Effie/E+",
    counter: 6
  },
  {
    title: "ADCR Awards",
    counter: 2
  },
  {
    title: "Proba Awards",
    counter: 2
  },
  {
    title: "White Square",
    counter: 5
  },
  {
    title: "Red Apple",
    counter: 1
  }, 
];

export default async function Page() {
  let services = null;
  let team = null;

  try {
    services = await getServices();
    team = await getTeam();
    console.log(services);
  } catch (error) {
    console.error(error);
  }

  return (
    <>
      <Hero title={"Наша миссия"} description="Создаем из новостей брендов и компаний информационные поводы: рассказываем о значимых для бизнеса событиях так, чтобы они имели значение для аудитории." background="" video="/about-hero-video.webm"/>

      <div className={cn(styles.wrapper, 'container')}>
        <CoupleColumns heading={"О нас"}>
          <Paragraph text="Подход Студии строится на объединении экспертиз креатива и PR, чтобы бороться за внимание к брендам и продуктам наших клиентов не упуская из виду то, что больше всего страдает во время любого кризиса —доверие потребителей." />
        </CoupleColumns>
        <List>
          {
            awardsMock.map(({ title, counter }) => <Award key={title} text={title} counter={counter} />)  
          }
        </List>
        <p className={styles.caption}>Состоим в ассоциациях АКОС и АБА</p>
      </div>
      <Services header={"Услуги"} data={services.data} />

      <Team name={"Команда"} members={team.data} />
      <Actions heading="Как с нами связаться?" contacts />
    </>
  );
}