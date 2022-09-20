import { Component, Input, OnInit } from '@angular/core';
import { StorageService } from 'src/app/service/storage/storage.service';

@Component({
  selector: 'app-pick-button',
  templateUrl: './pick-button.component.html',
  styleUrls: ['./pick-button.component.css']
})
export class PickButtonComponent implements OnInit {
  @Input() yotei: any;

  constructor(
    private storageService: StorageService
  ) { }

  ngOnInit(): void {
  }

  /**
   * ローカルストレージにデータを保存する
   */
  public storeYoteiData(yotei: any) {
    const id = yotei.id;
    this.storageService.storeLocal(id, yotei);
  }

}
