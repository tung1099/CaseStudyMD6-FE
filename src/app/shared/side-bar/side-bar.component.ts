import { Component, OnInit } from '@angular/core';
import {AuthencicationService} from '../../service/auth/authencication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
idUser: number;
  constructor(private authService: AuthencicationService,
              private router: Router) {}
  ngOnInit() {
    this.idUser = this.authService.currentUserValue.id;
  }
  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
