import { Component, OnInit } from '@angular/core';
import { user } from '../../../assets/profiles/profiles';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public userInfo: any;

  constructor() { }

  ngOnInit() {
    this.userInfo = user[environment.profile];
  }

}
