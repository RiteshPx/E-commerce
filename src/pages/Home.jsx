import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Products } from '../components/Products';

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

    <div className='flex justify-center'>
      <div className='flex flex-wrap space-x-10 space-y-5 border-spacing-4  justify-evenly mt-4'>
        {
          data.map((ele, indx) => (
            <div key={indx} className='w-48 h-96 shadow-2xl p-3 rounded-lg mt-8'>
             <Products ele={ele} indx={indx}/>
            </div>
          ))
        }
      </div>
    </div >
  )
}
