import { useEffect } from 'react';
import { LoadGameStartAction, useAppDispatch, useAppSelector } from '../store';

export const useLoadGame = () => {
  const gameId = useAppSelector((state) => state.game.gameId!);
  const playerId = useAppSelector((state) => state.game.playerId!);
  const isGameLoaded = useAppSelector((state) => state.game.isGameLoaded!);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!isGameLoaded) {
      dispatch(LoadGameStartAction({ gameId, playerId }));
    }
  });

  return isGameLoaded;
};
