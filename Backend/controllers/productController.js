import { v2 as cloudinary } from "cloudinary";
import productModel from "../models/productModel.js";

const addProduct = async (req, res) => {
  // try {
    // const { name, description, price, category, subCategory, sizes, bestseller } = req.body;

    // // Collect images from req.files
    // const images = ["image1", "image2", "image3", "image4"]
    //   .map((key) => req.files[key]?.[0])
    //   .filter(Boolean);

    // // Upload images to Cloudinary with per-image error handling
    // let imagesUrl = await Promise.all(
    //   images.map(async (item) => {
    //     try {
    //       const result = await cloudinary.uploader.upload(item.path, { resource_type: "image" });
    //       return result.secure_url;
    //     } catch (err) {
    //       console.error("Image upload failed:", item.path, err.message);
    //       return null; // skip failed uploads
    //     }
    //   })
    // );

    // imagesUrl = imagesUrl.filter((url) => url !== null);

    // // Parse sizes safely
    // let parsedSizes;
    // try {
    //   parsedSizes = JSON.parse(sizes);
    // } catch {
    //   parsedSizes = [];
    // }

    // const productData = {
    //   name,
    //   description,
    //   category,
    //   price: Number(price),
    //   subCategory,
    //   bestseller: bestseller === "true",
    //   sizes: parsedSizes,
    //   image: imagesUrl,
    //   date: Date.now(),
    // };

    // console.log("Saving product:", productData);

    // const product = new productModel(productData);
    // await product.save();

    // res.json({ success: true, message: "Product added successfully", product });
  // } 
  try {
  // Destructure product info from request body
  const {
    name,
    description,
    price,
    category,
    subCategory,
    sizes,
    bestseller
  } = req.body;

  // // Get images from req.files (safe access)
  // const image1 = req.files?.image1?.[0];
  // const image2 = req.files?.image2?.[0];
  // const image3 = req.files?.image3?.[0];
  // const image4 = req.files?.image4?.[0];
// Get images from req.files
    const image1 = req.files.image1 && req.files.image1[0] ;
    const image2 = req.files.image2 &&  req.files.image2[0];
    const image3 = req.files.image3 &&  req.files.image3[0];
    const image4 = req.files.image4 &&  req.files.image4[0];
 
  const images = [image1, image2, image3, image4].filter(Boolean);

  // Upload images to Cloudinary
  let imagesUrl = await Promise.all(
    images.map(async (item) => {
      try {
        const result = await cloudinary.uploader.upload(item.path, {
          resource_type: "image",
        });
        return result.secure_url;
      } catch (err) {
        console.error("Image upload failed:", item.path, err.message);
        return null;
      }
    })
  );

  // Remove failed uploads
  imagesUrl = imagesUrl.filter(Boolean);

  // Build product data
  const productData = {
    name,
    description,
    category,
    subCategory,
    price: Number(price),
    bestseller: bestseller === "true",
    sizes: sizes ? JSON.parse(sizes) : [],
    image: imagesUrl,
    date: Date.now(),
  };

  console.log(productData);

  // Save product
  const product = new productModel(productData);
  await product.save();

  res.json({ success: true, message: "Product added successfully" });

}  
  catch (error) {
    console.error("Add product error:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

const listProducts = async (req, res) => {
  try {
    const products = await productModel.find({});
    res.json({ success: true, products });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

const singleProduct = async (req, res) => {
  try {
    const { productId } = req.body;
    const product = await productModel.findById(productId);
     res.json({ success: true, product });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

const removeProduct = async (req, res) => {
  try {
     await productModel.findByIdAndDelete(req.body.id)
    res.json({ success: true, message: "Product deleted" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

export { addProduct, listProducts, singleProduct, removeProduct };











// import {v2 as cloudinary} from "cloudinary";
// import productModel from "../models/productModel.js"

// const addProduct = async (req,res)=>{
//     try {
//     // Destructure product info from request body
//     const { name, description, price, category, subCategory, sizes, bestseller } = req.body;

//     // Get images from req.files
//     const image1 = req.files.image1 && req.files.image1[0] ;
//     const image2 = req.files.image2 &&  req.files.image2[0];
//     const image3 = req.files.image3 &&  req.files.image3[0];
//     const image4 = req.files.image4 &&  req.files.image4[0];


//     const images =[image1,image2,image3,image4].filter((item)=>item !== undefined)

//     let imagesUrl =await Promise.all(
//       images.map(async (item)=>{
//         try{
//         let result =await cloudinary.uploader.upload(item.path,{resource_type:"image"});
//         return result.secure_url
//         }
//         catch(err){
//           console.error("Image upload failed:",item.path,err.message);
//           return null;
//         }
//       })
//     )
// imagesUrl =imagesUrl.filter(url => url !== null);
//   const productData = {
//   name: name,
//   description: description,
//   category: category,
//   price: Number(price),                  // convert price to a number
//   subCategory: subCategory,
//   bestseller: bestseller === "true" ? true : false,  // convert string "true"/"false" to boolean
//   sizes: JSON.parse(sizes),              // convert sizes string to array
//   image: imagesUrl,                      // array or URL of uploaded images
//   date: Date.now()                       // timestamp
// };


//   console.log(productData);
//   const product=new productModel(productData);
//   await product.save();
//   res.json({success:true,message:"Product"})
   




//     // // Debugging: print values
//     // console.log(name, description, price, category, subCategory, sizes, bestseller);
//     // console.log(imagesUrl);

//     // Send response
//     res.json({ success: true, message: "Product data received" });

//   } catch (error) {
//     console.log(error);
//     res.json({ success: false, message: error.message });
//   }
  

// }

// const listProducts= async (req,res)=>{

// }

// const singleProduct = async (req,res)=>{

// }

// const removeProduct= async (req,res)=>{

// }

// export {addProduct,listProducts,singleProduct,removeProduct} ;