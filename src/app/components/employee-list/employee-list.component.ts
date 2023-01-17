import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { DeleteEmployee } from 'src/app/ngrx/actions/actions';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {
  employees: any;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.subscribe((state: any) => {
      this.employees = state.EmployeesReducer;
    });
  }

  deleteEmp(id: number) {
    const actionObj = DeleteEmployee(id);
    this.store.dispatch(actionObj);
  }
}
