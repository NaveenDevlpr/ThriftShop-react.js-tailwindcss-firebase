import React, { useState,useRef, useEffect } from 'react'
import {getStorage,uploadBytes,ref, getDownloadURL} from 'firebase/storage'
import {getDatabase,ref as databaseRef,set,} from 'firebase/database'
import { app } from '../../firebaseServices'
import { v4 as uuidv4 } from 'uuid';

const db=getDatabase(app)
const storage=getStorage(app)
const AddProducts = () => {

    const gender=['Women','Men','Unisex']
    const categories=['Oversized-Tee','Korean Pants','Streetwear','Retro']
    const type=['Shirts','T-shirts','Accessories','Sneakers','Hoodie','Pants','Sweatshirts']


    const [formKey, setFormKey] = useState(0);
    const formRef = useRef(null);

    const [genderData,setGenderData]=useState('')
    const [categoryData,setCategoryData]=useState('')
    const [brandData,setBrandData]=useState('')
    const [typeData,setTypeData]=useState('')
    const [priceData,setPriceData]=useState('')
    const [images, setImages] = useState([]);


    const [added,setAdded]=useState(false)


    const handleImageChange=(e)=>{
        const selectedFiles = e.target.files;
        const filesArray = Array.from(selectedFiles);
        setImages(filesArray);
    }

    const handleSubmit=async(e)=>{
        e.preventDefault()

        
        const uid=uuidv4()
        const productRef=databaseRef(db,`products/${uid}`)
        const imageFolderRef = ref(storage, `images/${uid}`);

        const imageUploadTasks = images.map((image) => {
            const imageRef = ref(imageFolderRef, image.name);
            return uploadBytes(imageRef, image);
          });


          try {

            await Promise.all(imageUploadTasks);
            
            const productData = {

                
                brand: brandData,
                gender: genderData,
                category: categoryData,
                type: typeData,
                price: priceData,
                images: uid,
                createdAt:new Date().toISOString()

              };


              
             set(productRef,productData)


              setBrandData('');
              setGenderData('');
              setCategoryData('');
              setTypeData('');
              setPriceData('');
              setImages([]);

              setFormKey((prev)=>prev+1)
              setAdded(true)
             
          } catch (error) {
            console.error('Error uploading product:', error);
            alert('Failed to add product. Please try again.');            
          }

    }

    useEffect(()=>{
        let timer;
        timer=setTimeout(()=>{
          setAdded(false)
         
        },4000)

        return () => {
            clearTimeout(timer);
        };
    },[added])
  return (
    <div className='relative w-full mb-4'>
        {
            added&&<div className='h-[50px] w-full absolute z-10 bg-yellow-200'>
                <h2 className='text-xl font-semibold text-center text-blue-900'>Your product has been added successfully !!</h2>
            </div>
        }
    <div className='h-[250px] w-full bg-yellow-100 relative'>
    <img src={'https://media.assettype.com/homegrown%2Fimport%2Fbook%2F12258-wnbiyndoag-1596005069.jpeg?w=1200&auto=format%2Ccompress&fit=max'}
        alt=''
        className='object-cover w-full h-full'
        />
        <div className={`absolute inset-0 bg-black/70 opacity-50 w-full h-full`}></div>
        <div className='absolute inset-0 flex items-center justify-center'>
        <h2 className='text-2xl font-semibold tracking-tighter text-yellow-200'>Get all your <span className='text-5xl font-bold text-orange-300'>Thrifted</span> collections listed here</h2>
        </div>
    </div>
    <div className='flex flex-col max-w-xl mx-auto'>
        <form className='flex flex-col w-full mt-4 space-y-5'
        onSubmit={handleSubmit}
        key={formKey}
        ref={formRef}
        >
           <div className='flex flex-col space-y-3'>
                <label>Brand</label>
                <input type='text' placeholder='Type your brand' className='px-4 py-2 border-0 rounded-md ring-1 ring-gray-300 focus:ring-black outline-0'
                value={brandData}
                onChange={(e)=>{setBrandData(e.target.value)}}
                />
           </div>
           <div className='flex flex-col space-y-3'>
                <label>Gender</label>
                <select className='px-4 py-2 border-0 rounded-md ring-1 ring-gray-300 focus:ring-black outline-0'
                onChange={(e)=>setGenderData(e.target.value)}
                >
                    <option>select gender</option>
                    {
                        gender.map((e,i)=>{
                            return(
                                <option key={i} value={e}>{e}</option>
                            )
                        })
                    }
                </select>
           </div>
           <div className='flex flex-col space-y-3'>
                <label>Category</label>
                <select className='px-4 py-2 border-0 rounded-md ring-1 ring-gray-300 focus:ring-black outline-0'
                onChange={(e)=>{setCategoryData(e.target.value)}}
                >
                    <option>select category</option>
                    {
                        categories.map((e,i)=>{
                            return(
                                <option value={e}>{e}</option>
                            )
                        })
                    }
                </select>
           </div>

           <div className='flex flex-col space-y-3'>
                <label>Type</label>
                <select className='px-4 py-2 border-0 rounded-md ring-1 ring-gray-300 focus:ring-black outline-0'
                
                onChange={(e)=>{setTypeData(e.target.value)}}
                >
                <option>select type</option>
                    {
                        type.map((e,i)=>{
                            return(
                                <option value={e}>{e}</option>
                            )
                        })
                    }
                </select>
           </div>
           <div className='flex flex-col space-y-3'>
                <label>Price</label>
                <input type='number' placeholder='Price your product' className='px-4 py-2 border-0 rounded-md ring-1 ring-gray-300 focus:ring-black outline-0'
                value={priceData}
                onChange={(e)=>{setPriceData(e.target.value)}}
                />
           </div>

           <div className='flex flex-col space-y-3'>
                <label>Image Upload</label>
                <input type='file' className='px-4 py-2 border-0 rounded-md ring-1 ring-gray-300 focus:ring-black outline-0'
                onChange={(e)=>{handleImageChange(e)}}
                multiple
                />
           </div>  
           <div className='flex flex-row items-center'>
            {
                images&&images.map((e,i)=>{
                    return(
                        <div className='h-[200px] w-[200px]'>
                            <img src={URL.createObjectURL(e)} alt='' className='object-cover'/>
                        </div>
                    )
                })
            }
           </div>

           <button className='rounded-md inline-block bg-blue-900 font-medium text-white px-4 py-[6px]' 
            type='submit'
           >
                <h2 className='font-semibold mb-[2px] text-[14px]'>Add</h2>
            </button> 
        </form>
    </div>
  </div>
  )
}

export default AddProducts