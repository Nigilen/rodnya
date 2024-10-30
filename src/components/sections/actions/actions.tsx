'use client'

import { FC } from 'react';
import styles from './actions.module.css';
import { ContactsFooter } from '../../layout/footer/contacts/contacts';
import cn from 'classnames';
import Link from 'next/link';

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
}

export const Actions: FC<TActionsProps> = ({ heading, contacts, socials, brief }) => {
  return (
    <section className={styles.actions}>
      {heading && <h2 className={styles.actions_heading}>{heading}</h2>}
      <div className={styles.actions_buttons}>
        <Link className={cn(styles.action_button, styles.action_request, 'button-primary')} href={`mailto:${contacts?.email_general}`}>Оставить заявку</Link>
        <a className={cn(styles.action_button, styles.action_brief, 'button-secondary')} href={'/brief.pdf'} download>Скачать форму брифа</a>
      </div>
      {contacts && <ContactsFooter contacts={contacts} socials={socials}/>}
    </section>
  )
}