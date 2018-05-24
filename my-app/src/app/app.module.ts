import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { headerComponent } from './header/app.headerComponent';
import { navComponent } from './nav/app.navComponent';
import { contentAreaComponent } from './contentArea/app.contentAreaComponent';
import { footerComponent } from './footer/app.footerComponent';
import { aboutComponent } from './about/app.aboutComponent';
import { projectComponent } from './project/app.projectComponent';
import { skillsComponent } from './skills/app.skillsComponent';


@NgModule({
  declarations: [
    AppComponent, 
    headerComponent,
    navComponent,
    contentAreaComponent,
    footerComponent,
    aboutComponent,
    projectComponent,
    skillsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'about',
        component: aboutComponent
      },
      {
        path: '',
        component: contentAreaComponent
      },
      {
        path: 'project',
        component: projectComponent 
      },
      {
        path: 'skills',
        component: skillsComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
