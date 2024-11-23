import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import { addProduct, updateProduct } from '../redux/productsSlice';
import { syncProduct } from '../redux/invoicesSlice'

const Products = () => {
  const products = useSelector((state) => state.products); // Access products state
  const dispatch = useDispatch();

  // local state for new product details
  const [productName, setProductName] = useState("");
  const [unitPrice, setUnitPrice] = useState("");
  const [tax, setTax] = useState("");
  const [qty, setQty] = useState("");

  const handleAddProduct = () => {
    //Validating name and unitprice are valid
    if (!productName || unitPrice <= 0 || tax <0) {
      alert("Enter a valid product details.");
      return;
    }

    const newProduct = {
      id: products.length + 1,
      name: productName,
      qty: qty,  //default quantity
      unitPrice: parseFloat(unitPrice),
      tax: parseFloat(tax),
      priceWithTax: (parseFloat(unitPrice) + parseFloat(tax)) * parseFloat(qty),
    };
    dispatch(addProduct(newProduct)); // Add product to Redux store

    // Reset input fields
    setProductName("");
    setUnitPrice("");
    setTax("");
  };

  const handleUpdateProduct = (updatedProduct) => {
    dispatch(updateProduct(updatedProduct));
    dispatch(syncProduct(updatedProduct)); //Sync product with invoices
  };

  return (
    <div>
      <h3>Add Product</h3>
      <input
        type='text'
        placeholder='Product Name'
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
      />
      <input
        type='number'
        placeholder='Quantity'
        value={qty}
        onChange={(e) => setQty(e.target.value)}
      />
      <input
        type='number'
        placeholder='Unit Price'
        value={unitPrice}
        onChange={(e) => setUnitPrice(e.target.value)}
      />
      <input
        type='number'
        placeholder='Tax'
        value={tax}
        onChange={(e) => setTax(e.target.value)}
      />
      <button onClick={handleAddProduct}>Add Product</button>

      <h3>Products List</h3>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Quantity</TableCell>
            <TableCell>Unit Price</TableCell>
            <TableCell>Tax</TableCell>
            <TableCell>Price with Tax</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.id}>
              <TableCell>{product.name}</TableCell>
              <TableCell>{product.qty}</TableCell>
              <TableCell>{product.unitPrice}</TableCell>
              <TableCell>{product.tax}</TableCell>
              <TableCell>{product.priceWithTax}</TableCell>
              <TableCell>
                <button
                  onClick={() =>
                    handleUpdateProduct({
                      ...product,
                      name: `Updated ${product.name}`, // Example update
                    })
                  }
                >
                  Edit
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Products;
