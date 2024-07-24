import User from "../models/userModel.js";
import asyncHandler from "express-async-handler";
import generateToken from "../utils/generateToken.js";

const registerUser = asyncHandler(async (req, res) => {
  const { name, phone, password, date, address } = req.body;

  const userExists = await User.findOne({ phone });

  if (userExists) {
    res.status(400);
    throw new Error("User already Exists");
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
    throw new Error("Invalid user data ");
  }

  res.status(200).json({ message: "User Registered Successfully" });
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
    throw new Error("Invalid contact or password");
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
    user.address = req.body.address || user.address;

    const updatedUser = await user.save();

    res.status(200).json({
      _id: updatedUser._id,
      name: updatedUser.name,
      phone: updatedUser.phone,
      address: updatedUser.address,
    });
  } else {
    res.status(400);
    throw new Error("User not found");
  }
});

const forgotPassUser = asyncHandler(async (req, res) => {
  const { phone, forgotPasswordDate } = req.body;

  // console.log("Received phone:", phone);
  // console.log("Received forgotPasswordDate:", forgotPasswordDate);

  const user = await User.findOne({ phone });

  if (!user) {
    return res.status(400).json({ message: "User not found" });
  }

  const storedDate = new Date(user.date).toDateString();
  const receivedDate = new Date(forgotPasswordDate).toDateString();

  // console.log("Stored date:", storedDate);
  // console.log("Received date:", receivedDate);

  if (storedDate === receivedDate) {
    return res.status(201).json({ message: "User validated" });
  } else {
    return res.status(400).json({ message: "Date does not match" });
  }
});

// const forgotPassword = asyncHandler(async(req,res)=>{
//   const {phone} = req.body;

//   const user = await User.findOne({phone});

//   if (user){
//     if (req.body.password) {
//       user.password = req.body.password;
//     }
//     const updatedUser = await user.save();

//     res.status(200).json({
//       // password:updatedUser.password;
//         message:"Password updated successfully"
//     });
//   } else {
//     res.status(400);
//     throw new Error("User not found");
//   }
// })

export { loginUser, registerUser, updateUser, getUser, forgotPassUser };
