const express = require('express');
const app = express();

// Sample dealer data
const dealers = [
  { id: 1, name: "Dealer One", state: "Kansas" },
  { id: 2, name: "Dealer Two", state: "Texas" },
  { id: 3, name: "Dealer Three", state: "Kansas" },
];

// 1. Fetch all dealers
app.get('/fetchDealers', (req, res) => {
  res.json(dealers);
});

// 2. Fetch dealers by state
app.get('/fetchDealers/:state', (req, res) => {
  const state = req.params.state.toLowerCase();
  const filtered = dealers.filter(dealer => dealer.state.toLowerCase() === state);
  res.json(filtered);
});

// 3. Fetch dealer by ID
app.get('/fetchDealer/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const dealer = dealers.find(d => d.id === id);
  if (dealer) {
    res.json(dealer);
  } else {
    res.status(404).json({ error: 'Dealer not found' });
  }
});

// 4. Fetch reviews for a dealer
app.get('/fetchReviews/dealer/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const reviews = [
    { reviewId: 1, dealerId: id, content: "Great service!" },
    { reviewId: 2, dealerId: id, content: "Will come back again." },
  ];
  res.json(reviews);
});

// Start the server
const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Node API running on port ${PORT}`);
});
