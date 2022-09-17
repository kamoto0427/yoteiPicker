import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Angular Material
import { MatIconModule } from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatToolbarModule } from '@angular/material/toolbar';

// Swiper
import { SwiperModule } from 'swiper/angular';

// Component
import { SwiperComponent } from './component/parts/swiper/swiper.component';
import { PickButtonComponent } from './component/parts/button/pick-button/pick-button.component';
import { HeaderComponent } from './component/parts/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    SwiperComponent,
    PickButtonComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatSliderModule,
    MatButtonModule,
    MatChipsModule,
    MatToolbarModule,
    SwiperModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
