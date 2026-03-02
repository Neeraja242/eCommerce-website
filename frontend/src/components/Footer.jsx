import React from 'react'
import { assets } from '../assets/assets'
const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
              <div>
                  <img src={assets.logo} className='mb-5 w-32' alt=""></img>
                  <p className='w-full md:w-2/3 text-gray-600'>
                      Our latest collection brings you the newest and trendiest products in our store. Each item is carefully selected to match today’s style, comfort, and quality. Whether you are looking for something modern, stylish, or useful, this collection has something fresh for everyone
                  </p>
              </div> 
              <div className='pt-[49px] ml-20'>
                    <p className='text-xl font-medium mb-5 text-blue-700'>COMPANY</p>
                    <ul className='flex flex-col gap-1 text-gray-600' >
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                    </ul>
              </div>
              <div className='mt-12'>
                <p className='text-xl font-medium mb-5 text-blue-700'>GET IN TOUCH</p>
                <ul  className='flex flex-col gap-1 text-gray-600'>
                    <li>+1-212-456-7899</li>
                    <li>contact@sHOPEst.com</li>
                </ul>
              </div>
        </div>
        <div>
            <hr/>
            <p className='py-5 text-sm text-center'>Copyright 2024@ sHOPEst.com -All Rights </p>
        </div>
    </div>
  )
}

export default Footer
