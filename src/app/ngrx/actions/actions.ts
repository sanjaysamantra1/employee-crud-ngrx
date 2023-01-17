// Action Creators
export function AddEmployee(emp: any) {
  return {
    type: 'ADD_EMPLOYEE',
    payload: emp,
  };
}
export function DeleteEmployee(id: number) {
  return {
    type: 'DELETE_EMPLOYEE',
    payload: {id},
  };
}
