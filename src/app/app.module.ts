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
import { MatSnackBarModule } from '@angular/material/snack-bar';

// Swiper
import { SwiperModule } from 'swiper/angular';

// Component
import { SwiperComponent } from 'src/app/component/parts/swiper/swiper.component';
import { PickButtonComponent } from 'src/app/component/parts/button/pick-button/pick-button.component';
import { HeaderComponent } from 'src/app/component/parts/header/header.component';
import { SideBarComponent } from 'src/app/component/parts/side-bar/side-bar.component';
import { FooterComponent } from 'src/app/component/parts/footer/footer.component';
import { InfoComponent } from 'src/app/component/page/info/info.component';
import { TopComponent } from 'src/app/component/page/top/top.component';
import { PickUpComponent } from 'src/app/component/page/pick-up/pick-up.component';
import { YoteiListComponent } from 'src/app/component/page/yotei-list/yotei-list.component';
import { CategoryListComponent } from 'src/app/component/page/category-list/category-list.component';
import { CategoryCardComponent } from './component/parts/category-card/category-card.component';

@NgModule({
  declarations: [
    AppComponent,
    SwiperComponent,
    PickButtonComponent,
    HeaderComponent,
    SideBarComponent,
    FooterComponent,
    InfoComponent,
    TopComponent,
    PickUpComponent,
    YoteiListComponent,
    CategoryListComponent,
    CategoryCardComponent,
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
    MatSnackBarModule,
    SwiperModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
