import { Component, OnInit } from '@angular/core';
import { user } from '../../../assets/profiles/profiles';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public userInfo: any;

  constructor() { }

  ngOnInit() {
    this.userInfo = user['gk'];
  }
}
