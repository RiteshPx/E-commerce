import React from "react";
import axios from "axios";

export const RazorpayPayment = () => {
    const courseID = "12355r";
    const userID = 324;

    const handlePayment = async () => {
        try {
            // Step 1: Call the backend to create an order
            const { data } = await axios.post("http://localhost:5000/capture-payment", {
                courseID,
                userID,
            });

            if (!data.success) {
                alert("Failed to create payment order");
                return;
            }

            // Step 2: Load Razorpay and initiate payment
            const options = {
                key: process.env.REACT_APP_RAZORPAY_KEY_ID, // Add Razorpay key in .env file
                amount: data.amount, // Amount in smallest unit (e.g., paise for INR)
                currency: data.currency,
                name: "Course Payment", // Change this to your project name
                description: "Complete your course purchase",
                order_id: data.orderId, // Razorpay order ID from backend
                handler: async function (response) {
                    // Step 3: Verify payment signature on the backend
                    const verifyResponse = await axios.post(
                        "http://localhost:5000/verify-signature",
                        response
                    );

                    if (verifyResponse.data.success) {
                        alert("Payment successful and course enrolled!");
                    } else {
                        alert("Payment verification failed!");
                    }
                },
                prefill: {
                    name: "Your Name", // Replace with user's name
                    email: "email@example.com", // Replace with user's email
                    contact: "1234567890", // Replace with user's phone number
                },
                theme: {
                    color: "#3399cc", // Customize Razorpay theme color
                },
                callback_url: "http://localhost:3000/", // Redirect to this URL
            };

            const razorpayInstance = new window.Razorpay(options);
            razorpayInstance.open();

        } catch (error) {
            console.error("Error initiating Razorpay payment:", error);
            alert("Something went wrong with payment.");
        }
    };

    return (
        <button onClick={handlePayment} style={styles.button}>
            Pay Now
        </button>
    );
};

const styles = {
    button: {
        backgroundColor: "#3399cc",
        color: "white",
        border: "none",
        padding: "10px 20px",
        borderRadius: "5px",
        cursor: "pointer",
        fontSize: "16px",
    },
};

export default RazorpayPayment;
