import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup,FormControl, FormBuilder, Validators, AbstractControl } from "@angular/forms";
@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {
  constructor(
    public router: Router,
    public formBuilder: FormBuilder
  ) { }
  ionicForm:FormGroup = new FormGroup({
    fullname: new FormControl(''),
    email: new FormControl(''),
    dob: new FormControl(''),
    mobile :new FormControl('')
  });
  submitted = false;
  defaultDate = "2022-06-30";
  ngOnInit() {
    this.ionicForm = this.formBuilder.group({
      fullname: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      dob: '',
      mobile: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
    })
  }
  get f(): { [key: string]: AbstractControl } {
    return this.ionicForm.controls;
    
  }
  getDate(e:any) {
     let date = new Date(e.target.value).toISOString().substring(0, 10);
    let newDate =this.ionicForm.get('dob')
    
  }
  get errorControl() {
    return this.ionicForm.controls;
  }
  submitForm() {
    this.submitted = true;
    if (!this.ionicForm.valid) {
      console.log('Please provide all the required values!')
      return false;
    } else {
      console.log(this.ionicForm.value);
      this.router.navigate(['/tabs/tabs1'])
      return true;
    }
  }
}

