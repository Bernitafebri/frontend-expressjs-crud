import { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() =>{
        getProducts();
    }, []);

    const getProducts = async () => {
        const response = await axios.get('http://localhost:5000/products');
        setProducts(response.data);
    }


  return (
    <div>
        <Link to="/add" className="button is-primary">Add Product</Link>
       <table className='table is-striped is-fullwidth'>
         <thead>
            <tr>
                <th>No</th>
                <th>Title</th>
                <th>Price</th>
                <th>Action</th>
            </tr>
         </thead>
         <tbody>
            { products.map((product, index) => (
                <tr key={ product.id }>
                    <td>{ index + 1 }</td>
                    <td>{ product.title }</td>
                    <td>{ product.price }</td>
                    <td>
                        <button className='button is-small is-info'>Edit</button>
                        <button className='button is-small is-danger'>Delete</button>
                    </td>
                </tr>
            )) }
            
         </tbody>
       </table>
       

    </div>
  )
} 

export default ProductList