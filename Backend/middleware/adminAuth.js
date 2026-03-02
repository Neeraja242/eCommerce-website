//  import jwt from "jsonwebtoken";

// const adminAuth = async (req, res, next) => {
//   try {
//     // const token = req.headers.token || req.headers.authorization?.split(" ")[1];

//     // const { token } = req.headers;
//  const token = req.headers.authorization?.split(" ")[1];

//     if (!token) return res.json({ success: false, message: "Not Authorized Login Again" });
     
//     const token_decode = jwt.verify(token, process.env.JWT_SECRET);
//       console.log("FROM TOKEN:", token_decode);
//  console.log(
//   "FROM ENV:",
//   process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD
// );
//     if (token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD)
//       return res.json({ success: false, message: "Not Authorized Login Again" });
//     next();
//   } catch (error) {
//     console.log(error);
//     return res.json({ success: false, message: error.message });
//   }
// };

   

// export default adminAuth;
import jwt from "jsonwebtoken";

const adminAuth = async (req, res, next) => {
  try {

    console.log("HEADERS:", req.headers);

    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res.json({ success: false, message: "No Token Provided" });
    }

    console.log("TOKEN RECEIVED:", token);
    console.log("JWT SECRET:", process.env.JWT_SECRET);

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    console.log("DECODED:", decoded);

    if (decoded !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
      return res.json({ success: false, message: "Not Authorized" });
    }

    next();

  } catch (error) {
    console.log("VERIFY ERROR:", error.message);
    return res.json({ success: false, message: error.message });
  }
};

export default adminAuth;
