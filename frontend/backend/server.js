const express = require("express");
const app = express();

app.use(express.json());

const products = [
  { id: 1, name: "Wireless Headphones", price: 1999 },
  { id: 2, name: "Smart Watch", price: 2499 },
  { id: 3, name: "Laptop Backpack", price: 899 },
  { id: 4, name: "Running Shoes", price: 1799 }
];

app.get("/api/products", (req, res) => {
    res.json(products);
});

// Health check
app.get("/", (req, res) => {
    res.send("E-Commerce API is running...");
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
