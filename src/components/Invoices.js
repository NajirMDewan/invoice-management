import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import { addInvoice } from '../redux/invoicesSlice';

const Invoices = () => {
  const invoices = useSelector((state) => state.invoices);
  const dispatch = useDispatch();

  const handleAddInvoice = () => {
    const newInvoice = {
      id: invoices.length + 1,
      serial: `00${invoices.length + 1}`,
      customer: 'Jane Doe',
      product: 'Tablet',
      qty: 2,
      tax: 50,
      total: 1050,
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
              <TableCell>{invoice.customer}</TableCell>
              <TableCell>{invoice.product}</TableCell>
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
