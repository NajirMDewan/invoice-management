import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import { addProduct, updateProduct } from '../redux/productsSlice';
import { syncProduct } from '../redux/invoicesSlice'

const Products = () => {
  const products = useSelector((state) => state.products); // Access products state
  const dispatch = useDispatch();

  const handleAddProduct = () => {
    const newProduct = {
      id: products.length + 1,
      name: `Product ${products.length + 1}`,
      qty: 100,
      unitPrice: 50,
      tax: 5,
      priceWithTax: 55,
    };
    dispatch(addProduct(newProduct)); // Add product to Redux store
  };

  const handleUpdateProduct = (updatedProduct) => {
    dispatch(updateProduct(updatedProduct));
    dispatch(syncProduct(updatedProduct)); //Sync product with invoices
  };

  return (
    <div>
      <button onClick={handleAddProduct}>Add Product</button>
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
