const express = require('express');
const app = express();

// Root route
app.get('/', (req, res) => {
    res.send('Hello, this is a simple Node.js application!');
});

// Data route
app.get('/data', (req, res) => {
    res.json({
        message: 'Here is some sample data',
        status: 'success',
        data: [1, 2, 3, 4, 5]
    });
});

// About route
app.get('/about', (req, res) => {
    res.send('This is the About page of the Node.js app.');
});

// Start the server
const PORT = 3000; // You can change this port if needed
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
