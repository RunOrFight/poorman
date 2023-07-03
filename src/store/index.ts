import { useSelector } from 'react-redux';
import { TypedUseSelectorHook, useDispatch } from 'react-redux';
import { httpApi } from '../api';
import { Epic, combineEpics, createEpicMiddleware } from 'redux-observable';
import { AuthEpic, AuthReducer } from './Auth';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { createReduxHistoryContext } from 'redux-first-history';
import { createBrowserHistory } from 'history';
import { GameEpic, GameReducer } from './Game';
import { ConnectionReducer } from './Connection';

const { createReduxHistory, routerMiddleware, routerReducer } = createReduxHistoryContext({
  history: createBrowserHistory(),
});

const rootEpic: any = combineEpics(AuthEpic, GameEpic);

const dependencies = { httpApi };
const epicMiddleware = createEpicMiddleware({ dependencies });

const rootReducer = combineReducers({
  router: routerReducer,
  game: GameReducer,
  auth: AuthReducer,
  connection: ConnectionReducer,
});
export const setupStore = () => {
  const store = createStore(
    rootReducer,
    compose(applyMiddleware(routerMiddleware, epicMiddleware))
  );

  epicMiddleware.run(rootEpic);

  const history = createReduxHistory(store);

  return { store, history };
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>['store'];
export type AppDispatch = AppStore['dispatch'];
export type AppDependencies = typeof dependencies;
export type AppEpic = Epic<any, any, RootState, AppDependencies>;
export type ActionWithPayload<T = any> = { type: string; payload: T };
export const useAppDispatch = useDispatch<AppDispatch>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export * from './Game';
export * from './Auth';
export * from './Connection';
