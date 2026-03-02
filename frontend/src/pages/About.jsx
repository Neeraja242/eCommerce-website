import React from 'react'
import Title from '../components/Title'
import NewsLetterBox from '../components/NewsLetterBox'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
       <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} ></Title>
       </div>
       <div className='my-10 flex flex-col md:flex-row gap-16'>
            <img  className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
              <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
               <p> 
                      Welcome to our store!<br/><br/>

                      We started this website with one simple goal — to make online shopping easy, fast, and affordable for everyone.<br/><br/>

                      We believe that shopping should be simple and stress-free. That’s why we carefully select quality products and offer them at the best prices.<br/>

                      Our team works hard every day to:<pre> <br/>

                      -Provide trusted products <br/>

                      -Deliver fast and safe shipping<br/>

                      -Offer friendly customer support<br/>
 
            </pre> 
            </p>
               <p> 
                    Customer satisfaction is our top priority. We are not just selling products — we are building trust and long-term relationships.

                    Thank you for choosing us. We are happy to serve you!
              </p>
                <b className='text-gray-800'>Our Mission</b>
                <p>
                  
                  Our mission is to make online shopping simple, affordable, and trustworthy for everyone. We aim to provide high-quality products at fair prices while ensuring a smooth and secure shopping experience. We are committed to fast delivery, excellent customer support, and building long-term relationships based on trust and satisfaction.

                </p>
              </div>

       </div>
       <div className='text-4xl py-4'>
        <Title text1={'WHY'} text2={"CHOOSE US"} />
       </div>
       <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p>We are dedicated to maintaining the highest standards of quality in every product we offer. Each item is carefully selected, inspected, and tested to ensure it meets our strict quality guidelines. We believe that our customers deserve products that are reliable, durable, and worth every penny.

            Our commitment to quality goes beyond just selling products. We continuously monitor customer feedback and improve our offerings to ensure satisfaction. By focusing on consistency and excellence, we build long-term trust with every purchase.</p>
         </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p>
            We believe online shopping should be simple and stress-free. Our website is designed to be user-friendly, making it easy to browse, compare, and purchase products in just a few clicks. Secure payment options and a smooth checkout process ensure a hassle-free experience.

            From fast shipping to easy returns, we focus on saving your time and effort. Our goal is to provide a seamless journey from the moment you visit our website to the time your order reaches your doorstep.
          </p>
         </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p>
            Customer satisfaction is at the heart of our business. Our support team is always ready to assist you with quick responses, clear communication, and friendly guidance. We value every customer and treat every concern with care and attention.

           We believe great service creates lasting relationships. Whether you need help with a product, an order, or a return, we are committed to providing reliable support and ensuring your experience with us is always positive and rewarding.
          </p>
 
         </div>

       </div>
     <NewsLetterBox />
      
    </div>
  )
}

export default About
