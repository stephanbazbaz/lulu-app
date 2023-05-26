import React from 'react';
import styles from './Footer.module.scss';
const allRights = 'כל הזכויות שמורות ללולו שפריר. אין בכתוב משום התוויה רפואית או החלפת ייעוץ של רופא. בכל בעיה רפואית יש לקבל חוות דעת רופא'
const Footer = () => (
  <div className={styles.Footer}>
    <div>
      <div>
        {/* <p>כתובת רוטשילד 6, תל-אביב, שעות קבלה ראשון 8:30-21:00 </p> */}
      </div>
    </div>
    <div className={styles.allRights}>
      <p>{allRights}</p>
    </div>
  </div>
);

export default Footer;
