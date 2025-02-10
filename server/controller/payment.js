const { razorpayInstance } = require('../config/razorpay');

require('dotenv').config();
const crypto = require('crypto');

//capture the payment and initiate the razorpay order
exports.capturePayment = async (req, res) => {
    try {
        //fetch 
        const {amount} = req.body; 
        const currency = 'INR';
        const options = {
            amount: amount * 100,
            currency,
            receipt: Math.random(Date.now()).toString(),
           
        }
        try {
            //initiate the payment using razorpay
            const paymentResponse = await razorpayInstance.orders.create(options);
            console.log(paymentResponse);

            //return res
            res.status(200).json({
                success: true,
                message: "Data for all courses are fetching successfully",
                orderId: paymentResponse.id,            //order id of payment
                currency: paymentResponse.currency,
                amount: paymentResponse.amount,
            })
        }
        catch (error) {
            console.error("Error details:", error);
            return res.status(500).json({
                success: false,
                message: 'cound not initiate order '
            })
        }
    }
    catch (error) {
        console.error("Error details:", error);
        return res.status(500).json({
            success: false,
            message: 'Could not initiaate order.',
        })
    }
}

// verify signature of razorpay and server 
exports.verifySignature = async (req, res) => {
    try {
        const secret = process.env.RAZORPAY_SECRET;

        const shasum = crypto.createHmac("sha256", secret);
        shasum.update(JSON.stringify(req.body));
        const digest = shasum.digest("hex");

        if (digest === req.headers["x-razorpay-signature"]) {
            console.log('payment is sucessfully');
        }
        else {
            return res.status(400).json({
                status: "failure",
                message: "signature does not match ",
            });
        }
        //fetch data 
        const { courseId } = req.body.payload.payment.entity.notes;
        //update courseDetail with enroll student

        return res.status(200).json({
            success: true,
            message: "successfully enrolled "
        })
    }
    catch (e) {
        return res.status(400).json({
            success: false,
            message: "enable to  enrolled "
        })
    }
};
// exports.module = verifySignature;



exports.getPaymentStatus = async (req, res) => {
    try {
        const { paymentId } = req.params;

        if (!paymentId) {
            return res.status(400).json({
                success: false,
                message: "Payment ID is required",
            });
        }

        // Fetch payment status from Razorpay
        const payment = await razorpayInstance.payments.fetch(paymentId);

        res.status(200).json({
            success: true,
            paymentStatus: payment.status,
            paymentDetails: payment,
        });
    } catch (error) {
        console.error("Error fetching payment status:", error);
        res.status(500).json({
            success: false,
            message: "Could not fetch payment status",
        });
    }
};
