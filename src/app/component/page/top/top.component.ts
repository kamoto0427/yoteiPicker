import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import YoteiJson from 'src/assets/mock/yotei.json';
import { Yotei } from 'src/app/interface/yotei';
import { StorageService } from 'src/app/service/storage/storage.service';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {
  title = 'yoteiPicker';

  public yotei: Yotei[];
  public isLoading: boolean = false;
  public pickIds: Array<number>;

  constructor(
    private storageService: StorageService,
  ) {
    this.yotei   = [];
    this.pickIds = [];
  }

  ngOnInit(): void {
    this.init();
  }

  /**
   * 初期化処理
   */
  public async init() {
    try {
      await this.loading();
      // mockからデータを取得
      const yoteiData = this.getYoteiData();
      // ランダムな数字をもとに重複しないように配列を作成する
      this.notDuplicationRandomArray(yoteiData);

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
   * ランダムな数字を返す
   */
  public getRandomNumber(number: number) {
    const rand = Math.floor(Math.random() * number);
    return rand;
  }

  /**
   * ランダムに配列を並び替え、重複しないような配列を返す
   */
  public notDuplicationRandomArray([...yoteiData]: Yotei[]) {
    for (let i = yoteiData.length - 1; i >= 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [yoteiData[i], yoteiData[j]] = [yoteiData[j], yoteiData[i]];
    }
    this.yotei = yoteiData;
    return yoteiData;
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
