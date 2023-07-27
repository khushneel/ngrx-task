import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as SignupActions from './signup.actions';
import { UserService } from '../service/user.service';
import { User } from './user.model';
import { Router } from '@angular/router';

@Injectable()
export class SignupEffects {
  
  constructor(private actions$: Actions, private userService: UserService, private router: Router) {}
              
  signUp$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SignupActions.signUpSuccess),
      tap(() => {
        this.router.navigate(['/table']);
      }),
      switchMap((action) =>
        this.userService.signUp(action.user).pipe(
          map((response: { message: string }) => { 
            return SignupActions.signUpSuccess({ user: response as unknown as User });
          }),
          catchError((error) => {
            return of(SignupActions.signUpFailure({ error: error.message }));
          })
        )
      )
    )
  );


  getValue$ = createEffect(() =>
  this.actions$.pipe(
    ofType(SignupActions.getValueSuccess),
    switchMap(() =>
      this.userService.getValue().pipe(
        map((response: any) => {
          return SignupActions.getValueSuccess({ data: response }); 
        }),
        catchError((error) => {
          return of(SignupActions.getValueFailure({ error: error.message })); 
        })
      )
    )
  )
);


}
