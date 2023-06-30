import { useAppSelector } from '../index.ts';
import { useMemo } from 'react';

export const usePlayerSelector = () => {
  return useAppSelector((state) => state.game.playerData);
};
export const useEnemySelector = () => {
  return useAppSelector((state) => state.game.enemyData);
};

export const usePlayerFieldsSelector = () => {
  const field1 = usePlayerSelector().field1;
  const field2 = usePlayerSelector().field2;
  const field3 = usePlayerSelector().field3;
  const field4 = usePlayerSelector().field4;
  return useMemo(
    () => [
      { id: 'Field1', data: field1 },
      { id: 'Field2', data: field2 },
      { id: 'Field3', data: field3 },
      { id: 'Field4', data: field4 },
    ],
    [field1, field2, field3, field4]
  );
};

export const useEnemyFieldsSelector = () => {
  const field1 = useEnemySelector().field1;
  const field2 = useEnemySelector().field2;
  const field3 = useEnemySelector().field3;
  const field4 = useEnemySelector().field4;
  return useMemo(
    () => [
      { id: 'Field1', data: field1 },
      { id: 'Field2', data: field2 },
      { id: 'Field3', data: field3 },
      { id: 'Field4', data: field4 },
    ],
    [field1, field2, field3, field4]
  );
};
