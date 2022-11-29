import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/service/storage/storage.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Yotei } from 'src/app/interface/yotei';
import { MatDialog } from '@angular/material/dialog';
import { AlertDialogComponent } from 'src/app/component/parts/alert-dialog/alert-dialog.component';

@Component({
  selector: 'app-pick-up',
  templateUrl: './pick-up.component.html',
  styleUrls: ['./pick-up.component.css']
})
export class PickUpComponent implements OnInit {

  public pickBudgeNumber: number;
  public yotei: Yotei[];

  constructor(
    private dialog: MatDialog,
    private storageService: StorageService,
    private snackBar: MatSnackBar,
  ) {
    this.yotei = []
   }

  ngOnInit(): void {
    this.yotei = this.storageService.getLocalData();
  }

  /**
   * データを削除
   */
  public deleteAllData() {
    const dialogRef = this.dialog.open(AlertDialogComponent, {
      width: '400px',
      height: '250px',
      data: {
        title: 'Pickデータの削除',
        message: 'Pickしたデータを全て削除してもよろしいでしょうか？'
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      // ダイアログでキャンセル押下時、削除処理は実行しない
      if (!result) return;

      // ダイアログで削除する押下時、以下の処理を実行する
      this.storageService.deleteAllData();

      // pickした予定データを全て空にする
      this.yotei = [];

      // スナックバー表示
      this.snackBar.open("全て削除しました", "OK", {
        duration: 3000,
        verticalPosition: 'top', // 'top' | 'bottom'
        horizontalPosition: 'center', //'start' | 'center' | 'end' | 'left' | 'right'
        panelClass: 'pick-snackbar',
      });
    });
  }

  /**
   * 特定のデータを削除
   */
  public deleteYoteiData(yotei: Yotei) {
    this.storageService.deleteYoteiData(yotei);

    this.yotei = this.yotei.filter((y: Yotei) => {
      return y.id !== yotei.id;
    });

    // スナックバー表示
    this.snackBar.open(`${yotei.name}を削除しました`, "OK", {
      duration: 3000,
      verticalPosition: 'top', // 'top' | 'bottom'
      horizontalPosition: 'center', //'start' | 'center' | 'end' | 'left' | 'right'
      panelClass: 'pick-snackbar',
    });
  }
}
