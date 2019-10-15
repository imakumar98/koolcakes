import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public loggedIn;

  constructor(public authService: AuthService) {
    console.log(this.authService.loggedIn);
  }

  ngOnInit() {
  }
  onLogout() {
    this.authService.logout();
  }
  logIn() {
    this.loggedIn = this.authService.loggedIn;
    console.log(this.authService.loggedIn);
  }

}
