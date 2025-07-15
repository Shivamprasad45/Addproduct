// server.js
const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve form.html on GET request
app.get('/api/products', (req, res) => {
  res.sendFile(path.join(__dirname, 'VIEW', 'form.html'));
});

// Handle POST request
app.post('/api/products', (req, res) => {
  const { productName } = req.body;
  console.log('Product received:', productName);

  res.json({ message: `Product "${productName}" added successfully!` });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
