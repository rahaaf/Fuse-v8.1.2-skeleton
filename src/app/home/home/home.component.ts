import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { IProduct } from "app/models/IProduct";
import { ProductsService } from "app/prudects/products.service";
import { HomeService } from "./home.service";
 
@Component({
    selector: "app-home",
    templateUrl:"./home.component.html",
    styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
    items = ["3", "2", "3"];
   

    vegtables: IProduct[] = [];
    frutis: IProduct[] = [];
    Leaves: IProduct[] = [];
 
    email = new FormControl("", [Validators.required, Validators.email]);

    constructor(private _service: HomeService , private cdr : ChangeDetectorRef) {}
    ngOnInit(): void {
      
        this._service.getAllVegtables().then((res: IProduct[]) => {
          this.vegtables = res;
          setTimeout(() => {
            this.cdr.detectChanges();
              
          }, 1000);
            
            
        })
        this._service.getAllFrutis().then((res: IProduct[]) => {
          this.frutis = res;
          setTimeout(() => {
            this.cdr.detectChanges();
              
          }, 1000);
           
            
        })

        this._service.getAllLeaves().then((res: IProduct[]) => {
          this.Leaves = res;
          setTimeout(() => {
            this.cdr.detectChanges();
              
          }, 1000);
 
            
        })

      }    ////email in html
    getErrorMessage() {
        if (this.email.hasError("required")) {
            return "You must enter a value";
        }

        return this.email.hasError("email") ? "Not a valid email" : "";
    }
}
