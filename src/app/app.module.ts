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
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';

// Swiper
import { SwiperModule } from 'swiper/angular';

// Component
import { SwiperComponent } from './component/parts/swiper/swiper.component';
import { PickButtonComponent } from './component/parts/button/pick-button/pick-button.component';
import { HeaderComponent } from './component/parts/header/header.component';
import { SideBarComponent } from './component/parts/side-bar/side-bar.component';
import { FooterComponent } from './component/parts/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    SwiperComponent,
    PickButtonComponent,
    HeaderComponent,
    SideBarComponent,
    FooterComponent,
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
    MatSidenavModule,
    MatListModule,
    MatFormFieldModule,
    SwiperModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
