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
          <h1 className={styled.h1}>Experience the Future of Online Gambling</h1>
          <p className={styled.text}>
            Welcome to the future of video gaming and online gambling. Cybercats is an innovative
            game development studio crafting engaging and high-performing card games in a Cyberpunk
            setting to provide an entirely new experience to iGaming customers
          </p>
        </div>
        <div className={styled.pointer} onClick={scrollTo}>
          <img src={pointer_down} alt={'pointer'} />
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
