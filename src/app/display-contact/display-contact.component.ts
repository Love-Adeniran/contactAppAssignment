import { Component } from '@angular/core';
import { ContactServiceService } from '../service/contact-service.service';
// import { Contact } from '../interfaces/contact';

@Component({
  selector: 'app-display-contact',
  templateUrl: './display-contact.component.html',
  styleUrls: ['./display-contact.component.css']
})
export class DisplayContactComponent {
    constructor(public allContact: ContactServiceService){}
    displaycontact: any= []
    ngOnInit(){
        this.allContact.getContact()
    }
}
