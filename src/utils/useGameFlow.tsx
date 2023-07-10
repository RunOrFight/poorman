import { useEffect } from 'react';
import { ICardAttack, ICardIsDead, IGameData, IPlayerData } from '../interfaces';
import {
  CardAttackStartAction,
  CardIsDeadAction,
  PlayerWinAction,
  SetGameDataStartAction,
  useAppDispatch,
} from '../store';
import { useSignalR } from '../services';

export const useGameFlow = () => {
  const connection = useSignalR();
  const dispatch = useAppDispatch();

  useEffect(() => {
    connection.off('update_game_data');
    connection.on('update_game_data', (data) => {
      const parsedData: IGameData = JSON.parse(data);
      dispatch(SetGameDataStartAction(parsedData));
    });

    connection.off('card_attack');
    connection.on('card_attack', (data) => {
      const parsedData: ICardAttack = JSON.parse(data);
      dispatch(CardAttackStartAction(parsedData));
    });

    connection.off('player_win');
    connection.on('player_win', (data) => {
      const parsedData: IPlayerData = JSON.parse(data);
      dispatch(PlayerWinAction(parsedData));
    });

    connection.off('card_is_dead');
    connection.on('card_is_dead', (data) => {
      const parsedData: ICardIsDead = JSON.parse(data);
      dispatch(CardIsDeadAction(parsedData));
    });
  });
};
