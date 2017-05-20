import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { Data } from '../../providers/data';
import { FormControl } from '@angular/forms';
import Firebase from 'firebase';
import { Platform } from 'ionic-angular';
import { ModalController, NavParams } from 'ionic-angular';
import { P } from '../user/p';

import 'rxjs/add/operator/debounceTime';
@Component({
  selector: 'search',
  templateUrl: 'search.html'
})
export class SearchPage {

  searchTerm: string = '';
  searchControl: FormControl;
  items: any;
  searching: any = false;

  public names: FirebaseListObservable<any>;
  public currentItems: any =  this.names;


  constructor(public navCtrl: NavController, public dataService: Data,public af: AngularFire,
    public modalCtrl: ModalController, private platform: Platform) {
    this.searchControl =  new FormControl();

    this.names = af.database.list('/name');
  }

  goToP(): void {
    this.navCtrl.push(P);
  }

  ionViewDidLoad() {

    this.setFilteredItems();

    this.searchControl.valueChanges.debounceTime(700).subscribe(search =>{
        this.searching = false;
        this.setFilteredItems();
    });

  }

  onSearchInput() {
    this.searching= true;
  }

  setFilteredItems() {
    this.items = this.dataService.filterItems(this.searchTerm);
  }

}
