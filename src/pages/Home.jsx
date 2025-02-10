import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Products } from '../components/Products';
import banner from '../images/banner.jpg'

export const Home = () => {
  const API = "https://fakestoreapi.com/products"
  const [data, setData] = useState([]);

  async function fetchData() {
    await axios
      .get(API)
      .then(res => {
        console.log(res);
        setData(res.data);
      }
      )
      .catch(err => console.error(err));
    
  }
  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div className=' min-h-screen bg-yellow-500'>
      <header className='w-screen  bg-black'>
        <img src={banner} alt="E-commerce Banner" className='object-cover w-full' />
      </header>   
    
      <div className='flex justify-center bg- min-h-screen p-5'>
        <div className='flex flex-wrap space-x-10 space-y-5 justify-evenly mt-4 mx-6'>
          {
            data.map((ele, indx) => (
              <Products ele={ele} indx={indx} />
            ))
          }
        </div>
      </div>
    </div>
  )
}
