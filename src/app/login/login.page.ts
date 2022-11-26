import { Component, OnInit } from '@angular/core';
import { FormControl,  AbstractControl,FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../shared/authentication-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  constructor(
    public authService: AuthenticationService,
    public router: Router,
    public formBuilder: FormBuilder
  ) { }

  form: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  })
  submitted = false;
  isUserLoggedIn: boolean = false;
  ngOnInit() :void {
    this.form = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40),
          ],
        ],
      })
  }
  onSubmit( email:any , password:any) {
    this.submitted = true;

    if (this.form.invalid) {
      return false;
    } else {
      this.authService.login(email, password)
      .subscribe(data => {
        console.log("Is Login Success: " + data);
        if (data) {
          this.router.navigate(['/registration']);
        } else {
          this.router.navigate(['/login'])
          console.log(JSON.stringify(this.form.value, null, 2));
        }
      });
      return true;
    }

   
  }
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
}
