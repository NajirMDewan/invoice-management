import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import { addInvoice, updateInvoice, deleteInvoice } from '../redux/invoicesSlice';
import Dashboard from './Dashboard';

const Invoices = () => {
  const invoices = useSelector((state) => state.invoices);
  const products = useSelector((state) => state.products);
  const customers = useSelector((state) => state.customers);
  const dispatch = useDispatch();

  // for selected product and customer
  const [selectedCustomerId, setSelectedCustomerId] = useState("");
  const [selectedProductId, setSelectedProductId] = useState("");
  const [qty, setQty] = useState(1); // default quantity is set to 1

  const handleAddInvoice = () => {
    // find selected product and customer from their Ids
    const selectedProduct = products.find((product) => product.id === Number(selectedProductId));
    const selectedCustomer = customers.find((customer) => customer.id === Number(selectedCustomerId));


    // checks if both a product and a customer are selected
    if (!selectedProduct || !selectedCustomer) {
      alert("Please select a product and a customer...");
      return;
    }

    // creats a new invoice
    const newInvoice = {
      id: invoices.length + 1,
      serial: `${invoices.length + 1}`,
      productId: selectedProduct.id,
      customerId: selectedCustomer.id,
      customerName: selectedCustomer.name,
      productName: selectedProduct.name,
      qty: qty,
      tax: selectedProduct.tax,
      total: qty * (selectedProduct.unitPrice + selectedProduct.tax),
      date: new Date().toLocaleDateString(),
    };
    dispatch(addInvoice(newInvoice));

    // rsets the form fields
    setSelectedProductId('');
    setSelectedCustomerId('');
    setQty(1); // default quantity is set to 1
  };

  // handles deletion of an Invoice
  const handleDeleteInvoice = (id) => {
    if (window.confirm('Are you sure want to dete this invoice>')) {
      dispatch(deleteInvoice(id));
    }
  };

  // Handles edit for an existing Invoice
  const handleEditInvoice = (invoice) => {
    const updatedInvoice = {
      ...invoice,
      qty: invoice.qty + 1,  // Increase q by 1 for now
      total: (invoice.qty + 1) * (invoice.unitPrice + invoice.tax),

    };
    dispatch(updateInvoice(updatedInvoice));
  }

  return (
    <div>
      <div>
        <Dashboard />
      </div>
      <div>
        <h3><u>Create Invoice</u></h3>
        <div>
          <label>
            Product:
            <select
              value={selectedProductId}
              onChange={(e) => setSelectedProductId(e.target.value)}
            >
              <option value="">Select Product</option>
              {products.map((product) =>(
                <option key={product.id} value={product.id}>
                  {product.name} - ${product.unitPrice}
                </option>
              ))}
            </select>
          </label>

          <label>
            Customer:
            <select
              value={selectedCustomerId}
              onChange={(e) => setSelectedCustomerId(e.target.value)}
            >
              <option value="">Select Customer</option>
              {customers.map((customer) =>(
                <option key={customer.id} value={customer.id}>
                  {customer.name} - ${customer.phone}
                </option>
              ))}
            </select>
          </label>

          <label>
            Quantity:
            <input
              typeof='number'
              value={qty}
              min = "1"
              onChange={(e) => setQty(Number(e.target.value))}
            />
          </label>
        <button onClick={handleAddInvoice}>Add Invoice</button>
        </div>

        <h3>Invoices</h3>
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
              <TableCell>Actions</TableCell>
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
                <TableCell>
                  <button onClick={() => handleEditInvoice(invoice)}>Edit</button>
                  <button onClick={() => handleDeleteInvoice(invoice.id)}>Delete</button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Invoices;
