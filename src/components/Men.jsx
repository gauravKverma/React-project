import React, {useState, useEffect, useContext} from 'react'
import styles from "./men.module.css"
import { Grid} from '@chakra-ui/react'
import { CategoryContext } from '../contexts/CategoryContext'
import { useNavigate } from 'react-router-dom'

const Men = () => {
  const [product, setProduct] = useState([])
  const {setCategory} = useContext(CategoryContext);
  const navigate = useNavigate()

  const handleChange = (id) => {
    setCategory("men")
    // console.log(id)
    navigate(`/men/${id}`);
  }

  useEffect(() => {
    const product = async () => {
      let res = await fetch("http://localhost:8080/men");
      let data=await res.json();
      setProduct(data);
    }
    product();
  },[])
  return (
    <div className={styles.maindiv}>

      <Grid templateColumns='repeat(3, 1fr)'>
        {product.map((item) => (
          <div key={item.id} className={styles.productdiv} onClick={()=>handleChange(item.id)}>
            <div>
              <img src={item.img} alt="" />
              <div className={styles.content}>
                <p>{item.price}</p>
                <button className={styles.button}>Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
        
      </Grid>
    </div>
  )
}

export default Men