import { Hero } from '@/src/components/sections/hero/hero';
import styles from '../../src/styles/contacts.module.css';
import { Actions } from '@/src/components/sections/actions/actions';

export default function Page() {
  return (
    <>
      <Hero title="Контакты" background="/contacts-hero.png" />
      <address className={styles.contacts}>
        <dl className={styles.contacts_list}>
          <div className={styles.contacts_item}>
            <dt className={styles.contacts_item__term}>Адрес</dt>
            <dd className={styles.contacts_item__definition}>
              г.&nbsp;Москва, Бауманская&nbsp;ул., 11&nbsp;стр.&nbsp;8
            </dd>
          </div>
          <div className={styles.contacts_item}>
            <dt className={styles.contacts_item__term}>Телефон</dt>
            <dd className={styles.contacts_item__definition}>
              <a href="tel:+74999515062">+7&nbsp;499&nbsp;951&nbsp;50&nbsp;62</a>
            </dd>
          </div>
          <div className={styles.contacts_item}>
            <dt className={styles.contacts_item__term}>Соцсети</dt>
            <div>
              <dd className={styles.contacts_item__definition}>
                <a href="#" target='blank'>Telegram</a>
              </dd>
              <dd className={styles.contacts_item__definition}>
                <a href="#" target='blank'>Vimeo</a>
              </dd>
            </div>
          </div>
          <div className={styles.contacts_item}>
            <dt className={styles.contacts_item__term}>Обсудить проект</dt>
            <dd className={styles.contacts_item__definition}>
              <a href="mailto:info@rodnya.moscow">info@rodnya.moscow</a>
            </dd>
          </div>
          <div className={styles.contacts_item}>
            <dt className={styles.contacts_item__term}>Стать частью команды</dt>
            <dd className={styles.contacts_item__definition}>
              <a href="mailto:hr@rodnya.moscow">hr@rodnya.moscow</a>
            </dd>
          </div>
        </dl>
      </address>
      <Actions />
    </>
  );
}