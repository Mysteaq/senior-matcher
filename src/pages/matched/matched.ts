import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Data } from '../../providers/data';
import { FormControl } from '@angular/forms';
import { P } from '../user/p';
@Component({
  selector: 'matched',
  templateUrl: 'matched.html'
})
export class MatchedPage {

  searchTerm: string = '';
  searchControl: FormControl;
  items: any;
  searching: any = false;

  constructor(public navCtrl: NavController, public dataService: Data) {
    this.searchControl =  new FormControl();
  }

  ionViewDidLoad() {

    this.setFilteredItems();

    this.searchControl.valueChanges.debounceTime(700).subscribe(search =>{
        this.searching = false;
        this.setFilteredItems();
    });

  }
  goToP(): void {
    this.navCtrl.push(P);
  }

  onSearchInput() {
    this.searching= true;
  }

  setFilteredItems() {
    this.items = this.dataService.filterItems(this.searchTerm);
  }


}
