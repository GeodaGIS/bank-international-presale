// @ts-nocheck
import { store } from '../store';
import { Asset } from './Asset';
import { Contract } from './Contract';

const { getState, dispatch } = store;

export type RootState = ReturnType<typeof getState>;
export type AppDispatch = typeof dispatch;
