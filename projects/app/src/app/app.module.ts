import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { ButtonModule } from "../../../lib/src/lib/button/button.module";

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    MainLayoutComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ButtonModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
