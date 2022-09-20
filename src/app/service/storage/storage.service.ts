import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  /**
   * ローカルストレージに保存する
   */
  public storeLocal(id: number, value: any) {
    return localStorage.setItem('yotei' + id, JSON.stringify(value));
  }

  /**
   * ローカルストレージから予定pickデータを取得する
   */
  public getLocalData() {
    let yoteiArray = [];
    for(let i = 0; i < localStorage.length; i++){
      const key = localStorage.key(i);
      let kamoto = JSON.parse(localStorage.getItem('' + key)!);
      yoteiArray.push(kamoto);
    }
    return yoteiArray;
  }

  /**
   * ローカルストレージのデータを削除する
   */
  public deleteLocalData() {
    return localStorage.removeItem('yotei');
  }

  /**
   * ローカルストレージの全データを削除する
   */
  public deleteAllData() {
    return localStorage.clear();
  }
}
