import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SafePipe } from './safe.pipe';
import { ResizerThreeComponent } from './resizer-three/resizer-three.component';
import { ImageZoomerComponent } from './image-zoomer/image-zoomer.component';
@NgModule({
  declarations: [
    AppComponent,
    ResizerThreeComponent,
    SafePipe,
    ImageZoomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
