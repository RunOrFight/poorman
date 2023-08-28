import React, { useRef } from 'react';
import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';

import { logo } from '../../assets';
import styled from './Tutorial.module.pcss';


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
          <img
            className={styled.logo}
            src={logo} alt="Cybercats"
            width="339"
            height="61"
          />
          <h1 className={styled.h1}>Tutorial</h1>
          <p className={clsx(styled.text, styled.center)}>
            Welcome to the game <strong>Cybercats!</strong> In this tutorial, we will tell you the mechanics of our game and introduce you to our heroes
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
            <img
              className={styled.cardsDeckImg}
              src='/src/assets/tutorial/сard_deck_cats.png' alt='deck_cats'
              width="276"
              height="355"
            />
            <img
              className={styled.cardsDeckImg}
              src='/src/assets/tutorial/card_deck_dogs.png' alt='deck_dogs'
              width="270"
              height="356"
            />
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
              <img
                className={styled.levelImg}
                src='/src/assets/tutorial/card_level_1.png' alt='level-1'
                width="197"
                height="269"
              />
              <p className={styled.levelText}>1 lvl</p>
              <p className={styled.text}>Munchkin</p>
            </div>
            <div className={styled.levelItem}>
              <img
                className={styled.levelImg}
                src='/src/assets/tutorial/card_level_2.png' alt='level-2'
                width="196"
                height="268"
              />
              <p className={styled.levelText}>2 lvl</p>
              <p className={styled.text}>Maine coon</p>
            </div>
            <div className={styled.levelItem}>
              <img
                className={styled.levelImg}
                src='/src/assets/tutorial/card_level_3.png' alt='level-3'
                width="195"
                height="267"
              />
              <p className={styled.levelText}>3 lvl</p>
              <p className={styled.text}>Sphinx</p>
            </div>
            <div className={styled.levelItem}>
              <img
                className={styled.levelImg}
                src='/src/assets/tutorial/card_level_4.png' alt='level-4'
                width="196"
                height="268"
              />
              <p className={styled.levelText}>1 lvl</p>
              <p className={styled.text}>Corgi</p>
            </div>
            <div className={styled.levelItem}>
              <img
                className={styled.levelImg}
                src='/src/assets/tutorial/card_level_5.png' alt='level-5'
                width="196"
                height="268"
              />
              <p className={styled.levelText}>2 lvl</p>
              <p className={styled.text}>Terrier</p>
            </div>
            <div className={styled.levelItem}>
              <img
                className={styled.levelImg}
                src='/src/assets/tutorial/card_level_6.png' alt='level-6'
                width="195"
                height="267"
              />
              <p className={styled.levelText}>3 lvl</p>
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
              <img
                className={clsx(styled.cardClassImg, styled.cardClassImg__red) }
                src='/src/assets/tutorial/class_red_1.png' alt='class_red'
                width="171"
                height="409"
              />
            </div>
            <div className={styled.cardClassItem}>
              <img
                className={styled.cardClassImg}
                src='/src/assets/tutorial/class_blue_2.png' alt='class_blue'
                width="262"
                height="417"
              />
            </div>
            <div className={styled.cardClassItem}>
              <img
                className={styled.cardClassImg}
                src='/src/assets/tutorial/class_green_3.png' alt='class_green'
                width="252"
                height="409"
              />
            </div>
            <div className={styled.cardClassItem}>
              <img
                className={styled.cardClassImg}
                src='/src/assets/tutorial/class_yellow_4.png' alt='class_yellow'
                width="248"
                height="409"
              />
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
            <img
              className={styled.gameBoardImg}
              src='/src/assets/tutorial/game_board.png' alt='game_board'
              width="875"
              height="675"
            />
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
          <div className={clsx(styled.deckCardList, styled.carousel)}>
            <img className={styled.deckCardImg} src='/src/assets/tutorial/munchkin_warrior.png' alt='munchkin_warrior' width="171" height="232" />
            <img className={styled.deckCardImg} src='/src/assets/tutorial/maine_coon_warrior.png' alt='maine_coon_warrior' width="171" height="232" />
            <img className={styled.deckCardImg} src='/src/assets/tutorial/sphinx_warrior.png' alt='sphinx_warrior' width="171" height="232" />
            <img className={styled.deckCardImg} src='/src/assets/tutorial/corgi_warrior.png' alt='corgi_warrior' width="171" height="232" />
            <img className={styled.deckCardImg} src='/src/assets/tutorial/terrier_warrior.png' alt='terrier_warrior' width="171" height="232" />
            <img className={styled.deckCardImg} src='/src/assets/tutorial/husky_warrior.png' alt='husky_warrior' width="171" height="232" />

            <img className={styled.deckCardImg} src='/src/assets/tutorial/munchkin_archer.png' alt='munchkin_archer' width="171" height="232" />
            <img className={styled.deckCardImg} src='/src/assets/tutorial/maine_coon_archer.png' alt='maine_coon_archer' width="171" height="232" />
            <img className={styled.deckCardImg} src='/src/assets/tutorial/sphinx_archer.png' alt='sphinx_archer' width="171" height="232" />
            <img className={styled.deckCardImg} src='/src/assets/tutorial/corgi_archer.png' alt='corgi_archer' width="171" height="232" />
            <img className={styled.deckCardImg} src='/src/assets/tutorial/terrier_archer.png' alt='terrier_archer' width="171" height="232" />
            <img className={styled.deckCardImg} src='/src/assets/tutorial/husky_archer.png' alt='husky_archer' width="171" height="232" />

            <img className={styled.deckCardImg} src='/src/assets/tutorial/munchkin_shooter.png' alt='munchkin_shooter' width="170" height="232" />
            <img className={styled.deckCardImg} src='/src/assets/tutorial/maine_coon_shooter.png' alt='maine_coon_shooter' width="170" height="232" />
            <img className={styled.deckCardImg} src='/src/assets/tutorial/sphinx_shooter.png' alt='sphinx_shooter' width="170" height="232" />
            <img className={styled.deckCardImg} src='/src/assets/tutorial/corgi_shooter.png' alt='corgi_shooter' width="170" height="232" />
            <img className={styled.deckCardImg} src='/src/assets/tutorial/terrier_shooter.png' alt='terrier_shooter' width="170" height="232" />
            <img className={styled.deckCardImg} src='/src/assets/tutorial/husky_shooter.png' alt='husky_shooter' width="170" height="232" />

            <img className={styled.deckCardImg} src='/src/assets/tutorial/munchkin_energy.png' alt='munchkin_energy' width="171" height="232" />
            <img className={styled.deckCardImg} src='/src/assets/tutorial/maine_coon_energy.png' alt='maine_coon_energy' width="171" height="232" />
            <img className={styled.deckCardImg} src='/src/assets/tutorial/sphinx_energy.png' alt='sphinx_energy' width="171" height="232" />
            <img className={styled.deckCardImg} src='/src/assets/tutorial/corgi_energy.png' alt='corgi_energy' width="171" height="232" />
            <img className={styled.deckCardImg} src='/src/assets/tutorial/terrier_energy.png' alt='terrier_energy' width="171" height="232" />
            <img className={styled.deckCardImg} src='/src/assets/tutorial/husky_energy.png' alt='husky_energy' width="171" height="232" />
          </div>
        </div>
      </section>



      <section>
        <div className={styled.energyBlockContainer}>
          <div className={styled.energyBlockDescription}>
            <h2 className={styled.h2}>Energy Blocks</h2>
            <p className={clsx(styled.text, styled.energyBlockText)}>You use energy blocks to play cards. At the beginning of the game, you start with <b>2</b> energy blocks.<br />With each turn, the number of energy blocks you receive will increase by <b>1</b> until it reaches <b>7</b></p>
          </div>
          <div className={styled.energyBlockImg}>
            <img
              className={styled.energyImg}
              src='/src/assets/tutorial/energy_scale.png' alt='energy_scale'
              width="47"
              height="384"
            />
            <img
              className={styled.energyCostImg}
              src='/src/assets/tutorial/cost_card.png' alt='cost_card'
              width="256"
              height="384"
            />
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
            <li className={styled.phasesItem}><b>1. Card Deployment Phase</b>
              <div className={styled.phasesBlockText}>
                <p className={styled.phasesText}>In the first phase, you and your opponent <b>deploy cards onto the field</b>. Your opponent can infer that you have played a card based on the decrease in the number of cards in your hand. However, they will only see which card you played and on which field during the second phase.</p>
                <p className={styled.phasesText}>To end the first phase, click the <b>"End Turn"</b> button.<br /><br />Once both you and your opponent have completed the first phase, the second phase begins.</p>
              </div>
              <img
                className={styled.phaseImg}
                src='/src/assets/tutorial/block_video.png' alt='block_video'
                width="875"
                height="675"
              />
            </li>
            <li className={styled.phasesItem}><b>2. Battle Phase</b>
              <p>In the second phase, the cards battle each other.<br />Cards attack from <b>left to right</b>.</p>
              <div className={styled.phasesBlockText}>
                <div>
                  <div className={styled.phaseBattleList}>
                    <p className={styled.dot}>If a card attacks an <b>empty field</b>, the opponent’s <b>hero</b> takes damage.</p>
                    <p className={styled.dot}>If a card attacks <b>another card</b>, the health of the targeted card is <b>reduced by the attack value</b> of the attacking card.</p>
                    <p className={styled.dot}>If a card's health reaches <b>0 or less</b> and it has already attacked, the card <b>dies</b> (a card <b>will not die</b> until it has attacked).</p>
                  </div>
                </div>
                <div className={styled.phaseBattleText}>
                  <p>After all cards have finished attacking, the next turn begins.<br />The <b>game ends</b> when one of the players' health <b>reaches zero</b>.</p>
                </div>
              </div>
          <img
                className={styled.phaseImg}
                src='/src/assets/tutorial/block_video.png' alt='block_video'
                width="875"
                height="675"
              />
            </li>
          </ol>
        </div>
      </section>
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
