
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataProvider {
  constructor(private af: AngularFire) {}

  push(path: string, data: any): Observable<any> {
    return Observable.create(observer => {
      this.af.database.list(path).push(data).then(firebaseNewData => {
        // Return the uid created
        let newData: any = firebaseNewData;
        observer.next(newData.path.o[newData.path.o.length - 1]);
      }, error => {
        observer.error(error);
      });
    });
  }

  update(path: string, data: any) {
    this.af.database.object(path).update(data);
  }

  list(path: string): FirebaseListObservable<any> {
    return this.af.database.list(path);
  }

  object(path: string): FirebaseObjectObservable<any> {
    return this.af.database.object(path);
  }

  remove(path: string): Observable<any> {
    return Observable.create(observer => {
      this.af.database.object(path).remove().then(data => {
        observer.next();
      }, error => {
        observer.error(error);
      });
    });
  }
}
@Injectable()
export class Data {

    items: any;

    constructor(public http: Http) {

        this.items = [
            {title: 'Peeraya Thanomboon'},
            {title: 'Pimpaknat Soontorntham'},
            {title: 'Benjarat Tirasirichai'},
            {title: 'A'}
        ]

    }

    filterItems(searchTerm){

        return this.items.filter((item) => {
            return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
        });

    }

}
