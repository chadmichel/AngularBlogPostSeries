import { Component, OnInit } from '@angular/core';
import { AmplifyService } from 'aws-amplify-angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user: string;
  email: string;
  password: string;

  constructor(private amp: AmplifyService) { }

  ngOnInit() {
  }

  register() {
    alert(this.email + this.password);
    
    this.amp.auth().signUp({
      username: this.user,
      password: this.password,
        attributes: {
          email: this.email
        }
    }).then(() => {
      alert("registered!");
    });
    
  }
}
