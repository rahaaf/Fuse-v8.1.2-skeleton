import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashborad',
  templateUrl: './dashborad.component.html',
  styleUrls: ['./dashborad.component.scss']
})
export class DashboradComponent implements OnInit {
 
  showFiller = false;

  user :Observable<any>;  
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
      this.user =  this.authService.userData$;
  }
}
