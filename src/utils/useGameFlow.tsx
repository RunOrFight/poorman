import { useEffect, useState } from 'react';
import { ICardAttack, ICardIsDead, IGameData } from '../interfaces';
import { setGameData, useAppDispatch } from '../store';
import { useSignalR } from '../services';
import { playAttackAnimation } from './Anime.ts';

const eventStack: { eventName: string; data: ICardAttack | IGameData | ICardIsDead }[] = [];
export const useGameFlow = () => {
  const connection = useSignalR();
  const [isBattleStarted, setIsBattleStarted] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isBattleStarted) {
      connection.off('update_game_data');
      connection.on('update_game_data', (data) => {
        const parsedData: IGameData = JSON.parse(data);
        eventStack.push({ eventName: 'update_game_data', data: parsedData });
      });
    } else {
      connection.off('update_game_data');
      connection.on('update_game_data', (data) => {
        const parsedData = JSON.parse(data);
        dispatch(setGameData(parsedData));
      });
    }
  }, [isBattleStarted, connection, dispatch]);

  useEffect(() => {
    connection.on('start_battle', () => {
      setIsBattleStarted(true);
    });

    connection.on('card_attack', (data) => {
      setIsBattleStarted(true);
      const parsedData = JSON.parse(data);
      eventStack.push({ eventName: 'card_attack', data: parsedData });
    });

    connection.on('turn_start', async () => {
      for (const event of eventStack) {
        if (event.eventName === 'card_attack') {
          await playAttackAnimation(event.data as ICardAttack);
        } else if (event.eventName === 'update_game_data') {
          dispatch(setGameData(event.data as IGameData));
        }
      }
      eventStack.filter(() => false);
      setIsBattleStarted(false);
    });

    connection.on('player_win', (data) => {
      alert(data);
    });
  });
};
