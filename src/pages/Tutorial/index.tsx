import clsx from 'clsx';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import { pointer_down, adv1, adv2, adv3, adv4, adv5, logo, cards_set } from '../../assets';
import styled from './Tutorial.module.pcss';
import { LOGIN_ROUTE } from '../../constants';

// const feature = [
//   {
//     icon: adv1,
//     text: 'Cybercats offers a never-before-seen style of competitive pvp gaming, with engaging and fast-paced rounds that bring players back for more',
//     title: 'Unique PvP Mechanics',
//   },
//   {
//     icon: adv2,
//     text: 'The attractive and immersive cyberpunk-style design provides an entirely new experience to your players',
//     title: 'Innovative Cyberpunk Design',
//   },
//   {
//     icon: adv3,
//     text: 'All games we create are extensively tested and optimized to the highest standards with the aid of our extensive Quality Assurance team',
//     title: 'High-Performing Portfolio',
//   },
//   {
//     icon: adv4,
//     text: 'Our new card game is designed with new players in mind, who searches for an innovative and attractive experience',
//     title: 'Attract New Players',
//   },
//   {
//     icon: adv5,
//     text: 'Get ready to embark on a journey that will redefine your online casino experience',
//     title: 'Embrace the future of iGaming',
//   },
// ];

const Index = () => {
  const navigate = useNavigate();
  const secondSection: any = useRef();

  const scrollTo = () => {
    secondSection.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={styled.wrapper}>
      <section className={styled.headerContainer}>
        <div className={clsx(styled.container)}>
          <img className={styled.logo} src={logo} alt="Cybercats" width="339px" height="61px" />
          <h1 className={styled.h1}>Tutorial</h1>
          <p className={styled.text}>
            Welcome to the game Cybercats! In this tutorial, we will tell you the mechanics of our game and introduce you to our heroes
          </p>
        </div>
      </section>
      <section className={styled.cardsContainer}>
        <div className={clsx(styled.container)}>
          <div className={styled.cardsDescription}>
            <h2 className={styled.h2}>Cards</h2>
            <p className={styled.text}>We have 12 cards of cats and 12 cards of dogs</p>
          </div>
          <div className={styled.cardsDeck}>
            <img className={styled.cardsDeckImg} src='/src/assets/tutorial/сard_deck_cats.png' alt='deck_cats' width="276px" height="355px" />
            <img className={styled.cardsDeckImg} src='/src/assets/tutorial/card_deck_dogs.png' alt='deck_dogs' width="270px" height="356px" />
          </div>
        </div>
      </section>
      <section>
        <div className={clsx(styled.container)}>
          <div className={styled.styled.cardLevelDescription}>
            <h2 className={styled.h2}>Card level</h2>
            <p className={styled.text}>3 breeds of cats and 3 dogs indicate the level of the character. This affects the cost of the card, the amount of damage and health of the character</p>
          </div>
          <div>
            <div>
              <img src='/src/assets/tutorial/card_level_1.png' alt='level-1' />
              <p></p>
              <p></p>
            </div>
            <div>
              <img src='/src/assets/tutorial/card_level_1.png' alt='level-1' />
              <p></p>
              <p></p>
            </div>
            <div>
              <img src='/src/assets/tutorial/card_level_1.png' alt='level-1' />
              <p></p>
              <p></p>
            </div>
            <div>
              <img src='/src/assets/tutorial/card_level_1.png' alt='level-1' />
              <p></p>
              <p></p>
            </div>
            <div>
              <img src='/src/assets/tutorial/card_level_1.png' alt='level-1' />
              <p></p>
              <p></p>
            </div>
            <div>
              <img src='/src/assets/tutorial/card_level_1.png' alt='level-1' />
              <p></p>
              <p></p>
            </div>
          </div>
        </div>
      </section>
      {/*<section ref={secondSection} className={styled.suggestion}>*/}
      {/*  <div className={styled.block}>*/}
      {/*    <h2 className={styled.h2}>Get ready for a new era in online gambling</h2>*/}
      {/*    <div className={styled.divider} />*/}
      {/*    <p className={clsx(styled.text, styled.small, 'text-left')}>*/}
      {/*      Whether you're an online casino provider looking to add new games to your selection, or*/}
      {/*      a new player looking for an attractive and innovative card game, Cybercat's unique*/}
      {/*      mechanics, creative design, and pvp mechanics provide a gaming experience like no other*/}
      {/*    </p>*/}
      {/*  </div>*/}
      {/*  <div className={styled.block}>*/}
      {/*    <img className={styled.cardsSet} src={cards_set} alt="cards" />*/}
      {/*  </div>*/}
      {/*</section>*/}

      {/*<section className={styled.feature}>*/}
      {/*  <h2 className={clsx(styled.h2, 'text-center pb-[20px]')}>Features</h2>*/}
      {/*  <p className={styled.text}>We work hard every day to create new exciting game</p>*/}
      {/*  <div className={styled.featureContainer}>*/}
      {/*    {feature.map((it, index) => {*/}
      {/*      return (*/}
      {/*        <div key={index} className={styled.featureBlock}>*/}
      {/*          <div className={styled.featureIcon}>*/}
      {/*            <img src={it.icon} alt="feature" />*/}
      {/*          </div>*/}
      {/*          <h3*/}
      {/*            className={clsx(styled.h3, styled.featureHead, 'text-center pt-[40px] pb-[20px]')}*/}
      {/*          >*/}
      {/*            {it.title}*/}
      {/*          </h3>*/}
      {/*          <p className={clsx(styled.text, styled.small, 'mt-[auto]')}>{it.text}</p>*/}
      {/*        </div>*/}
      {/*      );*/}
      {/*    })}*/}
      {/*  </div>*/}
      {/*</section>*/}
      {/*<section className={styled.game}>*/}
      {/*  <a*/}
      {/*    className={styled.button}*/}
      {/*    onClick={() => {*/}
      {/*      navigate(LOGIN_ROUTE);*/}
      {/*    }}*/}
      {/*  >*/}
      {/*    PLAY*/}
      {/*  </a>*/}
      {/*</section>*/}
      {/*<footer className={styled.footer}>*/}
      {/*  <img*/}
      {/*    className={clsx(styled.logo, styled.small)}*/}
      {/*    src={logo}*/}
      {/*    alt="Cybercats"*/}
      {/*    width="339px"*/}
      {/*    height="61px"*/}
      {/*  />*/}
      {/*  <a className={styled.mailto} href="mailto:info@cybercats.live">*/}
      {/*    info@cybercats.live*/}
      {/*  </a>*/}
      {/*  <p className={styled.copyright}>© All Rights Reserved</p>*/}
      {/*</footer>*/}
    </div>
  );
};

export default Index;
