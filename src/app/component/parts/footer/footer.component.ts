import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public topFlg: boolean = false;
  public yoteiList: boolean = false;
  public categoryListFlg: boolean = false;
  public requestFlg: boolean = false;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.iconFieldUnderLine();
  }

  goTop() {
    this.router.navigate(['/']);
  }

  goYoteiList() {
    this.router.navigate(['yoteiList']);
  }

  goCategoryList() {
    this.router.navigate(['categoryList']);
  }

  goRequest() {
    this.router.navigate(['request']);
  }

  /**
   * アイコンフィールドに下線をつけるか判定
   */
  public iconFieldUnderLine() {
    // 現在URLを取得する
    const currentUrl = this.router.url;

    if (currentUrl === '/') {
      this.topFlg = true;
    }

    if (currentUrl === '/yoteiList') {
      this.yoteiList = true;
    }

    if (currentUrl === '/categoryList') {
      this.categoryListFlg  = true;
    }

    if (currentUrl === '/request') {
      this.requestFlg = true;
    }
  }

}
