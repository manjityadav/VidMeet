import httpStatus from "http-status";
import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import crypto from "crypto";
import { Meeting } from "../models/meeting.model.js";

/**
 * @desc User Login
 * @route POST /api/v1/users/login
 */
const login = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res
      .status(httpStatus.BAD_REQUEST)
      .json({ message: "Please provide both username and password" });
  }

  try {
    const user = await User.findOne({ username });

    if (!user) {
      return res
        .status(httpStatus.NOT_FOUND)
        .json({ message: "User not found" });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      return res
        .status(httpStatus.UNAUTHORIZED)
        .json({ message: "Invalid username or password" });
    }

    const token = crypto.randomBytes(20).toString("hex");
    user.token = token;
    await user.save();

    return res
      .status(httpStatus.OK)
      .json({ token, username: user.username, name: user.name });
  } catch (error) {
    console.error("Login Error:", error);
    return res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .json({ message: "Something went wrong", error: error.message });
  }
};

/**
 * @desc User Register
 * @route POST /api/v1/users/register
 */
const register = async (req, res) => {
  const { name, username, password } = req.body;

  if (!name || !username || !password) {
    return res
      .status(httpStatus.BAD_REQUEST)
      .json({ message: "Please fill all required fields" });
  }

  try {
    const existingUser = await User.findOne({ username });

    if (existingUser) {
      return res
        .status(httpStatus.CONFLICT)
        .json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      username,
      password: hashedPassword,
    });

    await newUser.save();

    return res
      .status(httpStatus.CREATED)
      .json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Register Error:", error);
    return res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .json({ message: "Something went wrong", error: error.message });
  }
};

/**
 * @desc Get User Meeting History
 * @route GET /api/v1/users/get_all_activity
 */
const getUserHistory = async (req, res) => {
  const { token } = req.query;

  try {
    const user = await User.findOne({ token });

    if (!user) {
      return res
        .status(httpStatus.UNAUTHORIZED)
        .json({ message: "Invalid or expired token" });
    }

    const meetings = await Meeting.find({ user_id: user.username });
    return res.status(httpStatus.OK).json(meetings);
  } catch (error) {
    console.error("Get History Error:", error);
    return res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .json({ message: "Something went wrong", error: error.message });
  }
};

/**
 * @desc Add Meeting Code to History
 * @route POST /api/v1/users/add_to_activity
 */
const addToHistory = async (req, res) => {
  const { token, meeting_code } = req.body;

  if (!token || !meeting_code) {
    return res
      .status(httpStatus.BAD_REQUEST)
      .json({ message: "Missing token or meeting code" });
  }

  try {
    const user = await User.findOne({ token });

    if (!user) {
      return res
        .status(httpStatus.UNAUTHORIZED)
        .json({ message: "Invalid or expired token" });
    }

    const newMeeting = new Meeting({
      user_id: user.username,
      meetingCode: meeting_code,
    });

    await newMeeting.save();

    return res
      .status(httpStatus.CREATED)
      .json({ message: "Added code to history" });
  } catch (error) {
    console.error("Add History Error:", error);
    return res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .json({ message: "Something went wrong", error: error.message });
  }
};

export { login, register, getUserHistory, addToHistory };
