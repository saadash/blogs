import { Component } from "@angular/core";

import { Platform } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

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
      url: "/information",
      icon: "../../assets/icon/information.svg",
      tab: "information"
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
