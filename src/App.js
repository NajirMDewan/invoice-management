import React from 'react';
import TabsLayout from './components/TabsLayout';
import Invoices from './components/Invoices';

import Customers from './components/Customers';
import Products from './components/Products';

function App() {
  return (
    <div>
      <h1>Invoice Management</h1>
      <TabsLayout>
        <Invoices />
        <Products />
        <Customers />
      </TabsLayout>x
    </div>
  );
}

export default App;
