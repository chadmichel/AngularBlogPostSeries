import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// add router
import { RouterModule, Routes } from '@angular/router'; 

import { AppComponent } from './app.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { EventListComponent } from './event-list/event-list.component';
import { EventDetailComponent } from './event-detail/event-detail.component';

// add routes
const appRoutes: Routes = [
  { path: 'contactlist', component: ContactListComponent },
  { path: 'contactdetail/:id', component: ContactDetailComponent },
  { path: 'eventlist', component: EventListComponent },
  { path: 'eventdetail', component: EventListComponent },
  { path: '**', redirectTo: 'contactlist' }
];

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactDetailComponent,
    EventListComponent,
    EventDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // add RouterModule to imports
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } 
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
