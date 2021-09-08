import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AuthService } from 'app/services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  searchOpened = false;
  
  userType: Observable<any>;
  constructor(private authservice: AuthService

  ) {


  }

  ngOnInit(): void {

    this.userType = this.authservice.userData$;
    // this.authservice.user.subscribe(user => {

    //   if (user) {
    //     this.isUser = true
    //     console.log(user);



    //   }
    //   else {
    //     this.isUser = false

    //   }
    // })

  }


  SignOut() {
    this.authservice.SignOut();
  }

}
