import { Component, OnInit } from '@angular/core';
import {AuthencicationService} from '../../service/auth/authencication.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
idUser: number;
  constructor(private authService: AuthencicationService) {
    this.idUser = authService.currentUserValue.id;
  }

  ngOnInit() {
  }

}
