import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { List } from 'ionic-angular';

// Pages
import { ForgotPasswordPage } from '../pages/auth/forgot-password/forgot-password';
import { AuthPage } from '../pages/auth/home/home';
import { LoginEmailPage } from '../pages/auth/login-email/login-email';
import { SignUpPage } from '../pages/auth/sign-up/sign-up';
import { HomePage } from '../pages/main/home';
import { TermsOfServicePage } from '../pages/terms-of-service/terms-of-service';

import { AngularFireModule } from 'angularfire2';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { SearchPage } from '../pages/search/search';
import { ListPage } from '../pages/list/list';
import { MatchedPage } from '../pages/matched/matched';
import { ProfilePage } from '../pages/profile/profile';
import { P } from '../pages/user/p';
// Providers
import { DataProvider } from '../providers/data';
import { AuthProvider } from '../providers/auth';

import { Data } from '../providers/data';

export const firebaseConfig = {
  apiKey: 'AIzaSyB9scsRhwoze1A9r0EAne4GJ4lYZalG1Xs',
  authDomain: 'ionic2-angularfire-login-14ea3.firebaseapp.com',
  databaseURL: 'https://senior-5a271.firebaseio.com',
  storageBucket: 'ionic2-angularfire-login-14ea3.appspot.com',
};

@NgModule({
  declarations: [
    MyApp,
    ForgotPasswordPage,
    AuthPage,
    LoginEmailPage,
    SignUpPage,
    HomePage,
    TermsOfServicePage,
    ItemDetailsPage,
    SearchPage,
    ListPage,
    MatchedPage,
    ProfilePage,
    P
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ForgotPasswordPage,
    AuthPage,
    LoginEmailPage,
    SignUpPage,
    HomePage,
    TermsOfServicePage,
    ItemDetailsPage,
    SearchPage,
    ListPage,
    MatchedPage,
    ProfilePage,
    P
  ],
  providers: [
    {
      provide: ErrorHandler,
      useClass: IonicErrorHandler
    }, DataProvider, AuthProvider,Data
  ]
})
export class AppModule {}
