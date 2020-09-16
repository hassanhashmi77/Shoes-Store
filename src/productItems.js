import React from 'react';
import { useParams } from 'react-router-dom';
import shoes from './shoes.json';

function ProductList() {

    const { id } = useParams();
    const shoe = shoes[id];
    if (!shoe) {
        return <h1>Product Not Found</h1>

    }
    return (
        <div className="center" >
            <h1>{shoe.name}</h1>
            <img src={shoe.img} alt="description" hight="500px" width="500px" />

        </div >
    );
}

export default ProductList;