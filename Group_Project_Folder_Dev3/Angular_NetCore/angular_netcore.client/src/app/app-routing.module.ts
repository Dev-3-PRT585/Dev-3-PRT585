import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { inventoryListComponent } from './components/inventory/inventory-list/inventory-list.component';
import { CustomersListComponent } from './components/customers/customers-list/customers-list.component';
import { AddCustomerComponent } from './components/Customers/add-customer/add-customer.component';
import { EditCustomerComponent } from './components/Customers/edit-customer/edit-customer.component';

const routes: Routes = [
  {
    path: '',
    component: CustomersListComponent
  },
  {
    path: 'inventory',
    component: inventoryListComponent
  },
  {
    path: 'customers',
    component: CustomersListComponent
  },
  {
    path: 'customers/add',
    component: AddCustomerComponent
  },
  {
    path: 'customers/edit/:id',
    component: EditCustomerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
