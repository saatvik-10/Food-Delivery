import User from '../models/userModel.js';
import asyncHandler from 'express-async-handler';
import generateToken from '../utils/generateToken.js';

const registerUser = asyncHandler(async (req, res) => {
  const { name, phone, password, date, address } = req.body;

  const userExists = await User.findOne({ phone });

  if (userExists) {
    res.status(400);
    throw new Error('User already Exists');
  }

  const user = await User.create({
    name,
    phone,
    password,
    date,
    address,
  });

  if (user) {
    generateToken(res, user._id);
    res.status(201).json({
      _id: user._id,
      name: user.name,
      phone: user.phone,
      date: user.date,
      address: user.address,
    });
  } else {
    res.status(400);
    throw new Error('Invalid user data ');
  }

  res.status(200).json({ message: 'User Registered Successfully' });
});

const loginUser = asyncHandler(async (req, res) => {
  const { phone, password } = req.body;

  const user = await User.findOne({ phone });

  if (user && (await user.matchPassword(password))) {
    generateToken(res, user._id);
    res.status(201).json({
      id: user._id,
      name: user.name,
      phone: user.phone,
    });
  } else {
    res.status(400);
    throw new Error('Invalid contact or password');
  }
});

const getUser = asyncHandler(async (req, res) => {
  const user = {
    _id: req.user._id,
    name: req.user.name,
    phone: req.user.phone,
    address: req.user.address,
  };

  res.status(200).json(user);
});

const updateUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    user.name = req.body.name || user.name;
    user.phone = req.body.phone || user.phone;

    if (req.body.password) {
      user.password = req.body.password;
    }

    user.address = req.body.address || user.address;

    const updatedUser = await user.save();

    res.status(200).json({
      _id: updatedUser._id,
      name: updatedUser.name,
      phone: updateUser.phone,
      address: updatedUser.address,
    });
  } else {
    res.status(400);
    throw new Error('User not found');
  }
});

export { loginUser, registerUser, updateUser, getUser };
