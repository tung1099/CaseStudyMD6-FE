import { Component, OnInit } from '@angular/core';
import {AuthencicationService} from '../../service/auth/authencication.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  id: number;
  constructor(private authenticationService: AuthencicationService) {
    this.id = this.authenticationService.currentUserValue.id;
  }

  ngOnInit() {
  }

}
