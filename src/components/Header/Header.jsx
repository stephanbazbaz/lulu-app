'use client';
import { useState } from 'react';
import FlexRow from '../../common/FlexRow/FlexRow';
import styles from './Header.module.scss';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
const Header = () => {
  const arr = [
    {
      link: 'נעים להכיר'
    },
    {
      link: 'על הטיפול'
    },
    {
      link: 'תחומי טיפול'
    },
    {
      link: 'מאמרים'
    },
    {
      link: 'מטופלים מספרים'
    },
    {
      link: 'צור קשר '
    },
  ]
  const [current, setCurrent] = useState('h');
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  const trigger = useScrollTrigger();
  return (
    <>
      <Slide appear={true} direction="down" in={!trigger}>
        <div className={styles.navWrap}>
          <FlexRow className={styles.navRow}>
            {arr.map((item, idx) =>
              <div className={styles.liBtn} key={`navLink-${idx}`}>
                <span className={styles.label}>
                  <a to="/">{item.link}</a>
                </span>
              </div>
            )}
          </FlexRow>
        </div>
      </Slide>
    </>
  )
};
export default Header;