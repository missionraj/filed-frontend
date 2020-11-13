import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Dto } from '../../models/dto.model';

import { PaymentService } from "../../services/payment.service";

// this function is for amount validtion that should not be zero or less than zero
function amountValidator(control: FormControl) {
  
  let amount = control.value;
  
  if (typeof amount == 'number' && amount <= 0) {
    return  { 
      amount:true
    }
  }

  return null;
}

// this is the date validator for dates that are lesser than todays date 
function dateValidator(control: FormControl) {

  let currentDateTime = new Date();
  currentDateTime.setHours(0,0,0,0);

  let controlValue = new Date(control.value);
  controlValue.setHours(0,0,0,0);

  if(controlValue < currentDateTime){
      return {validdate: true};
  }
  return null;
}

@Component({
  selector: 'app-dto-form',
  templateUrl: './dto-form.component.html',
  styleUrls: ['./dto-form.component.css']
})



export class DtoFormComponent implements OnInit {
  myForm: FormGroup;
  submitted : boolean = false;
  constructor(private fb: FormBuilder, private paymentservice : PaymentService ) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      creditCardNumber: ['', Validators.required],
      cardHolder: ['', Validators.required],
      expirationDate: ['', [Validators.required,dateValidator]],
      securityCode: [''],
      amount: ['', [Validators.required, amountValidator]]
    });

  }
  public cardDetails : Dto ;
  get f() { return this.myForm.controls; }
  

  onSubmit(form: FormGroup) {
      this.submitted = true; // set submiited to true for validation on enter

      // if the form is not valid it will not proceed further
      if (!form.valid) {
        return null;
      }
      this.cardDetails = form.value;
      
      this.paymentservice.postDetails(this.cardDetails).subscribe((res)=>{
          if (res['success']) {
              alert(res['message']);            
          } else {
            alert(res['message']);         
          }
      })
      
  }

}
