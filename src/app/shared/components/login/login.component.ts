import {
  trigger,
  transition,
  style,
  animate,
  state,
} from '@angular/animations';
import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { globalShareBaseOrigin } from 'src/app/app.component';
import { AuthService } from 'src/app/providers/auth.service';

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
  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit() {}

  //Login Form Validation
  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  signIn() {
    console.log('Form valid:', this.loginForm.valid);
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched()
    }else{

    }
    this.router.navigate(['/dashboard']);
    let data = {
      email: 'jisha@gmail.com',
      password: 'jisha',
    };

    // this.authService.userLogIn(data).subscribe({
    //   next: (res) => {
    //     console.log(res);
    //   },
    //   error: (err) => {
    //     throw err;
    //   },
    // });

  }
}
