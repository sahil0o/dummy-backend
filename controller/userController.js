import User from "../models/userModels"

// Store user data
export const createUser = async (req, res) => {
  const { name, email } = req.body;

  try {
    const newUser = new User({ name, email });
    await newUser.save();
    res.status(201).json({ message: 'User created successfully', user: newUser });
  } catch (error) {
    res.status(400).json({ message: 'Error creating user', error });
  }
};

// Retrieve user data by email
export const getUserByEmail = async (req, res) => {
  const { email } = req.params;

  try {
    const user = await User.findOne({ email });
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(400).json({ message: 'Error retrieving user', error });
  }
};


