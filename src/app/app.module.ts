import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ContactService } from './services/contact.service';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';


// Routes Configuration
import { RouterModule, Routes } from "@angular/router";
import { MyHomeComponent } from './my-home/my-home.component';
import { MyAboutComponent } from './my-about/my-about.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactComponent } from './contact/contact.component';
import { ContactOverviewComponent } from './contact-overview/contact-overview.component';
import { ContactEditComponent } from './contact-edit/contact-edit.component';

const routes: Routes = [
  { path: '', component: ContactListComponent },
  { path: 'contact/:id', component: ContactComponent,
      children: [
        { path: '', component: ContactOverviewComponent },
        { path: 'edit', component: ContactEditComponent }
      ] },
  // { path: 'home', component: MyHomeComponent },
  // { path: 'about', component: MyAboutComponent }

];


@NgModule({
  declarations: [
    AppComponent,
    MyHomeComponent,
    MyAboutComponent,
    ContactListComponent,
    ContactComponent,
    ContactOverviewComponent,
    ContactEditComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes), // routes is the array defined above
    FormsModule
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
