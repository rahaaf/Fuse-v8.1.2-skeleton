import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from "@angular/router";
import { AngularFireDatabase } from 'angularfire2/database';
import { IUser } from 'app/models/IUser';
import { IUserType } from 'app/models/IUserType';
import * as firebase from 'firebase';
import { auth } from 'firebase';
import { BehaviorSubject, Observable } from 'rxjs';
import { AlertsService } from './alerts.service';



@Injectable({
  providedIn: 'root'
})

export class AuthService {

  user: Observable<firebase.User>
  onUserChange: BehaviorSubject<firebase.User>

  userData: any = {};
  userData$: Observable<any>; // Save logged in user data
  onUserDataChange: BehaviorSubject<any>


  constructor(
    public afs: AngularFirestore,   // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,
    public ngZone: NgZone, // NgZone service to remove outside scope warning,
    private alertService: AlertsService,

  ) {

    /* Saving user data in localstorage when 
    logged in and setting up null when logged out */

    this.onUserDataChange = new BehaviorSubject({});
    this.userData$ = this.onUserDataChange.asObservable();

    this.user = this.afAuth.user;
    this.user.subscribe(user => {
      console.log(user);
      if (user) {
        localStorage.setItem('user', JSON.stringify(user));
        JSON.parse(localStorage.getItem('user'));
        this.getUserData(user.uid)
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    })
  }


  // Sign in with email/password
  SignIn(email, password) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.ngZone.run(() => {
          this.router.navigate(['/home']);
        });
        this.alertService.openSnackBar('تم تسجيل الدخول  بنجاح')


        // this.SetUserData(result.user);
      }).catch((error) => {
        this.alertService.openSnackBarFail(error)

      })
  }

  // Sign up with email/password
  SignUp(user) {

    return this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password)
      .then((result) => {
        /* Call the SendVerificaitonMail() function when new user sign 
        up and returns promise */
        // this.SendVerificationMail();
        var resUser = result.user;
        resUser = { ...resUser, phoneNumber: user.phone, displayName: user.name, }
        this.SetUserData(resUser).then(() => {
          this.alertService.openSnackBar('تم تسجيل الدخول  بنجاح')
          this.ngZone.run(() => {
            this.router.navigate(['/home']);
          });
        })

      }).catch((error) => {
        this.alertService.openSnackBarFail(error)
      })
  }

  // Send email verfificaiton when new user sign up
  SendVerificationMail() {
    return this.afAuth.auth.currentUser.sendEmailVerification()
      .then(() => {
        this.router.navigate(['verify-email-address']);
      })
  }

  // Reset Forggot password
  ForgotPassword(passwordResetEmail) {
    return this.afAuth.auth.sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        window.alert('Password reset email sent, check your inbox.');
      }).catch((error) => {
        window.alert(error)
      })
  }

  // Returns true when user is looged in and email is verified
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return (user !== null && user.emailVerified !== false) ? true : false;
  }

  // Sign in with Google
  GoogleAuth() {
    return this.AuthLogin(new auth.GoogleAuthProvider());
  }

  // Auth logic to run auth providers
  AuthLogin(provider) {
    return this.afAuth.auth.signInWithPopup(provider)
      .then((result) => {
        this.ngZone.run(() => {
          this.router.navigate(['/home']);
        })
        this.SetUserData(result.user);
      }).catch((error) => {
        window.alert(error)
      })
  }

  /* Setting up user data when sign in with username/password, 
  sign up with username/password and sign in with social auth  
  provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
  SetUserData(user) {


    const userRef: AngularFirestoreDocument<any> = this.afs.collection('users/').doc(user.uid);
    const userData$: IUser = {
      uid: user.uid,
      phoneNumber: user.phoneNumber,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified,
      address: user?.address || '',
      birthday: user?.birthday || '',

      company: user?.company || '',
      lastName: user?.lastName || '',
      type: user?.type || IUserType.Usernormal,
    }


    return userRef.set(userData$, {
      merge: true
    })
  }

  userLoggedIn() {
    return this.afAuth.authState;
  }

  // Sign out 
  SignOut() {
    return this.afAuth.auth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['/auth/login']);
    })
  }

  getUserData(id) {
    console.log(id);

    return this.afs.collection('/users').doc(id).valueChanges().subscribe(data => {
      console.log(data);
      
      this.onUserDataChange.next(data);
      this.userData = data;
    })
  }

}