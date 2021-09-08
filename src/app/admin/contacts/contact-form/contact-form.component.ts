import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IUser } from '../contact.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from 'app/services/auth.service';
import { IUserType } from 'app/models/IUserType';

 
@Component({
    selector     : 'contacts-contact-form-dialog',
    templateUrl  : './contact-form.component.html',
    styleUrls    : ['./contact-form.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class ContactsContactFormDialogComponent
{
    action: string;
    contact: IUser;
    contactForm: FormGroup;
    dialogTitle: string;

    /**
     * Constructor
     *
     * @param {MatDialogRef<ContactsContactFormDialogComponent>} matDialogRef
     * @param _data
     * @param {FormBuilder} _formBuilder
     */
    constructor(
        public matDialogRef: MatDialogRef<ContactsContactFormDialogComponent>,
        @Inject(MAT_DIALOG_DATA) private _data: any,
        private _formBuilder: FormBuilder,
      private  _angularFireStor: AngularFirestore,
      private as : AuthService,
      
    )
    {
        // Set the defaults
        this.action = _data.action;

        if ( this.action === 'edit' )
        {   
            this.dialogTitle = 'Edit Contact';
            this.contact = _data.contact;
            console.log( this.contact);

        }

        else
        {
            this.dialogTitle = 'New Contact';
            this.contact = new IUser({});
        }

        this.contactForm = this.createContactForm();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Create contact form
     *
     * @returns {FormGroup}
     */
    createContactForm(): FormGroup
    {
        return this._formBuilder.group({
            uid      : [this.contact.uid],
            displayName: [this.contact.displayName],
            lastName: [this.contact.lastName],
            photoURL : [this.contact.photoURL],
            type : [this.contact.type],
            company : [this.contact.company],
            // jobTitle: [this.contact.jobTitle],
            emailVerified : [this.contact.emailVerified],
            email   : [this.contact.email],
            phoneNumber: [this.contact.phoneNumber],
            address : [this.contact.address],
            birthday: [this.contact.birthday],
        });
    }

    
    addTowUser() {
        // let Towuser: IUser = { uid: this.as.userData.uid, type:IUserType.Delevery || IUserType.Ownerstor,
        //     email: this.as.userData.email,phoneNumber :this.as.userData.phoneNumber, displayName:this.as.userData.displayName,
        //     photoURL:this.as.userData.photoURL,emailVerified:this.as.userData.emailVerified,
        //     address :this.as.userData.address,birthday:this.as.userData.birthday,
        //     jobTitle: this.as.userData.jobTitle,company:this.as.userData.company,lastName:this.as.userData.lastName
        //   }
        const Towuser = this.contactForm.value; 
        console.log(Towuser);
    
         return new Promise((resolve, reject) => {
             this._angularFireStor.collection('users/').add(Towuser).then(data => {
                 console.log(data);
                 resolve(true);
             }, err=>
              {console.log(err);}
             ),reject()
    
                 }).catch(e => {
                    console.log(e);
                });
    
      }
}
