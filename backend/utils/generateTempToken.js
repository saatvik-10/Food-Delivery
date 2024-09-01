import jwt from "jsonwebtoken";

const generateTempToken = (res, userId) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "5m",
  });
};

export default generateTempToken;
