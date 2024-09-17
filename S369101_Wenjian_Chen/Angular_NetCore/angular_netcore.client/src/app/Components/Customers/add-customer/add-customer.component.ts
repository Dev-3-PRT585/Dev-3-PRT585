import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../../../services/customers.service';
import { Router } from '@angular/router';

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
    salary: 0,
    department: ''
  };
  constructor(private customerService: CustomersService, private router: Router) { }

  ngOnInit(): void {
      
  }

  addCustomer() {
    this.customerService.addCustomer(this.addCustomerRequest)
      .subscribe({
        next: (customer) => {
          this.router.navigate(['customers']);
        }
      });
  }

}
