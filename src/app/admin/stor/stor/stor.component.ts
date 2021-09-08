import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { fuseAnimations } from '@fuse/animations';
import { FuseUtils } from '@fuse/utils';

import { Stor } from 'app/admin/stor/stor/stor.model';
import { StorService } from './stor.service';

interface Type {
    value: string;
    viewValue: string;
  }
  
@Component({
    selector     : 'app-stor',
    templateUrl  : './stor.component.html',
    styleUrls    : ['./stor.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})

export class StorComponent implements OnInit, OnDestroy
{
    stor: Stor;
    pageType: string;
    storForm: FormGroup;

    types: Type[] = [
        {value: '0', viewValue: 'kg'},
        {value: '1', viewValue: 'box'},
        {value: '2', viewValue: 'pice'}
      ];

    // Private
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {StorService} _storService
     * @param {FormBuilder} _formBuilder
     * @param {Location} _location
     * @param {MatSnackBar} _matSnackBar
     */
    constructor(
        private _storService: StorService,
        private _formBuilder: FormBuilder,
        private _location: Location,
        private _matSnackBar: MatSnackBar
    )
    {
        // Set the default
        this.stor = new Stor();

        // Set the private defaults
        this._unsubscribeAll = new Subject();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Subscribe to update stor on changes
        this._storService.onStorChanged
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(stor => {

                if ( stor )
                {
                    this.stor = new Stor(stor);
                    this.pageType = 'edit';
                }
                else
                {
                    this.pageType = 'new';
                    this.stor = new Stor();
                }

                this.storForm = this.createStorForm();
            });
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Create stor form
     *
     * @returns {FormGroup}
     */
    createStorForm(): FormGroup
    {
        return this._formBuilder.group({
            id              : [this.stor.id],
            nameOwner       : [this.stor.nameOwner],
            handle          : [this.stor.handle],
            description     : [this.stor.description],
            address         : [this.stor.address],
            tags            : [this.stor.tags],
            nameproduct     : [this.stor.nameproduct],
            image           : [this.stor.image],
            quantity        : [this.stor.quantity],
            price           : [this.stor.price],
            weight          : [this.stor.weight],
            active          : [this.stor.active]
        });
    }

    /**
     * Save stor
     */
    saveStor(): void
    {
        const data = this.storForm.getRawValue();
        data.handle = FuseUtils.handleize(data.nameOwner);

        this._storService.saveStor(data)
            .then(() => {

                // Trigger the subscription with new data
                this._storService.onStorChanged.next(data);

                // Show the success message
                this._matSnackBar.open('stor saved', 'OK', {
                    verticalPosition: 'top',
                    duration        : 2000
                });
            });
    }

    /**
     * Add stor
     */
    addStor(): void
    {
        const data = this.storForm.getRawValue();
        data.handle = FuseUtils.handleize(data.nameOwner);

        this._storService.addStor(data)
            .then(() => {

                // Trigger the subscription with new data
                this._storService.onStorChanged.next(data);

                // Show the success message
                this._matSnackBar.open('stor added', 'OK', {
                    verticalPosition: 'top',
                    duration        : 2000
                });

                // Change the location with new one
                this._location.go('admin/stor/stors' + this.stor.id + '/' + this.stor.handle);
            });
    }
}
