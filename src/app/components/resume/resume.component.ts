import { Component, OnInit } from '@angular/core';
import { user } from '../../../assets/profiles/profiles';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

 
  public userInfo: any;

  constructor() { }

  ngOnInit() {
    this.userInfo = user[environment.profile];
  }
}
