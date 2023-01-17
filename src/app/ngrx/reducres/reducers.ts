const initialEmployees = [
  { id: 101, name: 'Sachin', sal: 5000 },
  { id: 102, name: 'Ranjan', sal: 6000 },
];

function EmployeesReducer(state = initialEmployees, action: any) {
  switch (action.type) {
    case 'ADD_EMPLOYEE':
      return [...state, action.payload];
    case 'DELETE_EMPLOYEE':
      return state.filter((emp) => {
        return emp.id !== action.payload.id;
      });
    default:
      return state;
  }
}

export const rootReducer = {
  EmployeesReducer,
};
