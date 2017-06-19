import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { Meteor } from 'meteor/meteor';
import { ChatsPage } from '../pages/chats/chats';
import { LoginPage } from '../pages/login/login';
import template from "./app.html";

@Component({
  selector: 'my-app',
  template
})

export class MyApp {
  rootPage: any;

  constructor(platform: Platform) {
    this.rootPage = Meteor.user() ? ChatsPage : LoginPage;
    
    platform.ready().then(() => {
      if (platform.is('cordova')) {
        StatusBar.styleDefault();
        Splashscreen.hide();
    }
    });
  }
}
