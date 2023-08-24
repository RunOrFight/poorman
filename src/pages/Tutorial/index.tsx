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
          <p className={clsx(styled.text, styled.center)}>
            Welcome to the game Cybercats! In this tutorial, we will tell you the mechanics of our game and introduce you to our heroes
          </p>
        </div>
      </section>
      <section>
        <div className={styled.cardsContainer}>
          <div className={styled.cardsDescription}>
            <h2 className={styled.h2}>Cards</h2>
            <p className={clsx(styled.text, styled.cardsDescriptionText)}>We have 12 cards of cats and 12 cards of dogs</p>
          </div>
          <div className={styled.cardsDeck}>
            <img className={styled.cardsDeckImg} src='/src/assets/tutorial/сard_deck_cats.png' alt='deck_cats' width="276px" height="355px" />
            <img className={styled.cardsDeckImg} src='/src/assets/tutorial/card_deck_dogs.png' alt='deck_dogs' width="270px" height="356px" />
          </div>
        </div>
      </section>
      <section>
        <div className={styled.cardLevelContainer}>
          <div className={styled.cardLevelDescription}>
            <h2 className={styled.h2}>Card level</h2>
            <p className={clsx(styled.text, styled.cardLevelDescriptionText)}><b>3</b> breeds of cats and <b>3</b> dogs indicate the level of the character. This affects the <b>cost</b> of the card, the amount of <b>damage</b> and <b>health</b> of the character</p>
          </div>
          <div className={styled.levelList}>
            <div className={styled.levelItem}>
              <img className={styled.cardsDeckImg} src='/src/assets/tutorial/card_level_1.png' alt='level-1' width="193px" height="265px"/>
              <p className={styled.levelText}>1 lvl</p>
              <p className={styled.text}>Munchkin</p>
            </div>
            <div className={styled.levelItem}>
              <img className={styled.cardsDeckImg} src='/src/assets/tutorial/card_level_2.png' alt='level-2' width="193px" height="265px"/>
              <p className={styled.levelText}>2 lvl</p>
              <p className={styled.text}>Maine coon</p>
            </div>
            <div className={styled.levelItem}>
              <img className={styled.cardsDeckImg} src='/src/assets/tutorial/card_level_3.png' alt='level-3' width="193px" height="265px"/>
              <p className={styled.levelText}>3 lvl</p>
              <p className={styled.text}>Sphinx</p>
            </div>
            <div className={styled.levelItem}>
              <img className={styled.cardsDeckImg} src='/src/assets/tutorial/card_level_4.png' alt='level-4' width="193px" height="265px"/>
              <p className={styled.levelText}>4 lvl</p>
              <p className={styled.text}>Corgi</p>
            </div>
            <div className={styled.levelItem}>
              <img className={styled.cardsDeckImg} src='/src/assets/tutorial/card_level_5.png' alt='level-5' width="193px" height="265px"/>
              <p className={styled.levelText}>5 lvl</p>
              <p className={styled.text}>Terrier</p>
            </div>
            <div className={styled.levelItem}>
              <img className={styled.cardsDeckImg} src='/src/assets/tutorial/card_level_6.png' alt='level-6' width="193px" height="265px"/>
              <p className={styled.levelText}>6 lvl</p>
              <p className={styled.text}>Husky</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className={styled.cardClassContainer}>
          <div>
            <div className={styled.cardClassDescription}>
              <h2 className={styled.h2}>Card class</h2>
              <p className={clsx(styled.text, styled.cardClassDescriptionText)}>Depending on the weapon, the cards attack in different directions</p>
            </div>
          </div>
          <div className={styled.cardClassList}>
            <div className={styled.cardClassItem}>
              <p className={clsx(styled.text, styled.text__red, styled.text__bold)}>Red warrior</p>
              <p className={clsx(styled.text, styled.text__bold)}>forward</p>
              <img className={styled.cardsDeckImg} src='/src/assets/tutorial/class_red.png' alt='class_red' width="234px" height="311px" />
            </div>
            <div className={styled.cardClassItem}>
              <p className={clsx(styled.text, styled.text__blue, styled.text__bold)}>Blue archer</p>
              <p className={clsx(styled.text, styled.text__bold)}>forward and to the left</p>
              <img className={styled.cardsDeckImg} src='/src/assets/tutorial/class_blue.png' alt='class_blue' width="305px" height="311px" />
            </div>
            <div className={styled.cardClassItem}>
              <p className={clsx(styled.text, styled.text__green, styled.text__bold)}>Green shooter</p>
              <p className={clsx(styled.text, styled.text__bold)}>forward and to the right</p>
              <img className={styled.cardsDeckImg} src='/src/assets/tutorial/class_green.png' alt='class_green' width="305px" height="312px" />
            </div>
            <div className={styled.cardClassItem}>
              <p className={clsx(styled.text, styled.text__yellow, styled.text__bold)}>Yellow electric</p>
              <p className={clsx(styled.text, styled.text__bold)}>all three directions</p>
              <img className={styled.cardsDeckImg} src='/src/assets/tutorial/class_yellow.png' alt='class_yellow' width="305px" height="311px" />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className={styled.gameBoardContainer}>
          <div className={styled.gameBoardDescription}>
            <h2 className={styled.h2}>Game board</h2>
            <p className={clsx(styled.text, styled.gameBoardDescriptionText)}>On the game board, you can find:</p>
            <ul className={styled.gameBoardList}>
              <li className={styled.dot}>Player's name and health</li>
              <li className={styled.dot}>Number of energy blocks</li>
              <li className={styled.dot}>Card holder</li>
              <li className={styled.dot}>Cards in hand</li>
              <li className={styled.dot}>Opponent's cards in hand</li>
              <li className={styled.dot}>End turn button</li>
              <li className={styled.dot}>Fields for placing cards</li>
            </ul>
          </div>
          <div>
            <img className={styled.gameBoardImg} src='/src/assets/tutorial/game_board.png' alt='game_board' width="875px" height="675px" />
          </div>
        </div>
      </section>

      <section>
        <div className={styled.deckCardsContainer}>
          <div className={styled.deckCards}>
            <h2 className={styled.h2}>Deck of cards</h2>
            <p className={clsx(styled.text, styled.deckCardsText)}>There are <b>48</b> cards in the deck</p>
            <div className={clsx(styled.deckCardsWrapper, styled.text)}>
              <p>At the beginning of the game, both you and your opponent draw <b>3 cards</b> from the deck. Then, at the start of each turn, you draw <b>2 cards</b></p>
              <p>You <b>cannot</b> have more than <b>5 cards</b> in your hand. If the number of cards in your hand exceeds 5 during the card draw phase, any excess cards that were supposed to be drawn are <b>discarded</b></p>
            </div>
          </div>
          <div className={styled.deckCardList}>
            <img className={styled.deckCardImg} src='/src/assets/tutorial/munchkin_warrior.png' alt='munchkin_warrior' width="166px" height="230px" />
            <img className={styled.deckCardImg} src='/src/assets/tutorial/maine_coon_warrior.png' alt='maine_coon_warrior' width="166px" height="230px" />
            <img className={styled.deckCardImg} src='/src/assets/tutorial/sphinx_warrior.png' alt='sphinx_warrior' width="166px" height="230px" />
            <img className={styled.deckCardImg} src='/src/assets/tutorial/corgi_warrior.png' alt='corgi_warrior' width="166px" height="230px" />
            <img className={styled.deckCardImg} src='/src/assets/tutorial/terrier_warrior.png' alt='terrier_warrior' width="166px" height="230px" />
            <img className={styled.deckCardImg} src='/src/assets/tutorial/husky_warrior.png' alt='husky_warrior' width="166px" height="230px" />


            <img className={styled.deckCardImg} src='/src/assets/tutorial/munchkin_archer.png' alt='munchkin_archer' width="166px" height="230px" />
            <img className={styled.deckCardImg} src='/src/assets/tutorial/maine_coon_archer.png' alt='maine_coon_archer' width="166px" height="230px" />
            <img className={styled.deckCardImg} src='/src/assets/tutorial/sphinx_archer.png' alt='sphinx_archer' width="166px" height="230px" />
            <img className={styled.deckCardImg} src='/src/assets/tutorial/corgi_archer.png' alt='corgi_archer' width="166px" height="230px" />
            <img className={styled.deckCardImg} src='/src/assets/tutorial/terrier_archer.png' alt='terrier_archer' width="166px" height="230px" />
            <img className={styled.deckCardImg} src='/src/assets/tutorial/husky_archer.png' alt='husky_archer' width="166px" height="230px" />


            <img className={styled.deckCardImg} src='/src/assets/tutorial/munchkin_shooter.png' alt='munchkin_shooter' width="166px" height="230px" />
            <img className={styled.deckCardImg} src='/src/assets/tutorial/maine_coon_shooter.png' alt='maine_coon_shooter' width="166px" height="230px" />
            <img className={styled.deckCardImg} src='/src/assets/tutorial/sphinx_shooter.png' alt='sphinx_shooter' width="166px" height="230px" />
            <img className={styled.deckCardImg} src='/src/assets/tutorial/corgi_shooter.png' alt='corgi_shooter' width="166px" height="230px" />
            <img className={styled.deckCardImg} src='/src/assets/tutorial/terrier_shooter.png' alt='terrier_shooter' width="166px" height="230px" />
            <img className={styled.deckCardImg} src='/src/assets/tutorial/husky_shooter.png' alt='husky_shooter' width="166px" height="230px" />


            <img className={styled.deckCardImg} src='/src/assets/tutorial/munchkin_energy.png' alt='munchkin_energy' width="166px" height="230px" />
            <img className={styled.deckCardImg} src='/src/assets/tutorial/maine_coon_energy.png' alt='maine_coon_energy' width="166px" height="230px" />
            <img className={styled.deckCardImg} src='/src/assets/tutorial/sphinx_energy.png' alt='sphinx_energy' width="166px" height="230px" />
            <img className={styled.deckCardImg} src='/src/assets/tutorial/corgi_energy.png' alt='corgi_energy' width="166px" height="230px" />
            <img className={styled.deckCardImg} src='/src/assets/tutorial/terrier_energy.png' alt='terrier_energy' width="166px" height="230px" />
            <img className={styled.deckCardImg} src='/src/assets/tutorial/husky_energy.png' alt='husky_energy' width="166px" height="230px" />
          </div>
        </div>
      </section>

      <section>
        <div className={styled.energyBlockContainer}>
          <div className={styled.energyBlockDescription}>
            <h2 className={styled.h2}>Energy Blocks</h2>
            <p className={clsx(styled.text, styled.energyBlockText)}>You use energy blocks to play cards. At the beginning of the game, you start with <b>2</b> energy blocks.
              With each turn, the number of energy blocks you receive will increase by <b>1</b> until it reaches <b>7</b></p>
          </div>
          <div className={styled.energyBlockImg}>
            <img className={styled.energyImg} src='/src/assets/tutorial/energy_scale.png' alt='energy_scale' width="47px" height="384px" />
            <img className={styled.energyImg} src='/src/assets/tutorial/cost_card.png' alt='cost_card' width="256px" height="384px" />
          </div>
        </div>
      </section>

      <section>
        <div className={styled.gamePlayContainer}>
          <div className={styled.gamePlayDescription}>
            <h2 className={styled.h2}>Gameplay</h2>
            <p className={styled.text}>The turn is divided into 2 phases</p>
          </div>
          <ol className={clsx(styled.text, styled.phasesList)}>
            <li className={styled.phasesItem}>1. Card Deployment Phase
              <div className={styled.phasesItemText}>
                <p>In the first phase, you and your opponent deploy cards onto the field. Your opponent can infer that you have played a card based on the decrease in the number of cards in your hand. However, they will only see which card you played and on which field during the second phase.</p>
                <p>To end the first phase, click the "End Turn" button. Once both you and your opponent have completed the first phase, the second phase begins.</p>
              </div>

              <img className={styled.phaseImg} src='/src/assets/tutorial/block_video.png' alt='block_video' width="875px" height="675px" />

            </li>

            <li className={styled.phasesItem}>2. Battle Phase
              <div className={styled.phasesItemText}>
                <div>
                  <p>In the second phase, the cards battle each other. Cards attack from left to right.</p>
                  <ul className={styled.phaseBattleList}>
                    <li className={styled.dot}>If a card attacks an empty field, the opponent’s hero takes damage.</li>
                    <li className={styled.dot}>If a card attacks another card, the health of the targeted card is reduced by the attack value of the attacking card.</li>
                    <li className={styled.dot}>If a card's health reaches 0 or less and it has already attacked, the card dies (a card will not die until it has attacked).</li>
                  </ul>
                </div>
                <div>
                  <p>After all cards have finished attacking, the next turn begins. The game ends when one of the players' health reaches zero.</p>
                </div>
              </div>
              <img className={styled.phaseImg} src='/src/assets/tutorial/block_video.png' alt='block_video' width="875px" height="675px" />
            </li>
          </ol>
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
      <footer className={styled.footer}>
        <img
          className={clsx(styled.logo, styled.small)}
          src={logo}
          alt="Cybercats"
          width="339px"
          height="61px"
        />
        <a className={styled.mailto} href="mailto:arseni@cybercats.live">
          arseni@cybercats.live
        </a>
        <p className={styled.copyright}>© All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default Index;
