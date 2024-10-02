'use client'

import { FC, useState } from 'react';
import styles from './actions.module.css';
import { ContactsSection } from '../contacts/contacts';
import { CloseButton } from '@/src/ui-kit/close-button/close-button';

type TActionsProps = {
  heading?: string;
  contacts?: boolean;
}

export const Actions: FC<TActionsProps> = ({ heading, contacts }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => setIsOpen(!isOpen);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleToggle();
  };
  
  return (
    <section className={styles.actions}>
      {heading && <h2 className={styles.actions_heading}>{heading}</h2>}

      <div className={styles.actions_buttons}>
        <button className={`${styles.action_button} ${styles.action_request}`} type="button" onClick={handleToggle}>Оставить заявку</button>
        <a className={`${styles.action_button} ${styles.action_brief}`} href="download-test.svg" download>Скачать форму брифа</a>
      </div>
      {contacts && <ContactsSection />}
      <dialog className={styles.modal} open={isOpen}>
        <h2 className={styles.modal_title}>Оставить заявку</h2>
        <form className={styles.modal_form} onSubmit={handleSubmit}>
          <label htmlFor="text">
            <input type="text" id="text" placeholder="Заявка" />
          </label>
          <button type="submit">Отправить</button>
          <button type="reset" onClick={handleToggle}>Закрыть</button>
        </form>
      </dialog>
      {isOpen && <div className={styles.backdrop} onClick={handleToggle}></div>}
      
    </section>
  )
}