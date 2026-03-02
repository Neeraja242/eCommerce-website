// import React from 'react'

// const Verify = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default Verify
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useEffect, useContext } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import { ShopContext } from '../context/ShopContext';

const Verify = () => {
  const { navigate, token, setCartItems, backendUrl } = useContext(ShopContext);
  const [searchParams,setSearchParams ] = useSearchParams();

  const success = searchParams.get('success');
  const orderId = searchParams.get('orderId');

  const verifyPayment = async () => {
    try {
      if (!token) return null;

      const response = await axios.post(
        backendUrl + '/api/order/verifyStripe',
        { success, orderId },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (response.data.success) {
        toast.success('Payment verified successfully!');
        setCartItems([]); // clear cart after successful payment
        navigate('/orders'); // redirect to orders page
      } else {
        toast.error(response.data.message || 'Payment verification failed');
        navigate('/cart'); // redirect back to cart if failed
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message || 'Something went wrong');
      navigate('/cart');
    }
  };

  useEffect(() => {
    if (success && orderId) {
      verifyPayment();
    }
  }, [token]);

  return <div>Verifying payment...</div>;
};

export default Verify;