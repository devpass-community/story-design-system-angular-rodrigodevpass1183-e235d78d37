import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ImageComponent } from '../app/image/image.component';
import { TitleComponent } from '../app/title/title.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageComponent,
    TitleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }