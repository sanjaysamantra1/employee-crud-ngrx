import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AddEmployee } from 'src/app/ngrx/actions/actions';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
})
export class AddEmployeeComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit(): void {}

  addEmp(id: any, name: any, sal: any) {
    const actionObj = AddEmployee({ id, name, sal });
    this.store.dispatch(actionObj);
  }
}
