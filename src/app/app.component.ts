import { Component } from '@angular/core';
import {AuthencicationService} from './service/auth/authencication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'casestudy-md6';
  constructor(private authenticationService: AuthencicationService,
              private router: Router) {

  }
}
