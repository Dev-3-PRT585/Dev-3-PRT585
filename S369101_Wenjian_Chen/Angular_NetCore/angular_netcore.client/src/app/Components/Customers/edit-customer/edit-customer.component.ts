import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomersService } from '../../../services/customers.service';
import { Customer } from '../../../models/customer.model';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrl: './edit-customer.component.css'
})
export class EditCustomerComponent {

  customerdetails: Customer = {
    id: '',
    name: '',
    email: '',
    phone: 0,
    level: 0,
    note: ''
  }
  constructor(private route: ActivatedRoute, private customerService: CustomersService, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap
      .subscribe({
        next: (params) => {
          const id = params.get('id')

          if (id) {
            this.customerService.getCustomer(id)
              .subscribe({
                next: (response) => {
                  this.customerdetails = response
                }
              })
          }
        }
      })
  }

  updateCustomer() {
    this.customerService.updateCustomer(this.customerdetails.id, this.customerdetails)
      .subscribe({
        next: (response) => {
          this.router.navigate(['customers']);
        }
      });
  }

  deleteCustomer(id: string) {
    this.customerService.deleteCustomer(id)
      .subscribe({
        next: (response) => {
          this.router.navigate(['customers']);
        }
      });
  }
}
