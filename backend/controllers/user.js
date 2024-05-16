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
  const { email, password } = req.body;

  const existingUser = await User.findOne({ email, password });
  if (!existingUser) {
    return res.status(400).json({ error: "Incorrect email or password" });
  }
  return res.status(200).json({ msg: "User Logged in Successfully" });
};

module.exports = { handleUserSignup, handleUserLogin };
