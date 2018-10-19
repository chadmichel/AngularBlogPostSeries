import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ContactsService } from './contacts.service';

describe('ContactsService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule, HttpClientModule ],
      providers: [ContactsService]
    });
  });

  // Test the find method on the Contacts Service
  it('should return a contact', inject([HttpTestingController, ContactsService], 
    (httpMock: HttpTestingController , service: ContactsService) => {
    
    // Call find
    service.find(1).then(x => {
      expect(x.success).toBe(true);
    });

    // We will expect a call at the following URL
    var req = httpMock.expectOne("http://localhost:5000/api/ContactsFind");

    // Return the data for the http call
    req.flush({
      success: true,
      contact: {
        id: 1,
        first: "first",
        last: "last",
        twitter: "twitter"
      }
    });

  }));
});
