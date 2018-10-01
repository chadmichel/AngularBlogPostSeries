import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactsService } from '../contacts.service';
import { Contact } from '../dto/Contact';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {

  id: number = 0;
  first: string = "";
  last: string = "";
  twitter: string = "";

  constructor(private route: ActivatedRoute, private contactService: ContactsService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      var id = params["id"];
      this.contactService.find(id).then(contact => {

        this.id = contact.contact.id;
        this.first = contact.contact.first;
        this.last = contact.contact.last;
        this.twitter = contact.contact.twitter;
      });
    });
  }

  save() {
    var contact = {
      id: this.id,
      first: this.first,
      last: this.last,
      twitter: this.twitter
    };
    this.contactService.save(contact);
  }
}
