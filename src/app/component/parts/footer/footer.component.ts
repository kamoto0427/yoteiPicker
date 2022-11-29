import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/service/storage/storage.service';
import { Yotei } from 'src/app/interface/yotei';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  @Input() pickBudgeNumber: number;

  public topFlg: boolean = false;
  public yoteiList: boolean = false;
  public categoryListFlg: boolean = false;
  public pickUpFlg: boolean = false;
  public requestFlg: boolean = false;

  public yotei: Yotei[];

  constructor(
    private router: Router,
    private storageService: StorageService,
  ) { }

  ngOnInit(): void {
    this.iconFieldUnderLine();
  }

  ngDoCheck() {
    this.feathYoteiPickLenght();
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

  goPickUp() {
    this.router.navigate(['pickUp']);
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

    if (currentUrl === '/pickUp') {
      this.pickUpFlg  = true;
    }

    if (currentUrl === '/request') {
      this.requestFlg = true;
    }
  }

  /**
   * pickデータのlength数を取得する
   */
  public feathYoteiPickLenght() {
    this.yotei = this.storageService.getLocalData();
    const length = this.yotei.length;
    this.pickBudgeNumber = length;
  }

}
