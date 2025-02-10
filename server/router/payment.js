const express = require('express'); // Import express
const router = express.Router(); // Create an instance of express

const { capturePayment,getPaymentStatus } = require('../controller/payment');

        
// Basic route
router.get('/', (req, res) => {
    res.send('Welcome to the Node.js Backend!');
});


// ------------------------payment router--------------------------//
router.post('/capture-payment',capturePayment);
router.post('/getPaymentStatus',getPaymentStatus);



module.exports = router;