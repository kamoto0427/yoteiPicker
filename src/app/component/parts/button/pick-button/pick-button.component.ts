import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { StorageService } from 'src/app/service/storage/storage.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Yotei } from 'src/app/interface/yotei';

@Component({
  selector: 'app-pick-button',
  templateUrl: './pick-button.component.html',
  styleUrls: ['./pick-button.component.css']
})
export class PickButtonComponent implements OnInit {
  @Input() yotei: Yotei;
  @Output() pickButtonId = new EventEmitter<number>();

  constructor(
    private storageService: StorageService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
  }

  /**
   * ローカルストレージにデータを保存する
   */
  public storeYoteiData(yotei: Yotei, pickButtonId: number) {
    const id = yotei.id;
    this.storageService.storeLocal(id, yotei);

    // スナックバー表示
    this.snackBar.open("Pickしました", "OK", {
      duration: 3000,
      verticalPosition: 'top', // 'top' | 'bottom'
      horizontalPosition: 'center', //'start' | 'center' | 'end' | 'left' | 'right'
      panelClass: 'pick-snackbar',
    });

    this.pickButtonId.emit(pickButtonId);
  }

}
