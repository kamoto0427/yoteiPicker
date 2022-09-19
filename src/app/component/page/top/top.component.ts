import { Component, OnInit } from '@angular/core';
import YoteiJson from 'src/assets/mock/yotei.json';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {
  title = 'yoteiPicker';

  public yotei: any;

  constructor() { }

  ngOnInit(): void {
    this.init();
  }

    /**
   * 初期化処理
   */
     public init() {
      // mockからデータを取得
      const yoteiData = this.getYoteiData();
      // ランダムな数字をもとに重複しないように配列を作成する
      this.notDuplicationRandomArray(yoteiData);
    }

  /**
   * mockからデータを取得
   */
  public getYoteiData() {
    // サーバーからデータを取得
    // this.yoteiChoiceService.getYoteiChoice().subscribe((yoteiChoice: YoteiChoice) => {
    //   this.yotei;
    // });
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
  public notDuplicationRandomArray([...yoteiData]: any) {
    for (let i = yoteiData.length - 1; i >= 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [yoteiData[i], yoteiData[j]] = [yoteiData[j], yoteiData[i]];
    }
    this.yotei = yoteiData;
    return yoteiData;
  }

}
