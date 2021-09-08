import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {
  durationInSeconds = 5;
  constructor(private _snackBar: MatSnackBar) {}

  openSnackBar( message ) {
    this._snackBar.open(message , null, {
      duration: this.durationInSeconds * 1000,
    });
  }

  
  openSnackBarFail( error) {
    
    
    const desc = " حصل خطأ ما يرجى المحاولة مرة أخرى "
    this._snackBar.open(   desc,null, {
      duration: this.durationInSeconds * 1000,
      verticalPosition : 'top',
      horizontalPosition : 'center'
    });
  }

}
