import jwt from "jsonwebtoken";

// admin authentication middleware
const authAdmin = async (req, res, next) => {
  try {
    const { atoken } = req.headers;
    if (!atoken) {
      return res.json({
        success: false,
        message: "Not Authorized Login Again",
      });
    }

    console.log("🔍 DEBUG INFO:");
    console.log("Token received:", atoken);
    console.log("JWT_SECRET:", process.env.JWT_SECRET);
    console.log("ADMIN_EMAIL:", process.env.ADMIN_EMAIL);

    const token_decode = jwt.verify(atoken, process.env.JWT_SECRET);
    console.log("Decoded token:", token_decode);
    console.log("Token type:", typeof token_decode);

    // Fix: Check if the decoded token contains admin identifier
    if (token_decode.email !== process.env.ADMIN_EMAIL) {
      console.log("❌ Email mismatch! Token email:", token_decode.email, "Expected:", process.env.ADMIN_EMAIL);
      return res.json({
        success: false,
        message: "Not Authorized Login Again",
      });
    }

    next();
  } catch (error) {
    console.log("❌ Auth error:", error.message);
    res.json({ success: false, message: error.message });
  }
};

export default authAdmin;
