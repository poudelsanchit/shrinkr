const User = require("../model/user");

const handleUserSignup = async (req, res) => {
  const { name, email, password } = req.body;

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    return res.status(400).json({ error: "Email is already registered" });
  }

  await User.create({
    name,
    email,
    password,
  });

  return res.json({ msg: "User Created Successfully" });
};
const handleUserLogin = async (req, res) => {
  const { identifier, password } = req.body;

  // Check if the identifier is an email or a username
  const isEmail = /\S+@\S+\.\S+/.test(identifier); // Check if the identifier is in email format

  let user;
  if (isEmail) {
    // If the identifier is an email, find the user by email
    user = await User.findOne({ email: identifier });
  } else {
    // If the identifier is not an email, find the user by username
    user = await User.findOne({ username: identifier });
  }

  if (!user || user.password !== password) {
    // If no user is found or the password doesn't match, return an error
    return res.status(400).json({ error: "Incorrect email/username or password" });
  }

  // If user is found and password matches, return success message and user's name
  return res.status(200).json({ msg: "User Logged in Successfully", username: user.name });
};


module.exports = { handleUserSignup, handleUserLogin };
