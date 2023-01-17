import { StoreModule } from '@ngrx/store';
import { rootReducer } from '../reducres/reducers';
export const myStore = StoreModule.forRoot(rootReducer);