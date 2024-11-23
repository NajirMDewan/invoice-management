import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import { addCustomer, updateCustomer } from '../redux/customersSlice';
import { syncCustomer } from '../redux/invoicesSlice';

const Customers = () => {
  const customers = useSelector((state) => state.customers); // Access customers state
  const dispatch = useDispatch();

  // local state for new customer details.
  const [customerName, setCustomerName] = useState("");
  const [phone, setPhone] = useState("");

  const handleAddCustomer = () => {
    // Validating customer name and phone.
    if (!customerName || phone.length !== 10) {
      alert("Invalid name or phone number...");
      return;
    }

    const newCustomer = {
      id: customers.length + 1,
      name: customerName,
      phone: phone,
    };

    dispatch(addCustomer(newCustomer)); // Add customer to Redux store

    // reset input fields
    setCustomerName("");
    setPhone("");
  };

  // const handleUpdateCustomer = (updatedCustomer) => {
  //   dispatch(updateCustomer(updatedCustomer));
  //   dispatch(syncCustomer(updatedCustomer));  // Sync customer with invoices
  // };

  return (
    <div>
      <h3>Add Customer</h3>
      <input
        type='text'
        placeholder='Customer Name'
        value={customerName}
        onChange={(e) => setCustomerName(e.target.value)}
      />
      <input
        type='number'
        placeholder='Phone Number'
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <button onClick={handleAddCustomer}>Add Customer</button>

      <h3>Products List</h3>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Phone</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {customers.map((customer) => (
            <TableRow key={customer.id}>
              <TableCell>{customer.name}</TableCell>
              <TableCell>{customer.phone}</TableCell>
              {/* <TableCell>
                <button 
                  onClick={() => 
                    handleUpdateCustomer({
                      ...customer,
                      name: `Updated ${customer.name}`,    // example update
                    })
                  }
                  >
                    Edit
                  </button>
              </TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Customers;
