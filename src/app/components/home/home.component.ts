import { Component, OnInit } from '@angular/core';
import { user } from '../../../assets/profiles/profiles';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public userInfo: any;

  constructor() { }

  ngOnInit() {
    this.userInfo = user[environment.profile];
  }
}
