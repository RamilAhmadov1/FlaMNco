const express = require("express");
const cors = require("cors");
const app = express();
const port = 8080;

app.use(cors());
app.use(express.json());

app.post("/api/order", (req, res) => {
  // Simulate processing time (remove for actual deployment)
  setTimeout(() => {
    console.log(req.body);
    res.json({ message: "Order processed successfully!", orderId: "123456" });
  }, 100); // Simulated delay
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

app.get("/", (req, res) => {
  res.send("Welcome to the server!");
});
