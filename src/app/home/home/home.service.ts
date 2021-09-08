import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { IProduct } from 'app/models/IProduct';
 
@Injectable({
  providedIn: 'root'
})
export class HomeService implements Resolve<any>  {

  vegtables: IProduct[] = [];
  frutis : IProduct[] = [];
  leaves : IProduct[] = [];
  constructor(private _httpclient: HttpClient) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<IProduct[]> {
    return this.getAllVegtables() || this.getAllFrutis() || this.getAllLeaves();
  }
  
  // return 'asdsad'

  getAllVegtables(): Promise<IProduct[]> {
    return new Promise((resolve, reject) => {
      this._httpclient.get<IProduct[]>('api/vegtable').subscribe((res: IProduct[]) => {
        this.vegtables = res;
        resolve(res);
      }, reject)
    })

  } 
  getAllFrutis(): Promise<IProduct[]> {
    return new Promise((resolve, reject) => {
      this._httpclient.get<IProduct[]>('api/frutis').subscribe((res: IProduct[]) => {
        this.frutis = res;
        resolve(res);
      }, reject)
    })

  } 
  getAllLeaves(): Promise<IProduct[]> {
    return new Promise((resolve, reject) => {
      this._httpclient.get<IProduct[]>('api/leaves').subscribe((res: IProduct[]) => {
        this.leaves = res;
        resolve(res);
      }, reject)
    })
  }
 }
