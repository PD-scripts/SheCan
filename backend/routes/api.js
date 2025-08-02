const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.get('/user', async (req, res) => {
  try {
    
    let user = await User.findOne().sort({ createdAt: -1 });
    
    
    if (!user) {
      user = {
        name: "John Doe",
        referralCode: "johndoe2025",
        donations: 1250
      };
    }
    
    res.json(user);
  } catch (error) {
    
    res.json({
      name: "John Doe",
      referralCode: "johndoe2025",
      donations: 1250
    });
  }
});

router.get('/leaderboard', async (req, res) => {
  try {
    
    let leaderboard = await User.find().sort({ donations: -1 }).limit(10);
    
    
    if (leaderboard.length === 0) {
      leaderboard = [
        { name: "Alice Johnson", donations: 2500, referralCode: "alice2025" },
        { name: "Bob Smith", donations: 2100, referralCode: "bobsmith2025" },
        { name: "Carol Davis", donations: 1800, referralCode: "carol2025" },
        { name: "David Wilson", donations: 1600, referralCode: "david2025" },
        { name: "John Doe", donations: 1250, referralCode: "johndoe2025" },
        { name: "Emma Brown", donations: 1100, referralCode: "emma2025" },
        { name: "Frank Miller", donations: 950, referralCode: "frank2025" },
        { name: "Grace Lee", donations: 800, referralCode: "grace2025" },
        { name: "Henry Taylor", donations: 650, referralCode: "henry2025" },
        { name: "Ivy Chen", donations: 500, referralCode: "ivy2025" }
      ];
    }
    
    res.json(leaderboard);
  } catch (error) {
    
    res.json([
      { name: "Alice Johnson", donations: 2500, referralCode: "alice2025" },
      { name: "Bob Smith", donations: 2100, referralCode: "bobsmith2025" },
      { name: "Carol Davis", donations: 1800, referralCode: "carol2025" },
      { name: "David Wilson", donations: 1600, referralCode: "david2025" },
      { name: "John Doe", donations: 1250, referralCode: "johndoe2025" },
      { name: "Emma Brown", donations: 1100, referralCode: "emma2025" },
      { name: "Frank Miller", donations: 950, referralCode: "frank2025" },
      { name: "Grace Lee", donations: 800, referralCode: "grace2025" },
      { name: "Henry Taylor", donations: 650, referralCode: "henry2025" },
      { name: "Ivy Chen", donations: 500, referralCode: "ivy2025" }
    ]);
  }
});


router.post('/user', async (req, res) => {
  try {
    const { name, email } = req.body;
    const referralCode = name.toLowerCase().replace(/\s+/g, '') + '2025';
    
    const user = new User({
      name,
      email,
      referralCode,
      donations: Math.floor(Math.random() * 1000) + 500 
    });
    
    await user.save();
    res.json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;