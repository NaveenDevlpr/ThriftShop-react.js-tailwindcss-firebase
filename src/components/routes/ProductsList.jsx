import React, { useEffect, useState } from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import { IoIosArrowBack } from "react-icons/io";
import { getStorage,listAll, getDownloadURL,ref as stRef, list } from 'firebase/storage';
import { app } from '../../firebaseServices';
import { equalTo, get, getDatabase, orderByChild, query,ref as dbRef, set } from 'firebase/database';
import ProductCard from '../ui/ProductCard';
import ProductDetails from './ProductDetails';
import Loading from '../ui/Loading';

import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";

const db=getDatabase(app)
const storage=getStorage(app)
const ProductsList = () => {

  const navigate=useNavigate()
    const {field,value}=useParams()

    const [noOfProducts,setNoOfProducts]=useState(8)
    const [pageNumber,setPageNumber]=useState(1)

    const [products,setProducts]=useState([])
    const [productImages,setProductImages]=useState([])

    const [open,setOpen]=useState(false)


    const [detailProduct,setDetailProduct]=useState([])
    const [detailImage,setDetailImage]=useState([])
    

    const [loading,setLoading]=useState(false)
    const getData=async()=>{
            setLoading(true)
            const products = [];
            
            const productRef = dbRef(db, 'products');
        
            const snapshot = await get(productRef);
        try {
            
            if (snapshot.exists()) 
            {
              snapshot.forEach((childSnapshot) => {
               
                
                const product = childSnapshot.val();

                if (product && product[field] === value) {
                  
                  products.push(product);
               
                }
                else if(value==='all'){
                  products.push(product)
                }
              });
              
            } else {
              console.log('No products found.');
            }
            await Promise.all(products.map((product) => getImages(product.images)))
            setProducts(products);
            setLoading(false)
          } catch (error) {
            setLoading(false)
            console.error('Error getting data:', error);
          }     
    }


    const getImages=async(id)=>{
    
     
     
      if (!productImages.some((image) => image.id === id)) 
      {
        const storageRef = stRef(storage, `images/${id}`);
        try {
          const fileList = await list(storageRef);
      
          
          const imageUrls = await Promise.all(
            fileList.items.map(async (item) => {
              const imageUrl = await getDownloadURL(item);
              return imageUrl;
            })
          );
          const productImageObj = { id: id, images: imageUrls };
    
          setProductImages((prevProductImages) => [
            ...prevProductImages,
            productImageObj,
          ]);
        } catch (error) {
          console.error('Error fetching images:', error);
        }
      }
    }

    
    const openModal=(index)=>{
       
      const selectedProduct = products[index];
      const selectedImage = productImages.find((image) => image.id === selectedProduct.images);
    
      setDetailProduct(selectedProduct);
      setDetailImage(selectedImage);
      setOpen(true);
      document.body.classList.add('overflow-hidden');
    }



    const closeModal=()=>{
     
      setOpen(false)
      document.body.classList.remove('overflow-hidden')
    }

    
    const selectPageHandler=(index)=>{
  
      
      if(index>=1 && index <= Math.ceil(products.length/noOfProducts) && index!==pageNumber)
      {
        
        console.log(index)
        setPageNumber(index)
      }
      else{
        console.log('no')
      }
    
    }

    useEffect(()=>{
    
       getData()
     
    },[field,value])



  return (
    <div className={`flex flex-col w-full p-8 `}>
        <div className='flex flex-row items-center justify-between'>
            <h2 className='text-4xl font-bold text-orange-300'>{value}<span className='ml-3 text-xl font-medium text-black'> collections</span></h2>
            <div className='flex flex-row items-center space-x-2'>
                <IoIosArrowBack className='w-5 h-5 cursor-pointer' onClick={()=>{navigate(-1)}}/>
               
                <h2 className='cursor-pointer' onClick={()=>{navigate(-1)}}>
                    back
                </h2>
              
            </div>
        </div>
        <div className='relative'>
        {
             loading ? (
                  <div className='absolute -translate-x-[50%] left-[50%] -translate-y-[50%] top-[50%] max-h-screen'>
                    <Loading/>
                  </div>
             ):
             (
             
              products.length !== 0 ? (
                <div className='grid grid-cols-4 gap-6 mt-4'>
                  {products.slice(pageNumber*noOfProducts-noOfProducts,pageNumber*noOfProducts).map((e, i) => {
                    const imageObj = productImages.find((image) => image.id === e.images);
                    return (
                      <div onClick={() => openModal(i)} key={i}>
                        {imageObj && <ProductCard data={e} img={imageObj.images} />}
                      </div>
                    );
                  })}
                </div>
              ) : (
                (
                  <h2 className='absolute text-xl font-medium -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'>
                    { 'No Collection available'}
                  </h2>
                )
              )
             ) 
          }
        </div>
        {
          open &&<div className={`absolute inset-0 bg-black/80 opacity-50 w-full h-full`} onClick={()=>{closeModal()}}></div>
        }
        {
        open && (
            <div className='fixed w-full bg-gray-100 rounded-tl-[54px] h-[600px] rounded-tr-[54px] shadow-2xl bottom-0 left-0 right-0 p-0 overflow-y-auto'>
              {/*  <div className="relative flex flex-row items-center w-full h-full mx-auto overflow-x-hidden overflow-y-auto px-[40px] py-[20px]">
                    
        </div>*/}
                <ProductDetails productDetail={detailProduct} images={detailImage} closeModal={closeModal}/>
            </div> 
        )
    }

    {
      products.length>0&&
      <div className='mt-5'>
        {
              <div className='flex flex-row items-center justify-center w-full mt-2'>
              <span className='p-2' ><GrFormPrevious className='w-5 h-5 cursor-pointer' onClick={()=>{selectPageHandler(pageNumber-1)}}/></span>
              { 
              [...Array(Math.ceil(products.length/noOfProducts))].map((e,i)=>{
                return(
                  <span key={i} className={`py-2 px-4  ${pageNumber===i+1?'bg-yellow-100 ring-1 ring-black text-blue-900 font-semibold':''}cursor-pointer`} onClick={()=>{selectPageHandler(i+1)}}>{i+1}</span>
                )
              })
              }
              <span className='p-2' ><GrFormNext className='w-5 h-5 cursor-pointer' onClick={()=>selectPageHandler(pageNumber+1)}/></span>
              </div>
        }
      </div>
    }
    </div>
  )
}

export default ProductsList