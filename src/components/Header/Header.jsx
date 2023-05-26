'use client';
import { useState } from 'react';
// import { Outlet, Link } from 'react-router-dom';
import FlexRow from '../../common/FlexRow/FlexRow';
import { categoryArr, homeText } from '../../pages/MainPage/constants'
import styles from './Header.module.scss';
import Artboard from '../../assets/Artboard 24 copy 2@3x.png'
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import clsx from 'classnames';
import Image from 'next/image';
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
      {/* <div className={styles.Header}>
        <div className={styles.mainTitle}>
          <Image src={Artboard} alt='logo' />
          <Image
            src={Artboard} alt='logo' />
        </div>
      </div> */}
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