import { animePromise, cardAttackAnimation, fieldUnderAttackAnimation } from '.';
import { sound_archer, sound_energy, sound_gun, sound_sword } from '../assets';
import { CardIn, CardType, ICardAttack, IPlayer } from '../interfaces';

const resolveCardAttack = async (currentPlayerId: IPlayer['id'], data: ICardAttack) => {
  const { attackingCard, attackingPlayerId, fieldsUnderAttack } = data;
  const isEnemy = currentPlayerId !== attackingPlayerId;
  const audio =
    attackingCard.type === CardType.Straight
      ? new Audio(sound_sword)
      : attackingCard.type === CardType.Left
      ? new Audio(sound_archer)
      : attackingCard.type === CardType.Right
      ? new Audio(sound_gun)
      : attackingCard.type === CardType.All
      ? new Audio(sound_energy)
      : null;

  await Promise.all([
    audio?.play(),

    animePromise(
      cardAttackAnimation({
        isEnemy,
        cardId: attackingCard.id,
        cardType: attackingCard.type,
      })
    ),

    animePromise(
      fieldUnderAttackAnimation({
        isEnemy,
        fieldIds: fieldsUnderAttack.map((fieldId) => CardIn[fieldId]),
      })
    ),
  ]);
};

export { resolveCardAttack };
