import { AppEpic, CARD_ATTACK } from '../index.ts';
import { merge, concatMap, EMPTY, from, of, tap } from 'rxjs';
import { ofType } from 'redux-observable';
import { animePromise, cardAttackAnimation, cardGetDamageAnimation } from '../../utils';
import { map } from 'rxjs/operators';

const GameEpic: AppEpic = (action$, state$, dependencies) =>
  action$.pipe(
    ofType(CARD_ATTACK),

    concatMap(({ payload }) =>
      merge(
        from(animePromise(cardAttackAnimation(payload))).pipe(
          map(() => ({
            type: 'ATTACK_OK',
          }))
        ),
        from(animePromise(cardGetDamageAnimation(payload))).pipe(
          tap(() => {
            console.log('Ok');
          }),
          map(() => ({
            type: 'ATTACK_OK',
          }))
        )
      )
    )
  );

export { GameEpic };
