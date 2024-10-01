import { FC } from 'react';
import styles from './actions.module.css';
import { ContactsSection } from '../contacts/contacts';

type TActionsProps = {
  heading?: string;
  contacts?: boolean;
}

export const Actions: FC<TActionsProps> = ({ heading, contacts }) => {
  return (
    <section className={styles.actions}>
      {heading && <h2 className={styles.actions_heading}>{heading}</h2>}

      <div className={styles.actions_buttons}>
        <button className={`${styles.action_button} ${styles.action_request}`} type="button">Оставить заявку</button>
        <a className={`${styles.action_button} ${styles.action_brief}`} href="download-test.svg" download>Скачать форму брифа</a>
      </div>
      
      {contacts && <ContactsSection />}
    </section>
  )
}