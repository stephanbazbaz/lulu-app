import React from 'react';
import styles from './MainPage.module.scss';
import FlexRow from '../../common/FlexRow/FlexRow.jsx'
import { homeText, categoryArr, cardsArr } from '../../constants'
import Image from 'next/image';

const MainPage = () => (
  <div className={styles.Home}>
    <div className={styles.mainContainer}>
      <div style={{ display: 'flex', width: '100%' }}>
        <div className={styles.coverImageWarp}>
          <Image className={styles.logo} src='/DSC_0381 copy.jpg' alt='צמחי מרפא' width={400} height={400} />
        </div>
        <div className={styles.logoWarp}>
          <Image src='/Artboard 24 copy 10@3x.png' alt='logo' width={400} height={400} />
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
              <Image src={card.img} alt={card.title} width={400} height={400} />
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
              <Image src={item.img} alt={item.title} width={400} height={400} />
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
