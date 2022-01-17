import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ProductComponent} from './product/product.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CategoryComponent} from './category/category.component';
import {CaluComponent} from './calu/calu.component';
import {ColorComponent} from './color/color.component';
import {Color2Component} from './color2/color2.component';
import {ArticleComponent} from './article/article.component';
import {LikeComponent} from './like/like.component';
import {BirthdayComponent} from './birthday/birthday.component';
import {NotfoundComponent} from './notfound/notfound.component';
import {CommonService} from "./service/common.service";
import {TimelinesComponent} from "./timelines/timelines.component";
import { NameCardComponent } from './name-card/name-card.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { EmployeeComponent } from './employee/employee.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CategoryComponent,
    CaluComponent,
    ColorComponent,
    Color2Component,
    ArticleComponent,
    LikeComponent,
    BirthdayComponent,
    NotfoundComponent,
    TimelinesComponent,
    NameCardComponent,
    ProgressBarComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule {

}

export interface Product {
  name: string
}

export interface Category {
  name: string,
  age: number
  team: [string, string, string, string]
  team2: [Team2, Team3]
}

export interface Team2 {
  sas: string,
  gign: string,
  fbi: string,
}

export interface Team3 {
  cia: string,
  policezei: string,
  swat: string,
}
