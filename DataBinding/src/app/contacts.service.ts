import { Injectable } from '@angular/core';
import { Contact } from './Contact';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  contacts: Contact[] = 
  [
    {
      id: 1,
      first: "Chad",
      last: "Michel",
      twitter: "@chadmichel"
    },
    {
      id: 2,
      first: "Bill",
      last: "Udell",
      twitter: "@billudell"
    },
    {
      id: 3,
      first: "Russ",
      last: "Guill",
      twitter: "@russwritesne"
    },
  ];

  constructor() { }

  all(): Promise<Contact[]> {
    
    var promise = new Promise<Contact[]>((resolve, reject) => {
      setTimeout(() => {
        resolve(this.contacts);
      });
    });
    return promise;

  }

  find(id: number): Promise<Contact> {
        
    var promise = new Promise<Contact>((resolve, reject) => {
      setTimeout(() => {
        this.contacts.forEach(element => {
          if (element.id == id)
          resolve(element);
        }); 
      });
    });
    return promise;

  }

  save(contact: Contact) {
    this.contacts.forEach(c => {
      if (c.id == contact.id) {
        c.first = contact.first;
        c.last = contact.last;
        c.twitter = contact.twitter;
      }
    });
  }

}
