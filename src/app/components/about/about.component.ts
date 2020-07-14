import { Component, OnInit } from '@angular/core';
import { user } from '../../../assets/profiles/profiles';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  public userInfo: any;

  constructor() { }

  ngOnInit() {
    this.userInfo = user[environment.profile];
  }

  downloadCV(){
    window.open(this.userInfo.about.resumeLink, '_blank')
  }

}
