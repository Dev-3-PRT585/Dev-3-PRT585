import { Component, OnInit } from '@angular/core';
import { Customer } from '../../../models/customer.model';
import { CustomersService } from '../../../services/customers.service';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrl: './customers-list.component.css'
})
export class CustomersListComponent implements OnInit {

  customers: Customer[] = [
  ];
  constructor(private customersService: CustomersService) { }

  ngOnInit(): void {
    this.customersService.getAllCustomers()
      .subscribe({
        next: (customers) => {
          this.customers = customers;
        },
        error: (response) => {
          console.log(response);
        }
      })
  }
}
