import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import { addCustomer } from '../redux/customersSlice';

const Customers = () => {
  const customers = useSelector((state) => state.customers); // Access customers state
  const dispatch = useDispatch();

  const handleAddCustomer = () => {
    const newCustomer = {
      id: customers.length + 1,
      name: `Customer ${customers.length + 1}`,
      phone: `123456789${customers.length}`,
      totalPurchase: 1000,
    };
    dispatch(addCustomer(newCustomer)); // Add customer to Redux store
  };

  return (
    <div>
      <button onClick={handleAddCustomer}>Add Customer</button>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Total Purchase</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {customers.map((customer) => (
            <TableRow key={customer.id}>
              <TableCell>{customer.name}</TableCell>
              <TableCell>{customer.phone}</TableCell>
              <TableCell>{customer.totalPurchase}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Customers;
