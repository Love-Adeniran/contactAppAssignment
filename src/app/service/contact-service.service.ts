import { HttpClient } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';
import { Contact } from '../interfaces/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactServiceService {
    private contactList: Contact[]= [];
    contactsLocal :any=[];

    constructor() { }
    addContact(eachContact:Contact){
        if (localStorage.getItem('localContacts') === null) {
            this.contactList.push(eachContact);
            localStorage.setItem('localContacts', JSON.stringify(this.contactList));
        }else{
            // alert("hello")
            this.contactsLocal = localStorage.getItem('localContacts');
            this.contactList = JSON.parse(this.contactsLocal);
            console.log(eachContact)
            this.contactList.push(eachContact);
            localStorage.setItem('localContacts', JSON.stringify(this.contactList));
            
        }
    }
    getContact(){
        // return (this.contactList)
        let localcontact:any = localStorage.getItem('localContacts');
        this.contactList = JSON.parse(localcontact);
        console.log(this.contactList);
    }

}
