import { createSlice } from '@reduxjs/toolkit';

const invoicesSlice = createSlice({
  name: 'invoices',
  initialState: [],
  reducers: {
    addInvoice: (state, action) => {
      state.push(action.payload);
    },
    updateInvoice: (state, action) => {
      const index = state.findIndex((invoice) => invoice.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
    deleteInvoice: (state, action) => {
      return state.filter((invoice) => invoice.id !== action.payload);
    },

    // Upadte product details in all invoices
    syncProduct: (state, action) => {
      const { id, name, unitPrice, tax } = action.payload;
      state.forEach((invoice) => {
        if (invoice.productId === id) {
          invoice.productName = name;
          invoice.unitPrice = unitPrice;
          invoice.tax = tax;
          invoice.total = invoice.qty*(unitPrice + tax);
        }
      });
    },

    // Update customer details in all invoices
    syncCustomer: (state, action) => {
      const { id, name } = action.payload;
      state.forEach((invoice) => {
        if (invoice.customerId === id) {
          invoice.customerName = name;

        }
      });
    },
  },
});

export const { addInvoice, updateInvoice, deleteInvoice, syncProduct, syncCustomer } = invoicesSlice.actions;
export default invoicesSlice.reducer;
