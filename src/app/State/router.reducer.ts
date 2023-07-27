import { ActionReducerMap } from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';
import { routerReducer } from '@ngrx/router-store';
import { RouterStateUrl } from './router-state.serializer';

export interface StoreRootState {
  router: fromRouter.RouterReducerState<RouterStateUrl>;
}

export const reducers: ActionReducerMap<StoreRootState> = {
  router: routerReducer,
};
export { RouterStateUrl };

