import { store } from '../store';
import { Asset } from './Asset';

const { getState, dispatch } = store;

export type RootState = ReturnType<typeof getState>;
export type AppDispatch = typeof dispatch;

export interface GlobalState {
    assets: Asset[]
}