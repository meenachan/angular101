import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventThumbnailComponent } from './events/event-thumbnail-component';
import { EventListComponent } from './events/events-list-component';

@NgModule({
  declarations: [
    AppComponent,
   EventListComponent,
   EventThumbnailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
