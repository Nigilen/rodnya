import styles from './contacts-section.module.css';
import cn from 'classnames';

export const ContactsSection = () => {
  return (
    <section className={styles.contacts_section}>
      {/* <h2>Контакты</h2> скрыть доступно потом */} 
      <address className={styles.contacts_address}>
        <dl className={styles.contacts_list}>
          <div className={cn(styles.column, styles.column__contacts)}>
            <dt className={styles.column__title}>Контакты</dt>
            <dd className={styles.column__definition}>
              <a href="mailto:info@rodnya.moscow">info@rodnya.moscow</a>
            </dd>
            <dd className={styles.column__definition}>
              <a href="tel:+74999515062">+7&nbsp;499&nbsp;951&nbsp;50&nbsp;62</a>
            </dd>
          </div>
          <div className={cn(styles.column, styles.column__social)}>
            <dt className={styles.column__title}>Соцсети</dt>
            <dd className={styles.column__definition}>
              <a href="#" target='blank'>Telegram</a>
            </dd>
            <dd className={styles.column__definition}>
              <a href="#" target='blank'>Vimeo</a>
            </dd>
          </div>
          <div className={styles.column}>
            <dt className={styles.column__title}>Адрес</dt>
            <dd className={styles.column__definition}>г.&nbsp;Москва, Бауманская&nbsp;ул., 11&nbsp;стр.&nbsp;8</dd>
          </div>
        </dl>
      </address>
    </section>
  )
}