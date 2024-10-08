import { FC } from 'react';
import styles from './contacts-footer.module.css';
import cn from 'classnames';


type Contacts = {
  contacts: {
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
}

type Socials = {
  socials: {
    id: number,
    title: string,
    url: string,
    show_in_footer: boolean
  }[] | undefined
}


export const ContactsFooter: FC<Contacts & Socials> = ({contacts, socials}) => {
  return (
    <section className={styles.contacts_section}>
      <address className={styles.contacts_address}>
        <dl className={styles.contacts_list}>
          <div className={cn(styles.column, styles.column__contacts)}>
            <dt className={styles.column__title}>Контакты</dt>
            <dd className={styles.column__definition}>
              <a href={`mailto:${contacts.email_general}`}>{contacts.email_general}</a>
            </dd>
            <dd className={styles.column__definition}>
              <a href={`tel:${contacts.phone}`}>{contacts.phone}</a>
            </dd>
          </div>
          <div className={cn(styles.column, styles.column__social)}>
            <dt className={styles.column__title}>Соцсети</dt>
            {socials?.map((social) => (
              social.show_in_footer && <dd className={styles.column__definition} key={social.id}>
                <a href={social.url} target='blank'>{social.title}</a>
              </dd>
            ))}
          </div>
          <div className={styles.column}>
            <dt className={styles.column__title}>Адрес</dt>
            <dd className={styles.column__definition}>{contacts.address_name}</dd>
          </div>
        </dl>
      </address>
    </section>
  )
}