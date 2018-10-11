import { TestBed, inject, getTestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ContactsService } from './contacts.service';

describe('ContactsService', () => {

  let testBid: TestBed;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let service: ContactsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule, HttpClientModule ],
      providers: [ContactsService]
    });

    testBid = getTestBed();
    service = testBid.get(ContactsService);
    httpClient = testBid.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  it('should return a contact', inject([HttpTestingController, ContactsService], 
    (httpMock: HttpTestingController , service: ContactsService) => {
    
    service.find(1).then(x => {
      expect(x.success).toBe(true);
    });

    var req = httpMock.expectOne("http://localhost:5000/api/ContactsFind");
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
