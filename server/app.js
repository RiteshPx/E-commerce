const express = require('express'); // Import express
const app = express(); // Create an instance of express
const cors = require('cors');

app.use(cors({
    origin: "http://localhost:3000",                                        // process.env.CLIENT_URL,
    credentials: true,
  }));
  
var payment = require('./router/payment');
// Middleware to parse JSON data
app.use(express.json());

app.use('/',payment);



const PORT = 5000; // Define the port number
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
