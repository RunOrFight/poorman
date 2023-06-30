import { GameReducer } from './GameSlice';
import { useSelector } from 'react-redux';
import { TypedUseSelectorHook, useDispatch } from 'react-redux';
import { httpApi } from '../api';
import { Epic, combineEpics, createEpicMiddleware } from 'redux-observable';
import { AuthEpic, AuthReducer } from './Auth';
import { applyMiddleware, combineReducers, createStore } from 'redux';

const rootEpic = combineEpics(AuthEpic);

const rootReducer = combineReducers({
  game: GameReducer,
  auth: AuthReducer,
});
const dependencies = { httpApi };
const epicMiddleware = createEpicMiddleware({ dependencies });

export const setupStore = () => {
  const store = createStore(rootReducer, applyMiddleware(epicMiddleware));

  epicMiddleware.run(rootEpic);

  return store;
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
export type AppDependencies = typeof dependencies;
export type AppEpic = Epic<any, any, AppStore, AppDependencies>;
export type ActionWithPayload<T = any> = { type: string; payload: T };

export const useAppDispatch = useDispatch<AppDispatch>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export * from './GameSlice.ts';
export * from './AuthSlice.ts';
