import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { AngularFire, FirebaseListObservable, AuthProviders, AuthMethods } from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Apps Works!';
  cuisines: FirebaseListObservable<any[]>;
  restaurants: Observable<any[]>;

  displayName;
  photoURL;

  constructor(private _af: AngularFire) {
  }

  ngOnInit() {
    this.cuisines = this._af.database.list('/cuisines');
    this.restaurants = this._af.database.list('/restaurants')
      .map(restaurants => {
        restaurants.map(restaurant =>
          restaurant.cuisineType = this._af.database.object('/cuisines/' + restaurant.cuisine)
        );

        return restaurants;
      });

    this._af.auth.subscribe(authState => {
      if (!authState) {
        this.displayName = null;
        this.photoURL = null;
        return;
      }

      this.displayName = authState.auth.displayName;
      this.photoURL = authState.auth.photoURL;
    })
  }

  login() {
    this._af.auth.login({
      provider: AuthProviders.Facebook,
      method: AuthMethods.Popup,
      scope: ['public_profile', 'user_friends']
    }).then((authState: any) => {
      console.log('AFTER LOGIN: ', authState);
      this._af.database.object('/users/' + authState.uid).update({
        accessToken: authState.facebook.accessToken
      });
    });
  }

  logout() {
    this._af.auth.logout();
  }
}
