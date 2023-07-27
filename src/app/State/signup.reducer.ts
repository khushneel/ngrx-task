import { createReducer, on, Action } from '@ngrx/store';
import { User } from './user.model';
import * as SignupActions from './signup.actions';
import { initialSignupState, SignupState } from './signup.state';

export const initialState: any = {
  data: null,
  error: null,
};

export const signupReducer = createReducer(
  initialSignupState,

  on(SignupActions.signUpSuccess, (state, { user }) => ({
    ...state,
    user,
    error: null
  })),
  

  on(SignupActions.signUpFailure, (state, { error }) => ({
    ...state,
    error
  })),

  on(SignupActions.getValueSuccess, (state, { data }) => ({
    ...state,
    data: data,
    error: null,
  })),
  on(SignupActions.getValueFailure, (state, { error }) => ({
    ...state,
    data: null,
    error: error,
  }))

  
);
