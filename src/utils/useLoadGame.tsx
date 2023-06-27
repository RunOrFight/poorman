import { useEffect } from 'react';
import { useAppSelector } from '../store';
import { useLoadGameMutation } from '../api';

export const useLoadGame = () => {
  const gameId = useAppSelector((state) => state.game.gameId!);
  const playerId = useAppSelector((state) => state.game.playerId!);
  const isGameLoaded = useAppSelector((state) => state.game.isGameLoaded!);
  const [loadGame, { isSuccess }] = useLoadGameMutation();

  useEffect(() => {
    if (!isGameLoaded) {
      loadGame({ gameId, playerId });
    }
  });

  return isSuccess;
};
