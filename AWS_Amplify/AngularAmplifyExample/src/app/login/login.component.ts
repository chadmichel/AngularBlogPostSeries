import { Component, OnInit } from '@angular/core';
import { AmplifyService } from 'aws-amplify-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;

  constructor(private amp: AmplifyService) { 

  }

  ngOnInit() {
    
  }

  login() {
    alert(this.email + this.password);
    
    this.amp.auth().signIn(this.email, this.password).then(() => {
      alert("sign in successful");
    });
  }

}
