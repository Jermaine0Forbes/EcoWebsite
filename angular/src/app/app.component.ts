import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {slider} from "./animate.component";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations:[
    slider
  ],
})
export class AppComponent {
  title = 'angular';

    prepareRoute(outlet: RouterOutlet) {
      // console.log(outlet.activatedRouteData['animation'])
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
