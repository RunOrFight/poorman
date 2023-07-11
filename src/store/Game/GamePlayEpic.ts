import {
  EMPTY,
  catchError,
  concat,
  concatMap,
  distinctUntilChanged,
  filter,
  from,
  map,
  merge,
  mergeMap,
  of,
} from 'rxjs';
import {
  ActionWithPayload,
  AppEpic,
  CARD_ATTACK_START,
  CARD_IS_DEAD,
  CardAttackOkAction,
  PLAYER_WIN,
  SET_GAME_DATA_START,
  SetGameDataOkAction,
} from '..';
import { sound_sword, sound_archer, sound_gun, sound_energy } from '../../assets';
import { isGameOnlyMode } from '../../constants';
import { ICardAttack, IGameData, ICardIsDead, CardType, CardIn } from '../../interfaces';
import {
  animePromise,
  fieldUnderAttackAnimation,
  cardAttackAnimation,
  toCloseTheVeil,
  playerWinAnimation,
  cardIsDeadAnimation,
} from '../../utils';

const gamePlayEpic: AppEpic = (action$, state$) =>
  action$
    .pipe(
      filter(
        (action) =>
          action.type === CARD_ATTACK_START ||
          action.type === SET_GAME_DATA_START ||
          action.type === PLAYER_WIN ||
          action.type === CARD_IS_DEAD
      ),
      distinctUntilChanged((prev, next) =>
        isGameOnlyMode ? false : JSON.stringify(prev.payload) === JSON.stringify(next.payload)
      ),

      concatMap(({ payload, type }: ActionWithPayload<ICardAttack | IGameData | ICardIsDead>) => {
        if (type === CARD_ATTACK_START) {
          const { attackingCard, attackingPlayerId, fieldsUnderAttack } = payload as ICardAttack;
          const isEnemy = state$.value.game.playerId !== attackingPlayerId;
          const cardId = attackingCard.id;
          const cardType = attackingCard.type;
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
          return merge(
            from((audio as HTMLAudioElement).play()).pipe(mergeMap(() => EMPTY)),
            from(
              animePromise(
                fieldUnderAttackAnimation({
                  isEnemy,
                  fieldIds: fieldsUnderAttack.map((fieldUnderAttack) => CardIn[fieldUnderAttack]),
                })
              )
            ).pipe(mergeMap(() => EMPTY)),
            from(animePromise(cardAttackAnimation({ isEnemy, cardId, cardType }))).pipe(
              map(() => CardAttackOkAction(payload as ICardAttack))
            )
          ).pipe(
            catchError((e) => {
              // eslint-disable-next-line no-console
              console.error(e, 'CARD_ATTACK_START merge');

              return EMPTY;
            })
          );
        } else if (type === PLAYER_WIN) {
          return concat(
            from(animePromise(toCloseTheVeil)).pipe(mergeMap(() => EMPTY)),
            from(animePromise(playerWinAnimation)).pipe(mergeMap(() => EMPTY))
          ).pipe(
            catchError((e) => {
              // eslint-disable-next-line no-console
              console.error(e, 'PLAYER_WIN concat');

              return EMPTY;
            })
          );
        } else if (type === CARD_IS_DEAD) {
          return from(
            animePromise(
              cardIsDeadAnimation({
                fieldId: CardIn[(payload as ICardIsDead).field],
                isEnemy: state$.value.game.playerId !== (payload as ICardIsDead).playerId,
              })
            )
          )
            .pipe(mergeMap(() => EMPTY))
            .pipe(
              catchError((e) => {
                // eslint-disable-next-line no-console
                console.error(e, 'CARD_IS_DEAD');

                return EMPTY;
              })
            );
        } else {
          return of(SetGameDataOkAction(payload as IGameData));
        }
      })
    )
    .pipe(
      catchError((e) => {
        // eslint-disable-next-line no-console
        console.error(e, 'gamePlayEpic');

        return EMPTY;
      })
    );

export { gamePlayEpic };
