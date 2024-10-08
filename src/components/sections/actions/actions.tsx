'use client'

import { FC, useState } from 'react';
import styles from './actions.module.css';
import { ContactsFooter } from '../../layout/footer/contacts/contacts';
import cn from 'classnames';



type Contacts = {
    photo: string,
    description: string,
    address_name: string,
    address_url: string,
    phone: string,
    email_general: string,
    email_hr: string,
    brief: string | null,
    policy: string | null,
    request: string
}

type Social = {
    id: number,
    title: string,
    url: string,
    show_in_footer: boolean
}

type Socials = Social[]

type TActionsProps = {
  heading?: string;
  contacts?: Contacts;
  socials?: Socials;
  brief?: string;
  request?: string;
}

export const Actions: FC<TActionsProps> = ({ heading, contacts, socials, brief, request }) => {
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
        <button className={cn(styles.action_button, styles.action_request, 'button-primary')} type="button" onClick={handleToggle}>Оставить заявку</button>
        <a className={cn(styles.action_button, styles.action_brief, 'button-secondary')} href={brief} download>Скачать форму брифа</a>
      </div>
      {contacts && <ContactsFooter contacts={contacts} socials={socials}/>}
      <dialog className={styles.modal} open={isOpen}>
        <h2 className={styles.modal_title}>Оставить заявку</h2>
        <form className={styles.modal_form} onSubmit={handleSubmit} action={request}>
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