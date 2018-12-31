import { Component, OnInit } from '@angular/core';
import { AmplifyService } from 'aws-amplify-angular';

@Component({
  selector: 'app-verify-user',
  templateUrl: './verify-user.component.html',
  styleUrls: ['./verify-user.component.scss']
})
export class VerifyUserComponent implements OnInit {

  user: string;
  code: string;

  constructor(private amp: AmplifyService) { }

  ngOnInit() {
  }

  verify() {
    alert(this.user + this.code);
    
    this.amp.auth().confirmSignUp(this.user, this.code)
    .then(() => {
      alert("confirmed!");
    });    
  }

}
