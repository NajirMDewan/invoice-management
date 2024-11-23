import { configureStore } from '@reduxjs/toolkit';
import invoicesReducer from './invoicesSlice';
import productsReducer from './productsSlice';
import customersReducer from './customersSlice';

const loadState = () => {
  try{
    const serializedState = localStorage.getItem('state');
    return serializedState ? JSON.parse(serializedState) : undefined;
  } catch (err) {
    return undefined;
  }
};

const saveState = (state) => {
  try{
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (err) {
    console.error("Could not save state", err);
  }
};

const store = configureStore({
  reducer: {
    invoices: invoicesReducer,
    products: productsReducer,
    customers: customersReducer,
  },
  preloadedState: loadState(),
});

store.subscribe(() => saveState(store.getState()));

export default store;
