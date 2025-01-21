const Razorpay = require('razorpay');
require("dotenv").config();


if (!process.env.RAZORPAY_KEY || !process.env.RAZORPAY_SECRET) {
    throw new Error("Razorpay key or secret is missing in environment variables");
}

exports.razorpayInstance = new Razorpay({
    key_id: process.env.RAZORPAY_KEY,
    key_secret: process.env.RAZORPAY_SECRET,
});