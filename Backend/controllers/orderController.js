
import orderModel from '../models/orderModel.js';  // <-- Correct import
import userModel from '../models/userModel.js';    // Make sure this exists
import Stripe from 'stripe'


//gateway initialize
const stripe =new Stripe(process.env.STRIPE_SECRET_KEY)
//global variables
const currency ='inr'
const deliveryCharge= 10



const placeOrder = async (req,res)=>{
    try {
    const { userId, items, amount, address } = req.body;
   

    const orderData = {
      userId,
      items,
      address,
      amount,
      paymentMethod: "COD",  // fixed key
      payment: false,
      date: Date.now()
    };

    // Save the new order
    const newOrder = new orderModel(orderData);
    await newOrder.save();

    // Clear user's cart
    await userModel.findByIdAndUpdate(userId, { cartData: {} });

    res.json({ success: true, message: "Order Placed" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }

}

//order using stripe
const placeOrderStripe = async (req,res)=>{

  try{
     const { userId, items, amount, address } = req.body;
     const {origin} =req.headers;
     
     
      const orderData = {
      userId,
      items,
      address,
      amount,
      paymentMethod: "Stripe",  // fixed key
      payment: false,
      date: Date.now()
    };

    const newOrder = new orderModel(orderData);
    await newOrder.save();
    const line_items = items.map((item) => ({
    price_data: {
    currency: currency,
    product_data: {
      name: item.name,
    },
    unit_amount: item.price * 100, // Stripe expects cents
  },
  quantity: item.quantity,
}));
  line_items.push({
  price_data: {
    currency: currency,
    product_data: {
      name:'Delivery Charges',
    },
    unit_amount: deliveryCharge * 100,
  },
  quantity: 1,
});
    const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    mode: 'payment',
    line_items: line_items,
    success_url: `${origin}/verify?success=true&orderId=${newOrder._id}`,
    cancel_url: `${origin}/verify?success=false&orderId=${newOrder._id}`
  });

  res.json({ success: true, session_url: session.url });



  }
  catch(error){
    console.log(error);
  res.json({ success: false, message: error.message });
  }

    
}

const verifyStripe =async (req,res) =>{
  const { orderId, success, userId } = req.body;

try {
  if (success === "true") {

    // Mark order as paid
    await orderModel.findByIdAndUpdate(orderId, { payment: true });

    // Clear user's cart
    await userModel.findByIdAndUpdate(userId, { cartData: {} });

    res.json({ success: true });

  } else {

    // Delete order if payment failed
    await orderModel.findByIdAndDelete(orderId);

    res.json({ success: false });

  }

} catch (error) {
  console.log(error);
  res.json({ success: false, message: error.message });
}
}

//all orders data for admin panel
const allOrders = async (req,res)=>{
  try{
    const orders =await orderModel.find({})
    res.json({success:true,orders})

  }
    catch(error){
      console.log(error);
      res.json({success:false,message:error.message});

    }
}

//user orde data for frontednd
const userOrders = async (req,res)=>{
 try {
    const { userId } = req.body; // extract userId from request body
    const orders = await orderModel.find({ userId }); // find orders for this user
    res.json({ success: true, orders });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }



    
}

//update order status from admin panel 
const updateStatus = async (req,res)=>{
  try {
    const {orderId,status } =req.body


    await orderModel.findByIdAndUpdate(orderId,{status});
    res.json({success:true,message:"Status Updated"})
    
  } catch (error) {
    console.log(error);
    res.json({success:false,message:error.message});
    
  }
    
}


export {verifyStripe,placeOrder,placeOrderStripe ,allOrders,userOrders,updateStatus}