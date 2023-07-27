import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { signupReducer } from './State/signup.reducer';
import { SignupEffects } from './State/signup.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { TableComponent } from './table/table.component';
import { GetTableComponent } from './get-table/get-table.component';
import { routerReducer, StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';
import {  CustomSerializer } from './State/router-state.serializer';
import { RouterStoreComponent } from './router-store/router-store.component';


@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    TableComponent,
    GetTableComponent,
    RouterStoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ signup: signupReducer, router: routerReducer }),
    EffectsModule.forRoot([SignupEffects]),
    ReactiveFormsModule,
    HttpClientModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    StoreRouterConnectingModule.forRoot({
      serializer: CustomSerializer
    }),
  ],
  providers: [
    { provide: RouterStateSerializer, useClass: CustomSerializer }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
