import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactSlice';

export const rootReducer = combineReducers({
  contacts: contactsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
