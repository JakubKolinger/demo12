import { Component, OnInit } from '@angular/core';
import {CommonModule} from '@angular/common';
import {Contact} from '../contact.model';
import {ContactService} from '../contact.service';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
})
export class ContactsComponent {
  contacts: Contact[] = [];
  error: string | null = null;
  loading = true;

  constructor(private contactService: ContactService) {}

  ngOnInit(): void{
    this.contactService.getContacts().subscribe({
      next: (data) => {
        this.contacts = data;
        this.loading = false;
        if (data.length === 0) {
          this.error = "no contacts";
        } else {
          this.error = null;
        }
      },
      error: () => {
        this.error = "nestáhli se kontakty";
        this.loading = false;
      }
    });
  }
}
