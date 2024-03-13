import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import { IoIosArrowBack } from "react-icons/io";
import { getStorage,listAll, getDownloadURL,ref as stRef } from 'firebase/storage';
import { app } from '../../firebaseServices';
import { equalTo, get, getDatabase, orderByChild, query,ref as dbRef } from 'firebase/database';
import ProductCard from '../ui/ProductCard';



const db=getDatabase(app)
const storage=getStorage(app)
const ProductsList = ({}) => {

    const {field,value}=useParams()


    const [products,setProducts]=useState([])
    const [productImages,setProductImages]=useState([])

    const [open,setOpen]=useState(false)
    
    const getData=async()=>{
        try {
            const productRef = dbRef(db, 'products');
            const products = [];
            const snapshot = await get(productRef);
            if (snapshot.exists()) {
               
             
              snapshot.forEach((childSnapshot) => {
                const uid = childSnapshot.key;
                
                const product = childSnapshot.val();

                if (product && product[field] === value) {
                products.push(product);
                }
               
              });
              
              
            } else {
              console.log('No products found.');
            }
            setProducts(products);
            await Promise.all(products.map((product) => getImages(product.images)));
          } catch (error) {
            console.error('Error getting data:', error);
          }
    }


    const getImages=async(id)=>{
        const storageRef=stRef(storage,`images/${id}`)

        const fileList = await listAll(storageRef);
        const imageUrls = await Promise.all(
        fileList.items.map(async (item) => {
        const imageUrl = await getDownloadURL(item);
        return imageUrl;
      })
    );
   
    setProductImages((prev)=>([...prev,imageUrls]))
    }

    useEffect(()=>{
        getData()
    },[value,field])


  return (
    <div className='flex flex-col w-full p-8'>
        <div className='flex flex-row items-center justify-between'>
            <h2 className='text-4xl font-bold text-orange-300'>{value}<span className='ml-3 text-xl font-medium text-black'> collections</span></h2>
            <div className='flex flex-row items-center space-x-2'>
                <IoIosArrowBack className='w-5 h-5'/>
               
                <h2>
                    back
                </h2>
              
            </div>
        </div>
        <div className='relative'>
            {
                products ? (
                    <div className='grid grid-cols-4 mt-4'>
                    {
                        products.map((e,i)=>{
                            return(
                               <div onClick={()=>{setOpen(true)}}>
                                 <ProductCard key={i} data={e} img={productImages[productImages.length-i-1]} />
                               </div>
                            )
                        })
                    }
                </div> 
                ):(     
                    <h2 className='text-xl font-medium text-center'>Loading...</h2>
                )
            }
        </div>
        {
          open &&<div className={`absolute inset-0 bg-black/80 opacity-50 w-full h-full`}></div>
        }
        {
        open && (
            <div className='absolute w-full bg-gray-200 rounded-tl-[54px] rounded-tr-[54px] shadow-2xl h-[600px] bottom-0 left-0 right-0 p-0'>
                
            </div>
        )
    }
    </div>
  )
}

export default ProductsList