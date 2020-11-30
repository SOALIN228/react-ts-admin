import { init, RematchDispatch, RematchRootState, Models } from '@rematch/core';
import app from './app';

export const models: RootModel = { app };

export interface RootModel extends Models<RootModel> {
  app: typeof app;
}

export const store = init({
  models,
});

export type Store = typeof store;
export type Dispatch = RematchDispatch<RootModel>;
export type RootState = RematchRootState<RootModel>;
