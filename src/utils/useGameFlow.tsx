import { useEffect } from 'react';
import { ICardAttack, ICardIsDead, IGameData, TEventsQueue } from '../interfaces';
import { EndTurnOk, SetGameDataOkAction, useAppDispatch, useAppSelector } from '../store';
import { useSignalR } from '../services';
import { runQueue } from './RunQueue';

let eventsQueue: TEventsQueue = [];
let isBattleStarted = false;
let lastGameData = '';

export const useGameFlow = () => {
  const connection = useSignalR();
  const dispatch = useAppDispatch();
  const currentPlayerId = useAppSelector((s) => s.game.playerId);

  useEffect(() => {
    connection.off('start_battle');
    connection.on('start_battle', () => {
      isBattleStarted = true;
    });

    connection.off('update_game_data');
    connection.on('update_game_data', (data) => {
      if (lastGameData === data) {
        lastGameData = data;
        return;
      }
      const parsedData: IGameData = JSON.parse(data);
      lastGameData = data;
      isBattleStarted
        ? eventsQueue.push({ type: 'update_game_data', data: parsedData })
        : dispatch(SetGameDataOkAction(parsedData));
    });

    connection.off('card_attack');
    connection.on('card_attack', (data) => {
      const parsedData: ICardAttack = JSON.parse(data);
      eventsQueue.push({ type: 'card_attack', data: parsedData });
    });

    connection.off('player_win');
    connection.on('player_win', async (data) => {
      eventsQueue.push({ type: 'player_win', data });
      await runQueue(eventsQueue, currentPlayerId!, dispatch);
      eventsQueue = [];
    });

    connection.off('card_is_dead');
    connection.on('card_is_dead', (data) => {
      const parsedData: ICardIsDead = JSON.parse(data);
      eventsQueue.push({ type: 'card_is_dead', data: parsedData });
    });

    connection.off('turn_start');
    connection.on('turn_start', async () => {
      await runQueue(eventsQueue, currentPlayerId!, dispatch);
      eventsQueue = [];

      isBattleStarted = false;
      dispatch(EndTurnOk({ success: false }));
    });
  }, []);
};
