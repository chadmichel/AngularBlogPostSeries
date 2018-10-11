// import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// import { FormsModule } from '@angular/forms';
// import { ActivatedRoute } from '@angular/router';
// import { Observable } from 'rxjs';
// import { HttpClient } from '@angular/common/http';
// import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

// import { ContactDetailComponent } from './contact-detail.component';
// import { ContactFindResponse } from '../dto/contactfindresponse';


// describe('ContactDetailComponent', () => {
//   let component: ContactDetailComponent;
//   let fixture: ComponentFixture<ContactDetailComponent>;
//   let httpClient: HttpClient;
//   let httpTestingController: HttpTestingController;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       imports: [ FormsModule, HttpClientTestingModule ],
//       declarations: [ ContactDetailComponent ],
//       providers: [
//         {
//           provide: ActivatedRoute,
//           useValue: {
//             params: Observable.create([{id: 1}]),
//           },
//         },
//       ]
//     })
//     .compileComponents();

//     httpClient = TestBed.get(HttpClient);
//     httpTestingController = TestBed.get(HttpTestingController);
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(ContactDetailComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should load a contact', () => {
    

//     var data = {
//       success: true,
//       contact: {
//         id: 1,
//         first: "first",
//         last: "last",
//         twitter: "twitter"
//       }
//     };
//     var url = "http://localhost:5000/api/ContactsFind/1";

//     var req = httpTestingController.expectOne(url);
//     req.flush(data);

//     // httpClient.get<ContactFindResponse>(url)
//     // .subscribe(data =>
//     //   // When observable resolves, result should match test data
//     //   expect(data).toEqual(data)
//     // );

//   });
// });
