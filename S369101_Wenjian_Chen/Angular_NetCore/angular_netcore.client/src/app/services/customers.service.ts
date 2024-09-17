import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../environment/environment";
import { Customer } from "../models/customer.model";


@Injectable({
    providedIn: 'root'
})
export class CustomersService {

    baseApiUrl: string = environment.baseApiUrl;
    constructor(private http: HttpClient) { }

    getAllCustomers(): Observable<Customer[]> {
      return this.http.get<Customer[]>(this.baseApiUrl + '/api/customers');
    }

    addCustomer(addCustomerRequest: Customer): Observable<Customer> {
      addCustomerRequest.id = '00000000-0000-0000-0000-000000000000';
      return this.http.post<Customer>(this.baseApiUrl + '/api/customers', addCustomerRequest);
    }

    getCustomer(id: string): Observable<Customer>{
      return this.http.get<Customer>(this.baseApiUrl + '/api/customers/' + id);
    }

    updateCustomer(id: string, updateCustomerRequest: Customer):
      Observable<Customer> {
      return this.http.put<Customer>(this.baseApiUrl + '/api/customers/' + id,
        updateCustomerRequest);
  }

    deleteCustomer(id: string): Observable<Customer> {
      return this.http.delete<Customer>(this.baseApiUrl + '/api/customers/' + id);
    }
}
