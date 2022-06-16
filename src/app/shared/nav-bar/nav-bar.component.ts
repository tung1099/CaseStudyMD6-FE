import { Component, OnInit } from '@angular/core';
import {AuthencicationService} from '../../service/auth/authencication.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  id = 0;
  constructor(private authenticationService: AuthencicationService) {
  }

  ngOnInit() {
    if (this.authenticationService.currentUserValue != null) {
      this.id = this.authenticationService.currentUserValue.id;
    }
  }

}
