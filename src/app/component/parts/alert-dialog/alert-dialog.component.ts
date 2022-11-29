import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-alert-dialog',
  templateUrl: './alert-dialog.component.html',
  styleUrls: ['./alert-dialog.component.css']
})
export class AlertDialogComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {title: string, message: string},
    private dialog: MatDialogRef<AlertDialogComponent>,
  ) { }

  ngOnInit(): void {
  }

  /**
   * 削除するクリック時
   */
  public onClickOk() {
    this.dialog.close(true);
  }

  /**
   * キャンセルクリック時
   */
  public onClickClose() {
    this.dialog.close(false);
  }

}
