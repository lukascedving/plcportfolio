import { Component } from '@angular/core';

import { headerComponent } from './header/app.headerComponent';
import { navComponent } from './nav/app.navComponent';
import { contentAreaComponent } from './contentArea/app.contentAreaComponent';
import { footerComponent } from './footer/app.footerComponent';
import { aboutComponent } from './about/app.aboutComponent';
import { projectComponent } from './project/app.projectComponent';
import { skillsComponent } from './skills/app.skillsComponent';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
