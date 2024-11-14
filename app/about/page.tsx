import { CoupleColumns } from "@/src/components/blocks/couple-columns";
import { List } from "@/src/components/blocks/list/list";
import { Actions } from "@/src/components/sections/actions/actions";
import { Hero } from "@/src/components/sections/hero/hero";
import { Services } from "@/src/components/sections/services/services";
import { AwardListItem } from "@/src/ui-kit/award-list-item/AwardListItem";
import styles from "./about.module.css";
import cn from "classnames";
import { getAbout, getContacts, getServices, getSocials, getTeam } from "@/src/api/api";
import { HTMLBlock } from "@/src/ui-kit/html-block/html-block";
import { TeamT } from "@/src/components/sections/team-t/team-t";

type Awards = {
    name: string;
    number: number;
  }[]

export default async function Page() {
  let services = null;
  let team = null;
  let contacts = null;
  let socials = null;
  let about: Awards | null = null;

  try {
    services = await getServices();
    team = await getTeam();
    contacts = await getContacts();
    socials = await getSocials();
    about = await getAbout().then(data => data.data.awards);
  } catch (error) {
    console.error(error);
  }

  return (
    <>
      <Hero title={"Наша миссия"} description="Создаем из новостей брендов и компаний информационные поводы: рассказываем о&nbsp;значимых для бизнеса событиях так, чтобы они имели значение для аудитории." background="" video="/about-hero-bg-original.webm"/>

      <div className={cn(styles.wrapper)}>
        <CoupleColumns heading={"О нас"}>
          <HTMLBlock className={styles.paragraph} rawHtml="Подход Студии строится на объединении экспертиз креатива и PR, чтобы бороться за&nbsp;внимание к брендам и продуктам наших клиентов не упуская из виду то, что больше всего страдает во время любого кризиса —доверие потребителей." />
        </CoupleColumns>
        {about && 
          <List>
            {
              about?.map(({ name, number }) => <AwardListItem key={name} text={name} counter={number} />)  
            }
          </List>
        }
        <p className={styles.caption}>Состоим в ассоциациях АКОС и АБА</p>
      </div>
      {services &&
        <Services header={"Услуги"} data={services.data} />
      }
      {team && 
        // <Team name={"Команда"} members={team.data} />
        <TeamT name={"Команда"} members={team.data} />
      }
      {contacts && socials &&
        <Actions heading="Как с нами связаться?" contacts={contacts.data} socials={socials.data} />
      }
      
    </>
  );
}