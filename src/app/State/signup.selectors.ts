import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SignupState } from './signup.state';

export const selectSignupState = createFeatureSelector<SignupState>('signup');

export const selectUser = createSelector(
  selectSignupState,
  (state: SignupState) => state.user
);

export const selectSignupData = createSelector(
  selectSignupState,
  (state: SignupState) => state.data
);

