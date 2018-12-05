import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Contact } from './dto/Contact';
import { ContactListResponse } from './dto/contactlistresponse';
import { ContactFindResponse } from './dto/contactfindresponse';
import { ContactSaveResponse } from './dto/contactsaveresponse';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  ServicesUrl = "http://localhost:5001/api/";

  constructor(private http: HttpClient) { }
  
  public all(): Promise<ContactListResponse> {
    var items = [];

    var url = this.ServicesUrl + "ContactsAll";

    return this.http.post<ContactListResponse>(url, "", {
        headers: { "Authorization": "Bearer put_token_here" 
    }}).toPromise();
}

public search(query: string): Promise<ContactListResponse> {

    var url = this.ServicesUrl + "ContactsSearch";

    return this.http.post<ContactListResponse>(url, 
        { query: query } ,
        {
        headers: { "Authorization": "Bearer put_token_here" 
        }}).toPromise();
}

public find(id: number): Promise<ContactFindResponse> {

    var url = this.ServicesUrl + "ContactsFind";

    return this.http.post<ContactFindResponse>(url, 
        { id: id } ,
        {
        headers: { "Authorization": "Bearer put_token_here" 
        }}).toPromise();
}

public save(contact: Contact): Promise<ContactSaveResponse> {

  var url = this.ServicesUrl + "ContactsSave";

  return this.http.post<ContactSaveResponse>(url, 
      { Contact: contact } ,
      {
      headers: { "Authorization": "Bearer put_token_here" 
      }}).toPromise();
    }
}
