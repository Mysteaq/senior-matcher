import { Component, ViewChild} from '@angular/core';
import { Platform, MenuController, Nav } from 'ionic-angular';
import { List } from 'ionic-angular';

import { HomePage } from '../pages/main/home';
import { AuthPage } from '../pages/auth/home/home';

import { DataProvider } from '../providers/data';
import { AuthProvider } from '../providers/auth';
import { SearchPage } from '../pages/search/search';
import { ListPage } from '../pages/list/list';
import { MatchedPage } from '../pages/matched/matched';
import { ProfilePage } from '../pages/profile/profile';
import { P } from '../pages/user/p';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  isAppInitialized: boolean = false;
  user: any;
  rootPage: any = AuthPage;
  pages: Array<{title: string, component: any}>;

  constructor(
    private platform: Platform,
    public menu: MenuController,
    protected data: DataProvider,
    protected auth: AuthProvider
  ) {

      this.pages = [
        { title: 'Profile', component: SearchPage }
      ];
    this.user = {
      image: ''
    };

  }

  ngOnInit() {
    this.platform.ready().then(() => {
      this.auth.getUserData().subscribe(data => {
        if (!this.isAppInitialized) {
          //this.nav.setRoot(AuthPage);
          this.isAppInitialized = true;
        }
        this.user = data;
        this.data.list('pets').subscribe(data => {
          console.log(data);

        });
      }, err => {
        this.nav.setRoot(AuthPage);
      });
    });
  }

}
