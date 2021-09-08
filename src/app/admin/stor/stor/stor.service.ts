import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class StorService implements Resolve<any>
{
    routeParams: any;
    stor: any;
    onStorChanged: BehaviorSubject<any>;

    /**
     * Constructor
     *
     * @param {HttpClient} _httpClient
     */
    constructor(
        private _httpClient: HttpClient
    )
    {
        // Set the defaults
        this.onStorChanged = new BehaviorSubject({});
    }

    /**
     * Resolver
     *
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {Observable<any> | Promise<any> | any}
     */
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any
    {
        this.routeParams = route.params;

        return new Promise((resolve, reject) => {

            Promise.all([
                this.getStor()
            ]).then(
                () => {
                    resolve(true);
                },
                reject
            );
        });
    }

    /**
     * Get product
     *
     * @returns {Promise<any>}
     */
    getStor(): Promise<any>
    {
        return new Promise((resolve, reject) => {
            if ( this.routeParams.id === 'new' )
            {
                this.onStorChanged.next(false);
                resolve(false);
            }
            else
            {
                this._httpClient.get('api/stores/' + this.routeParams.id)
                    .subscribe((response: any) => {
                        this.stor = response;
                        this.onStorChanged.next(this.stor);
                        resolve(response);
                    }, reject);
            }
        });
    }

    /**
     * Save stor
     *
     * @param stor
     * @returns {Promise<any>}
     */
    saveStor(stor): Promise<any>
    {
        return new Promise((resolve, reject) => {
            this._httpClient.post('api/stores/' + stor.id, stor)
                .subscribe((response: any) => {
                    resolve(response);
                }, reject);
        });
    }

    /**
     * Add stor
     *
     * @param stor
     * @returns {Promise<any>}
     */
    addStor(stor): Promise<any>
    {
        return new Promise((resolve, reject) => {
            this._httpClient.post('api/stores/', stor)
                .subscribe((response: any) => {
                    resolve(response);
                }, reject);
        });
    }
}
