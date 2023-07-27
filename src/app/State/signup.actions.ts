import { createAction, props } from '@ngrx/store';
import { User } from './user.model';

export const signUpSuccess = createAction(                                                   
  '[Signup] Sign Up Success',                                                   
  props<{ user: User }>()                                                    
);                                                   

export const signUpFailure = createAction(                                                   
  '[Signup] Sign Up Failure',                                                   
  props<{ error: string }>()                                                   
);                                                   


export const getValueSuccess = createAction(                                                   
  '[Value] Get Value Success',                                                   
  props<{ data:any}>()                                                   
);

export const getValueFailure = createAction(
  '[Value] Get Value Failure',                                                   
  props<{ error: string }>()                                                   
);                                                   