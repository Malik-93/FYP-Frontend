import { combineReducers } from 'redux'

import { reducer, cartReducer, sameProductReducer }  from "./Reducers/product-reducer";
import usersReducer from './Reducers/users-reducer';

export const rootReducer = combineReducers( { reducer, cartReducer, usersReducer, sameProductReducer } )
