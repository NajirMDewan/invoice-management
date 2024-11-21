import React, { useState } from 'react';
import { Tabs, Tab, Box } from '@mui/material';

const TabsLayout = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Box>
      <Tabs value={activeTab} onChange={handleTabChange}>
        <Tab label="Invoices" />
        <Tab label="Products" />
        <Tab label="Customers" />
      </Tabs>
      <Box mt={2}>{children[activeTab]}</Box>
    </Box>
  );
};

export default TabsLayout;
