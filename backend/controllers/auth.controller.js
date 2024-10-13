import User from '../models/user.model.js';
import bcrypt from "bcryptjs";

export const signup = async (req, res) => {
  try {
    const { fullName, username, password, confirmPassword, gender } = req.body;

    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords do not match." });
    }

    const user = await User.findOne({ username });

    if (user) {
      return res.status(400).json({ error: "User already exists." });
    }
    //hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const boyProfile = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfile = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    const newUser = new User({
      fullName,
      username,
      password: hashedPassword,
      gender,
      profilePic: gender === "male" ? boyProfile : girlProfile,
    })

    if(newUser){
      //Generate JWT
      res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        username:newUser.username,
        profilePic:newUser.profilePic
    })
    }else{
      res.status(400).json({error: "Invalid user data"}); 
    }

    await newUser.save()

    

  } catch (error) {
    console.log(error)
    res.status(500).json({error:"Internal Server Error"})
  }
};

export const login = (req, res) => {
  console.log("Login User");
};

export const logout = (req, res) => {
  console.log("Logout User");
};
