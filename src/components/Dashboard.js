import React from 'react';
import { useSelector } from 'react-redux';

const Dashboard = () => {
  const invoices = useSelector((state) => state.invoices);
  const products = useSelector((state) => state.products);
  const customers = useSelector((state) => state.customers);

  const totalRevenue = invoices.reduce((sum, invoice) => sum + invoice.total, 0);
  const totalInvoices = invoices.length;
  const totalProducts = products.length;
  const totalCustomers = customers.length;

  return (
    <div>
      <h3><u><i>Dashboard</i></u></h3>
      <p>Total Invoices: {totalInvoices}</p>
      <p>Total Revenue: ${totalRevenue.toFixed(2)}</p>
      <p>Total Products: {totalProducts}</p>
      <p>Total Customers: {totalCustomers}</p>
    </div>
  );
};

export default Dashboard;
