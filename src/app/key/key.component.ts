import { Component, Output, EventEmitter } from '@angular/core';
import { ContactServiceService } from '../service/contact-service.service';
import { Router } from '@angular/router';
// import { Contact } from '../interfaces/contact';

interface Contact {
    firstname:string,
    lastname:string,
    phonenumber:string,
    email:string
}
@Component({
  selector: 'app-key',
  templateUrl: './key.component.html',
  styleUrls: ['./key.component.css']
})
export class KeyComponent {
    constructor(public allContact:ContactServiceService, public router: Router) { }
    pNumber: string = ''
    phonenumber:string ='';
    firstname:string ='';
    lastname:string ='';
    email:string = '';
    contacts:Contact[] =[];

    
   addContact(){
    let contact = {
        firstname:this.firstname,
        lastname: this.lastname,
        phonenumber:this.phonenumber,
        email:this.email
    }
    console.log(contact);
    this.allContact.addContact(contact);
    this.router.navigate(['/contacts'])
   }

    num(digit:any){
        this.pNumber += digit;
    }
    clear(){
        this.pNumber = this.phonenumber.slice(0,-1);
    }
}
