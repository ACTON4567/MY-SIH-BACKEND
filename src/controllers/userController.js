const bcrypt = require("bcryptjs");
const User = require("../models/User");

const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Validate name
    if (!name) {
      return res.status(400).json({ message: "Name is required" });
    }

    // Validate email
    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Invalid email format" });
    }

    // Validate password
    if (!password) {
      return res.status(400).json({ message: "Password is required" });
    }

    if (password.length < 6) {
      return res.status(400).json({ message: "Password must be at least 6 characters" });
    }

    // Check if email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already registered" });
    }

    // Hash password and save user
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({ name, email, password: hashedPassword });
    await user.save();

    res.status(201).json({
      id: user._id,
      name: user.name,
      email: user.email,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createUser };
