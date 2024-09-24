import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../../../services/customers.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrl: './add-customer.component.css'
})
export class AddCustomerComponent implements OnInit {

  addCustomerRequest = {
    id: '',
    name: '',
    email: '',
    phone: 0,
    level: 0,
    note: ''
  };
  constructor(private customerService: CustomersService, private router: Router) { }

  ngOnInit(): void {
      
  }

  addCustomer(form: NgForm) {  // Updated to receive form as a parameter
    // Check if the form is invalid
    if (form.invalid) {
      return; // Stop the submission
    }

    // If valid, proceed with adding the customer
    this.customerService.addCustomer(this.addCustomerRequest)
      .subscribe({
        next: (customer) => {
          this.router.navigate(['customers']); // Navigate after successful submission
        },
        error: (err) => {
          console.error('Error adding customer:', err); // Handle error
        }
      });
  }

}
