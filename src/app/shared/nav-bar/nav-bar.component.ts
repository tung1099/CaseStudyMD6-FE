import { Component, OnInit } from '@angular/core';
import {AuthencicationService} from '../../service/auth/authencication.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  id: number = 0;
  constructor(private authenticationService: AuthencicationService) {
  }

  ngOnInit() {
    if (this.authenticationService.currentUserValue != null) {
      this.id = this.authenticationService.currentUserValue.id;
    }
  }

}
