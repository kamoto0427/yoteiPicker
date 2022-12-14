import { Component,  OnInit, AfterViewInit, Input } from '@angular/core';
// import Swiper core and required components
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Virtual,
  Zoom,
  Autoplay,
  Thumbs,
  Controller,
} from 'swiper';

// install Swiper components
SwiperCore.use([
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Virtual,
  Zoom,
  Autoplay,
  Thumbs,
  Controller,
]);

SwiperCore.use([Virtual]);

@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.css']
})
export class SwiperComponent {
  @Input() yotei: any;
  @Input() pickIds: Array<number>;

  public pickButtonId: number;

  constructor() { }

  ngOnInit(): void {
  }

  clickPickButton(buttonId: number) {
    return this.pickButtonId = buttonId;
  }
}
