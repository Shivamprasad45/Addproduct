// server.js
const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// GET endpoint to serve HTML
app.get('/api/products', (req, res) => {
  res.sendFile(path.join(__dirname, 'VIEW', 'form.html'));
});

// POST endpoint to handle form submission (optional)
app.post('/api/products', (req, res) => {
  const { productName } = req.body;
  res.send(`Product "${productName}" added successfully!`);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
