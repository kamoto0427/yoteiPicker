import { Component, OnInit } from '@angular/core';
import YoteiJson from 'src/assets/mock/yotei.json';
import { Yotei } from 'src/app/interface/yotei';
import { StorageService } from 'src/app/service/storage/storage.service';

@Component({
  selector: 'app-yotei-list',
  templateUrl: './yotei-list.component.html',
  styleUrls: ['./yotei-list.component.css']
})
export class YoteiListComponent implements OnInit {

  public yotei: Yotei[];
  public pickIds: Array<number>;

  public isLoading: boolean = false;

  constructor(
    private storageService: StorageService,
  ) {
    this.yotei = [];
    this.pickIds = [];
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

      // Pickしたデータを取得して、配列に追加
      const pickYoteiArray = this.storageService.getLocalData();
      pickYoteiArray.forEach((pickYotei: Yotei) => {
        this.pickIds.push(pickYotei.id);
      });

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
