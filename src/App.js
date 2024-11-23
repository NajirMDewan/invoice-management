import React from 'react';
import TabsLayout from './components/TabsLayout';
import Invoices from './components/Invoices';

import Customers from './components/Customers';
import Products from './components/Products';
// import Dashboard from './components/Dashboard';

function App() {
  return (
    <div>
      <h1>Invoice Management</h1>
      <TabsLayout>
        {/* <Dashboard /> */}
        <Invoices />
        <Products />
        <Customers />
      </TabsLayout>x
    </div>
  );
}

export default App;
