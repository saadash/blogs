import { Component } from "@angular/core";

import { Platform, NavController } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import {
  NativePageTransitions,
  NativeTransitionOptions
} from "@ionic-native/native-page-transitions/ngx";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"]
})
export class AppComponent {
  public appPages = [
    {
      url: "/home",
      icon: "../../assets/icon/home.svg",
      tab: "home"
    },
    {
      url: "/search",
      icon: "../../assets/icon/search.svg",
      tab: "search"
    },
    {
      url: "/bookmarks",
      icon: "../../assets/icon/bookmark.svg",
      tab: "bookmarks"
    },
    {
      url: "/about",
      icon: "../../assets/icon/information.svg",
      tab: "about"
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private navCtrl: NavController,
    private nativePageTransitions: NativePageTransitions
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  slideApp() {
    let options: NativeTransitionOptions = {
      direction: "up",
      duration: 500,
      slowdownfactor: 3,
      slidePixels: 20,
      iosdelay: 100,
      androiddelay: 150,
      fixedPixelsTop: 0,
      fixedPixelsBottom: 60
    };
    this.nativePageTransitions.slide(options).catch(err => {
      console.log(err);
    });
  }

  openPage(page: any) {
    let options: NativeTransitionOptions = {
      direction: "left",
      duration: 400,
      slowdownfactor: -1,
      // slidePixels: 20,
      iosdelay: 100,
      androiddelay: 100,
      // fixedPixelsTop: 0,
      // fixedPixelsBottom: 60
    };
    this.nativePageTransitions.slide(options);
    this.navCtrl.navigateRoot(page);
  }
}
