import React from 'react';
import styles from './MainPage.module.scss';
// import LULUMAIN from '../../assets/DSC_0393 copy.jpg'
import LULUMAIN from '../../assets/DSC_0381 copy.jpg'
import LOGO from '../../assets/Artboard 24 copy 10@3x.png'
import FlexRow from '../../common/FlexRow/FlexRow.jsx'
import { homeText, categoryArr, cardsArr } from '../../constants'
import CLINIC_IMG from '../../assets/7B72EE63-D4E7-4458-BA39-B362860789B4_1_105_c.jpeg'
import { style } from '@mui/system';
import Image from 'next/image';

const MainPage = () => (
  <div className={styles.Home}>
    <div className={styles.mainContainer}>
      <div style={{ display: 'flex', width: '100%' }}>
        <div className={styles.coverImageWarp}>
          <Image className={styles.logo} src={LULUMAIN} alt='צמחי מרפא' height={400} />
        </div>
        <div className={styles.logoWarp}>
          <Image src={LOGO} alt='logo' />
        </div>
        <div className={styles.quoteWarp}>
          <div >
            <h2>{homeText.title}</h2>
            <h3>{homeText.subtitle}</h3>
          </div>
          <div className={styles.quote}>{homeText.qoute1}</div>
        </div>
      </div>
    </div>
    <div className={styles.pageBreakTitle}>
      <h2>משפט עם מילים שמסביר על משהו</h2>
    </div>
    <div>
      <FlexRow justifyContent='space-between'>
        {cardsArr.map((card, idx) =>
          <FlexRow key={`smallCard-${idx}`} className={styles.smallCardWrap}>
            <div className={styles.smallCardImgWrap}>
              <Image src={card.img} alt={card.title} />
            </div>
            <div>
              <p>{card.text}</p>
            </div>
          </FlexRow>
        )}
      </FlexRow>

    </div>
    <div className={styles.pageBreakTitle}>
      <h2>משפט עם מילים שמסביר על משהו</h2>
    </div>
    <div>
      <FlexRow className={styles.catRow}>
        {categoryArr.map((item, idx) =>
          <div key={`category-${idx}`} className={styles.cardWarp}>
            <div className={styles.imageWarp}>
              <Image src={item.img} alt={item.title} />
            </div>
            <div className={styles.cardBody}>
              <div>
                <div className={styles.cardTitle}>{item.title}</div>
                <div>{item.text}</div>
              </div>
            </div>
          </div>
        )}
      </FlexRow>

      {/* <div className={styles.sectionPics}>
        <div className={styles.imageWrap}>
          <Image src={CLINIC_IMG} alt='קניקה' />
        </div>
        <div className={styles.imageWrap}>
          <Image src={CLINIC_IMG} alt='קניקה' />
        </div>
      </div> */}
    </div>
  </div>

)

export default MainPage;
