import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AppJsonApiService {

  // Remplace type any with JSON type
  static loadData(name: string): any {
    return {};
  }

  getDatas(name: string): Observable<any> {
    const datas = AppJsonApiService.loadData(name);
    return of(datas);
  }

  getSingleData(name: string, id: number): Observable<any> {
    let datas = AppJsonApiService.loadData(name);
    datas = datas.find((data: { id: number; }) => data.id === id );
    return of(datas);
  }
}
