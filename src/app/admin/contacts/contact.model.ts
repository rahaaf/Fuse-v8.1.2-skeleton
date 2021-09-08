import { FuseUtils } from '@fuse/utils';
import { IUserType } from 'app/models/IUserType';

export class IUser
{
    uid: string;
    lastName: string;
    photoURL: string;
    emailVerified: boolean;
    company: string;
    // jobTitle: string;
    email: string;
    phoneNumber: string;
    displayName:string;
    address: string;
    birthday: string;
    type: IUserType;

    /**
     * Constructor
     *
     * @param contact
     */
    constructor(contact)
    {
        {
            this.uid = contact.uid || FuseUtils.generateGUID();
            this.displayName = contact.displayName || '';
            this.lastName = contact.lastName || '';
            this.photoURL = contact.photoURL || '';
            // this.nickname = contact.nickname || '';
            this.company = contact.company || '';
            // this.jobTitle = contact.jobTitle || '';
            this.email = contact.email || '';
            this.phoneNumber = contact.phoneNumber || '';
            this.address = contact.address || '';
            this.birthday = contact.birthday || '';
            this.type = contact.type || {} ;
        }
    }
}
