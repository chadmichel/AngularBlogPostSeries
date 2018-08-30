import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactsService } from '../contacts.service';
import { Contact } from '../Contact';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contacts: Contact[] = [];

  constructor(private router: Router, private contactsService: ContactsService) { }

  ngOnInit() {
    this.contactsService.all().then((all) => {
      this.contacts = [];
      all.forEach(e => {
        this.contacts.push(e);
      });
    });
  }

  openClient(id: number) {
    this.router.navigate(["contactdetail", id.toString()]);
  }
}
