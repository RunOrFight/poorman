import { animePromise, cardIsDeadAnimation } from '.';
import { CardIn, ICardIsDead, IPlayer } from '../interfaces';

const resolveCardIsDead = async (currentPlayerId: IPlayer['id'], data: ICardIsDead) => {
  const { field, playerId } = data;
  const isEnemy = currentPlayerId !== playerId;
  await animePromise(
    cardIsDeadAnimation({
      fieldId: CardIn[field],
      isEnemy,
    })
  );
};

export { resolveCardIsDead };
