import { Models } from '@rematch/core';
import app from './app';

export const models: RootModel = { app };

export interface RootModel extends Models<RootModel> {
  app: typeof app;
}
