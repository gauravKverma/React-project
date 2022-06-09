import React, { useContext, useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { CategoryContext } from '../contexts/CategoryContext';

const Product = () => {
    const [product, setProduct] = useState([])
    const {id} = useParams();
    const {category} = useContext(CategoryContext);
    console.log(product)

    useEffect(() => {
        if(id){
            const product = async () => {
            let res = await fetch(`http://localhost:8080/men/${id}`);
            let data=await res.json();
            console.log(res)
            setProduct(data);
            }
            product();
        }
    },[])
  return (
    <div>
        {/* {product.price} */}
    </div>
  )
}

export default Product