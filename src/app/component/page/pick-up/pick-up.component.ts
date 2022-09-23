import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/service/storage/storage.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-pick-up',
  templateUrl: './pick-up.component.html',
  styleUrls: ['./pick-up.component.css']
})
export class PickUpComponent implements OnInit {

  public yotei: any;

  constructor(
    private storageService: StorageService,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
    this.yotei = this.storageService.getLocalData();
  }

  /**
   * データを削除
   */
  public deleteAllData() {
    this.storageService.deleteAllData();

    // スナックバー表示
    this.snackBar.open("全て削除しました", "OK", {
      duration: 3000,
      verticalPosition: 'top', // 'top' | 'bottom'
      horizontalPosition: 'center', //'start' | 'center' | 'end' | 'left' | 'right'
      panelClass: 'pick-snackbar',
    });

    // pickした予定データを全て空にする
    this.yotei = [];
  }

  /**
   * 特定のデータを削除
   */
  public deleteYoteiData() {
    this.storageService.deleteYoteiData();
  }

}
