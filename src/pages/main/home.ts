import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SearchPage } from '../search/search';
import { ListPage } from '../list/list';
import { MatchedPage } from '../matched/matched';
import { ProfilePage } from '../profile/profile';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { LoginEmailPage } from '../auth/login-email/login-email';
import { ProfileProvider } from '../../providers/userprofile';
@Component({
  templateUrl: 'home.html',
  selector: 'home'
})
export class HomePage {
  constructor(private navCtrl: NavController, private af: AngularFire) {

  }

  openSearchPage(): void {
    this.navCtrl.push(SearchPage);
  }
  openListPage(): void {
    this.navCtrl.push(ListPage);
  }
  openMatchedPage(): void {
    this.navCtrl.push(MatchedPage);
  }

  openProfilePage(): void {
    this.navCtrl.push(ProfilePage);
  }

  logout() {
    this.af.auth.logout();
    this.navCtrl.setRoot(LoginEmailPage);
  }
}
