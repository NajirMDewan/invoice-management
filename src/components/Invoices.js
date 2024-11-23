import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import { addInvoice } from '../redux/invoicesSlice';

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

  return (
    <div>
      <h3>Create Invoice</h3>
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
