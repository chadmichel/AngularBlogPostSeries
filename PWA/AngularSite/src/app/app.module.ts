import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// add router
import { RouterModule, Routes } from '@angular/router'; 

// add http
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HttpCacher } from './interceptors/HttpCacher';

// add routes
const appRoutes: Routes = [
  { path: 'contactlist', component: ContactListComponent },
  { path: 'contactdetail/:id', component: ContactDetailComponent },
  { path: '**', redirectTo: 'contactlist' }
];

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // add RouterModule to imports
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true, useHash: true } 
    ),
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpCacher, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
