import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import { addInvoice } from '../redux/invoicesSlice';

const Invoices = () => {
  const invoices = useSelector((state) => state.invoices);
  const products = useSelector((state) => state.products);
  const customers = useSelector((state) => state.customers);
  const dispatch = useDispatch();

  const handleAddInvoice = () => {
    // ensuring there is not products and customers availabe
    if (products.length === 0 || customers.length === 0) {
      console.log("No products or customers available to create an invoce.");
      return;
    }

    // dynamically pick the first product and customer as an example
    const selectedProduct = products[0];
    const selectedCustomer = customers[0];

    const newInvoice = {
      id: invoices.length + 1,
      serial: `00${invoices.length + 1}`,
      productId: selectedProduct.id,
      customerId: selectedCustomer.id,
      customerName: selectedCustomer.name,
      productName: selectedProduct.name,
      qty: 2,
      tax: selectedProduct.tax,
      total: 2 * (selectedProduct.unitPrice + selectedProduct.tax),
      date: new Date().toLocaleDateString(),
    };
    dispatch(addInvoice(newInvoice));
  };

  return (
    <div>
      <button onClick={handleAddInvoice}>Add Invoice</button>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Serial Number</TableCell>
            <TableCell>Customer</TableCell>
            <TableCell>Product</TableCell>
            <TableCell>Quantity</TableCell>
            <TableCell>Tax</TableCell>
            <TableCell>Total</TableCell>
            <TableCell>Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.id}>
              <TableCell>{invoice.serial}</TableCell>
              <TableCell>{invoice.customerName}</TableCell>
              <TableCell>{invoice.productName}</TableCell>
              <TableCell>{invoice.qty}</TableCell>
              <TableCell>{invoice.tax}</TableCell>
              <TableCell>{invoice.total}</TableCell>
              <TableCell>{invoice.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Invoices;
