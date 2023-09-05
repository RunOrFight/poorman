import { useCallback, useState } from 'react';
import { CreateGameStartAction, useAppDispatch, useAuthSelector } from '../store';
import style from './Menu.module.pcss';
import React from 'react';
import { sound_start_game } from '../assets';
import { TUTORIAL_ROUTE } from '../constants/Routes';
import { useNavigate } from 'react-router-dom';

const MenuPage = () => {
  const navigate = useNavigate();
  const [gameFounding, setGameFounding] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const user = useAuthSelector().user;

  const dispatch = useAppDispatch();

  const handleFindGameButtonClick = useCallback(async () => {
    new Audio(sound_start_game).play();
    setGameFounding(true);
    setTimeout(() => {
      setIsLoading(true);
    }, 250);
    dispatch(CreateGameStartAction({ userId: user.id }));
  }, [dispatch]);

  return (
    <div className={style.wrapper}>
      <span className={style.title}>Cybercats</span>

      <svg
        width="483"
        height="128"
        viewBox="0 0 483 128"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={style.start_game_btn}
        onClick={handleFindGameButtonClick}
      >
        <path
          d="M384.351 2H383.618L383.059 2.47289L372.225 11.635H92.4665L83.412 2.58541L82.8263 2H81.9982H32.0443H31.2162L30.6304 2.58541L2.58617 30.6146L2 31.2005V32.0292V94.219V95.0124L2.54397 95.5901L30.5882 125.371L31.1805 126H32.0443H68.8524H69.5069L70.0347 125.613L82.6526 116.365H174.01L182.179 125.346L182.774 126H183.659H319.498H320.899L321.378 124.684L324.404 116.365H399.878V124V126H401.878H446.574H447.353L447.927 125.473L480.353 95.692L481 95.0976V94.219V38.1606V37.3625L480.451 36.7837L448.024 2.62309L447.433 2H446.574H384.351Z"
          fillOpacity="0.5"
          stroke="url(#paint1_linear_973_181)"
          strokeWidth="5"
          className={`${style.btn_background} ${gameFounding ? style.loading : null}`}
        />
        <text
          className={`${style.text} ${gameFounding ? style.flipAnimation : null}`}
          x="50%"
          y="60%"
          textAnchor={'middle'}
        >
          {isLoading ? (
            <React.Fragment>Waiting</React.Fragment>
          ) : (
            <React.Fragment>Start game</React.Fragment>
          )}
        </text>

        <defs>
          <linearGradient
            id="paint0_linear_973_181"
            x1="90.6825"
            y1="4.00002"
            x2="472.853"
            y2="119.445"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.117808" stopColor="#2BBAD9" stopOpacity={gameFounding ? 0.3 : 1}>
              {gameFounding ? (
                <animate
                  attributeName="stop-opacity"
                  attributeType="CSS"
                  values="1;0.6;0.3"
                  dur="1s"
                  repeatCount="0"
                />
              ) : null}
            </stop>
            <stop offset="0.637115" stopColor="#674CB2" stopOpacity={gameFounding ? 0.3 : 1}>
              {gameFounding ? (
                <animate
                  attributeName="stop-opacity"
                  attributeType="CSS"
                  values="1;0.6;0.3"
                  dur="1s"
                  repeatCount="0"
                />
              ) : null}
            </stop>
          </linearGradient>
          <linearGradient
            id="paint1_linear_973_181"
            x1="38.5728"
            y1="-9.99998"
            x2="478.786"
            y2="149.092"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#AEFFFA">
              {gameFounding ? (
                <animate
                  attributeName="stop-color"
                  attributeType="CSS"
                  values="#AEFFFA;#333;#00FFF0;"
                  dur="1s"
                  repeatCount="indefinite"
                />
              ) : null}
            </stop>
            <stop offset="1" stopColor="#00FFF0" stopOpacity={!gameFounding ? 0 : 1}>
              {gameFounding ? (
                <animate
                  attributeName="stop-color"
                  attributeType="CSS"
                  values="#00FFF0;#333;#AEFFFA;"
                  dur="1s"
                  repeatCount="indefinite"
                  begin={'0.5s'}
                />
              ) : null}
            </stop>
          </linearGradient>
        </defs>
      </svg>

      <svg
        width="483"
        height="128"
        viewBox="0 0 483 128"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={style.start_game_btn}
        onClick={() => {
          navigate(TUTORIAL_ROUTE);
        }}
      >
        <path
          d="M384.351 2H383.618L383.059 2.47289L372.225 11.635H92.4665L83.412 2.58541L82.8263 2H81.9982H32.0443H31.2162L30.6304 2.58541L2.58617 30.6146L2 31.2005V32.0292V94.219V95.0124L2.54397 95.5901L30.5882 125.371L31.1805 126H32.0443H68.8524H69.5069L70.0347 125.613L82.6526 116.365H174.01L182.179 125.346L182.774 126H183.659H319.498H320.899L321.378 124.684L324.404 116.365H399.878V124V126H401.878H446.574H447.353L447.927 125.473L480.353 95.692L481 95.0976V94.219V38.1606V37.3625L480.451 36.7837L448.024 2.62309L447.433 2H446.574H384.351Z"
          fill="#3B316E"
          stroke="url(#paint0_linear_1002_1639)"
          strokeWidth="4"
        />
        <text className={`${style.text}`} x="50%" y="60%" textAnchor={'middle'}>
          Tutorial
        </text>
        <defs>
          <linearGradient
            id="paint0_linear_1002_1639"
            x1="38.5728"
            y1="-9.99998"
            x2="478.786"
            y2="149.092"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#7F6CE1" />
            <stop offset="1" stopColor="#3B316E" />
          </linearGradient>
        </defs>
      </svg>

      {/*<div className="text-xl">You are logged as {user?.name}</div>*/}
      {/*<div className="flex w-full justify-center items-center gap-2">*/}
      {/*  <Input ref={lobbyIdInput} />*/}
      {/*  <Button onClick={handleJoinLobbyButtonClick}>Join Lobby</Button>*/}
      {/*  <div className="text-xl">Or</div>*/}
      {/*  <Button onClick={handleCreateLobbyButtonClick}>Create Lobby</Button>*/}
      {/*</div>*/}
      {/*{link && (*/}
      {/*  <Window isVisible={isWindowVisible} setIsVisible={setIsWindowVisible}>*/}
      {/*    <CopyToClipboard link={link} />*/}
      {/*  </Window>*/}
      {/*)}*/}
    </div>
  );
};
export default MenuPage;
