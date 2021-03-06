import { Component } from '@angular/core';
import {AuthencicationService} from './service/auth/authencication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  check = false;
  title = 'casestudy-md6';
  constructor(private authenticationService: AuthencicationService,
              private router: Router) {
  }
  ngOnInit() {
    if (this.authenticationService.currentUserValue!=null) {
      this.check = true;
    }
  }
}
