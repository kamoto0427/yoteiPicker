import { Component, OnInit } from '@angular/core';
import YoteiJson from 'src/assets/mock/yotei.json';
import { Yotei } from 'src/app/interface/yotei';

@Component({
  selector: 'app-yotei-list',
  templateUrl: './yotei-list.component.html',
  styleUrls: ['./yotei-list.component.css']
})
export class YoteiListComponent implements OnInit {

  public yotei: Yotei[];

  public isLoading: boolean = false;

  constructor() {
    this.yotei = [];
  }

  ngOnInit(): void {
    this.init();
  }

  /**
   * 初期化処理
   */
  private async init() {
    try {
      await this.loading();

      this.yotei = this.getYoteiData();

    } catch(error) {
      console.log(error);
    } finally {
      await this.finishLoading();
    }
  }

  /**
   * mockからデータを取得
   */
  public getYoteiData() {
    return YoteiJson.yotei;
  }

  /**
   * ローディング処理
   */
  private async loading() {
    return new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
  }

  /**
   * ローディング処理終了
   */
  private async finishLoading() {
    return new Promise((resolve) => {
      this.isLoading = true;
      resolve(this.isLoading);
    });
  }

}
