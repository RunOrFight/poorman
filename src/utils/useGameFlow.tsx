import { useEffect } from 'react';
import { ICardAttack, IGameData, IPlayerData } from '../interfaces';
import {
  CardAttackStartAction,
  PlayerWinAction,
  SetGameDataStartAction,
  useAppDispatch,
} from '../store';
import { useSignalR } from '../services';

export const useGameFlow = () => {
  const connection = useSignalR();
  const dispatch = useAppDispatch();

  useEffect(() => {
    connection.on('update_game_data', (data) => {
      const parsedData: IGameData = JSON.parse(data);
      dispatch(SetGameDataStartAction(parsedData));
    });

    connection.on('card_attack', (data) => {
      const parsedData: ICardAttack = JSON.parse(data);
      dispatch(CardAttackStartAction(parsedData));
    });

    connection.on('player_win', (data) => {
      const parsedData: IPlayerData = JSON.parse(data);
      dispatch(PlayerWinAction(parsedData));
    });

    connection.on('card_is_dead', (data) => {
      data;
    });
  });
};
