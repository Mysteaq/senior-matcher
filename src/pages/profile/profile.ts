import { Component } from '@angular/core';
import {  NavController, AlertController } from 'ionic-angular';
import { AngularFire,AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { AuthProvider } from '../../providers/auth';
import { DataProvider } from '../../providers/data';
import { ProfileProvider } from '../../providers/userprofile';
@Component({
  templateUrl: 'profile.html',
  selector: 'profile'
})
export class ProfilePage {
  items: FirebaseListObservable<any>;
  lists = [];
  email : string;
  name : string;
  track : string;



  constructor(public navCtrl: NavController, public db : AngularFireDatabase,private af: AngularFire) {
      this.items = db.list('/users');
    this.af.auth.subscribe(auth => {
            if(auth) {
                console.log('You are authenticated', auth.uid);
                this.items = db.list('/users/'+auth.uid,{ preserveSnapshot: true });
              console.log(this.items);
              this.items
  .subscribe(snapshots => {
    snapshots.forEach(snapshot => {
      console.log(snapshot.key,snapshot.val());
      this.lists.push(snapshot.val());
      this.email = this.lists[0];
      this.name = this.lists[3];
      this.track = this.lists[5];
    });
  })
            } else {
                console.log('You are not authenticated')
            }

        });
  }
//   ionViewDidEnter() {
//   this.profileProvider.getUserProfile().then( profileSnap => {
//     this.userProfile = profileSnap;
//   });
// }
}
