import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/service/storage/storage.service';

@Component({
  selector: 'app-pick-up',
  templateUrl: './pick-up.component.html',
  styleUrls: ['./pick-up.component.css']
})
export class PickUpComponent implements OnInit {

  public yotei: any;

  constructor(
    private storageService: StorageService
  ) { }

  ngOnInit(): void {
    this.yotei = this.storageService.getLocalData();
  }

  /**
   * データを削除
   */
  public deleteData() {
    this.storageService.deleteAllData();
  }

}
