import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from "@angular/material/toolbar";
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { NavComponent } from './myComponents/nav/nav.component';
import { NotfoundComponent } from './myComponents/notfound/notfound.component';
import { LoadUserComponent } from './myComponents/load-user/load-user.component';
import { AddUpdateUserComponent } from './myComponents/add-update-user/add-update-user.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    NotfoundComponent,
    LoadUserComponent,
    AddUpdateUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
