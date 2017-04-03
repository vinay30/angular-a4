import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import { AppComponent }  from './app.component';
import { FormsModule }   from '@angular/forms';
import { FeedBackComponent } from "./app.feedback.component";
import { TemperatureComponent } from "./app.temperature.component";

import { MyRemoteService } from './app.myremoteservice';
import { routing } from './app.routing';


@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule, routing],
  declarations: [ AppComponent, FeedBackComponent, TemperatureComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [ MyRemoteService ]
})
export class AppModule { }

//base paletton RGB: #552B72