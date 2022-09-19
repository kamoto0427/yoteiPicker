import { Component, OnInit } from '@angular/core';
import YoteiJson from 'src/assets/mock/yotei.json';

@Component({
  selector: 'app-yotei-list',
  templateUrl: './yotei-list.component.html',
  styleUrls: ['./yotei-list.component.css']
})
export class YoteiListComponent implements OnInit {

  public yotei: any;

  constructor() { }

  ngOnInit(): void {
    this.yotei = this.getYoteiData();
  }

  /**
   * mockからデータを取得
   */
  public getYoteiData() {
    return YoteiJson.yotei;
  }

}
