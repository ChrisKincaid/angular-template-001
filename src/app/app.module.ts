import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Component001Component } from './component001/component001.component';
import { Component002Component } from './component002/component002.component';
import { Component003Component } from './component003/component003.component';
import { Component004Component } from './component004/component004.component';
import { Component005Component } from './component005/component005.component';
import { Component006Component } from './component006/component006.component';

@NgModule({
  declarations: [
    AppComponent,
    Component001Component,
    Component002Component,
    Component003Component,
    Component004Component,
    Component005Component,
    Component006Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
