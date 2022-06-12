import { Component, OnInit } from '@angular/core';
import {AuthencicationService} from '../../service/auth/authencication.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  id: number;
  constructor(private authenticationService: AuthencicationService) {
  }

  ngOnInit() {
    this.id = this.authenticationService.currentUserValue.id;
  }

}
