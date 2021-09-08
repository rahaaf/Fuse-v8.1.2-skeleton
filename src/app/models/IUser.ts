import { IUserType } from "./IUserType";

export interface Roles{

    Admin?:boolean;
    Delevery?:boolean;
    Ownerstor?:boolean;
    Usernormal?:boolean;

}
export interface IUser {
    uid: string;
    email: string;
    lastName: string;
    phoneNumber: string;
    displayName: string;
    photoURL: string;
    emailVerified: boolean;
    address?: string;
    birthday?: string;
    company?: string;
    // jobTitle: string;
    type : IUserType;
}