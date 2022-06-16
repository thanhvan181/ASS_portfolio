import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IContact } from 'src/app/Models/contact';
import { ContactService } from 'src/app/Services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contact: IContact = {
    name: "",
    email: "",
    desc: ""
  }
  ngOnInit(): void {
  
  }
  constructor(
    private ContactService: ContactService,
    private router: Router,
    private route: ActivatedRoute
  ) { }
  onSubmit() {
   
    this.ContactService.addContact(this.contact).subscribe(data => {
      setTimeout(() => {
        // redirect về product list
        this.router.navigateByUrl('/');
      }, 2000)
    });
  }
}

