import {
  trigger,
  transition,
  style,
  animate,
  state,
} from '@angular/animations';
import { Component, EventEmitter, Output } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { globalShareBaseOrigin } from 'src/app/app.component';
import { StorageService } from '../../services/storage/storage-service';
import { DataSharingService } from '../../services/data-sharing/data-sharing.service';
import { AuthService } from 'src/app/providers/auth/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [
    trigger('topToBottomAnimation', [
      state(
        'void',
        style({
          transform: 'translateY(-100%)',
          opacity: 0,
        })
      ),
      state(
        '*',
        style({
          transform: 'translateY(0)',
          opacity: 1,
        })
      ),
      transition('void => *', [animate('0.2s ease-in')]),
    ]),
  ],
})
export class LoginComponent {
  loadingSpinner: boolean = false;
  constructor(
    private router: Router,
    private authService: AuthService,
    private _storageService: StorageService
  ) {}

  ngOnInit() {}

  //Login Form Validation
  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  signInResponseMsg!: string;
  showSignInResMsg: boolean = false;
  signIn() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
    } else {
      this.loadingSpinner = true;
      let data = {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password,
      };

      this.authService.userLogIn(data).subscribe({
        next: (res) => {
          this.loadingSpinner = false;
          if (res.token) {
            this._storageService.setItem('user_id', res.userId);
            this._storageService.setItem('user_name', res.userName);
            this._storageService.setItem('role_id', res.roleId);
            this._storageService.setItem('role_name', res.roleName);
            this._storageService.setItem('token', res.token);
            this.router.navigate(['kmr/dashboard']);
          } else {
            this.loadingSpinner = false;
            this.showSignInResMsg = true;
            this.signInResponseMsg = res.message;
            this._storageService.clear();
          }
        },
        error: (err) => {
          this.loadingSpinner = false;
          this.showSignInResMsg = true;
          this.signInResponseMsg = err.error.message;
          this._storageService.clear();
          throw err;
        },
      });
    }
  }
}
