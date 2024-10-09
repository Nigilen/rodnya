import { Hero } from '@/src/components/sections/hero/hero';
import styles from './contacts.module.css';
import { Actions } from '@/src/components/sections/actions/actions';
import { getContacts, getSocials } from '@/src/api/api';

type Socials = {
  data: {
    id: number,
    title: string,
    url: string,
    show_in_footer: boolean
  }[]
}

export default async function Page() {
  let contacts;
  let socials;

  try {
    contacts = await getContacts();
    socials = await getSocials();
  } catch (error) {
    console.error(error);
  }

  return (
    <>
      <Hero title="Контакты" background={contacts.data.photo} />
      <address className={styles.contacts}>
        <dl className={styles.contacts_list}>
          <div className={styles.contacts_item}>
            <dt className={styles.contacts_item__term}>Адрес</dt>
            <dd className={styles.contacts_item__definition}>
              {contacts.data.address_name}
            </dd>
          </div>
          <div className={styles.contacts_item}>
            <dt className={styles.contacts_item__term}>Телефон</dt>
            <dd className={styles.contacts_item__definition}>
              <a href={`tel:${contacts.data.phone}`}>{contacts.data.phone}</a>
            </dd>
          </div>
          <div className={styles.contacts_item}>
            <dt className={styles.contacts_item__term}>Соцсети</dt>
            <div>
              {socials.data.map((social: Socials['data'][0]) => (
                <dd className={styles.contacts_item__definition} key={social.id}>
                  <a href={social.url} target='blank'>{social.title}</a>
                </dd>
              ))}
            </div>
          </div>
          <div className={styles.contacts_item}>
            <dt className={styles.contacts_item__term}>Обсудить проект</dt>
            <dd className={styles.contacts_item__definition}>
              <a href={`mailto:${contacts.data.email_general}`}>{contacts.data.email_general}</a>
            </dd>
          </div>
          <div className={styles.contacts_item}>
            <dt className={styles.contacts_item__term}>Стать частью команды</dt>
            <dd className={styles.contacts_item__definition}>
            <a href={`mailto:${contacts.data.email_hr}`}>{contacts.data.email_hr}</a>
            </dd>
          </div>
        </dl>
      </address>
      <Actions brief={contacts.data.brief} request={contacts.data.request} />

    </>
  );
}