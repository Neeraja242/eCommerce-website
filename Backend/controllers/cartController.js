import userModel from "../models/userModel.js"

const addToCart = async (req,res) =>{
    
    try {
        const { userId, itemId, size } = req.body;

        const userData = await userModel.findById(userId);

        let cartData = userData.cartData || {};

        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1;
            } else {
                cartData[itemId][size] = 1;
            }
        } else {
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }

        await userModel.findByIdAndUpdate(userId, { cartData });

        res.json({ success: true, message: "Added To Cart" });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    
};


}


//update user cart 
const updateCart = async (req,res) =>{
    try {
        // 1️⃣ Get data from request body
        const { userId, itemId, size, quantity } = req.body;

        // 2️⃣ Get user from database
        const userData = await userModel.findById(userId);

        // 3️⃣ Get existing cart, default to empty object if missing
        let cartData = userData.cartData || {};

        // 4️⃣ Update the quantity of specific product and size
        // cartData[itemId] = cartData[itemId] || {}; // if product not exists, create
        cartData[itemId][size] = quantity; // set new quantity

        // 5️⃣ Save updated cart back to database
        await userModel.findByIdAndUpdate(userId, { cartData });

        // 6️⃣ Send success response
        res.json({ success: true, message: "Cart Updated" });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};
    



//get user cart data
const getUserCart = async (req,res) =>{
    try{
 const {userId} =req.body;
 const userData =await userModel.findById(userId);
 let cartData =await userData.cartData;

 res.json({success:true,cartData})

    }
    catch(error){
        console.log(error);
        res,json({success:false,message:error.message})
    }
    
}

export {addToCart,updateCart,getUserCart}