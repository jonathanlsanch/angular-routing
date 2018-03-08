import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
  providers: [ContactService]
})
export class ContactListComponent implements OnInit {

  contacts: Array<any>;

  constructor(
    private router: Router,
    private contactService: ContactService
  ) {}

  ngOnInit() {
    this.contacts = this.contactService.getList();
  }

  viewDetails(id, param){
    this.router.navigate(['contact', id], { queryParams: { foo: param }});
  }
}