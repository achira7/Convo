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

    const boyProfile = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfile = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    const newUser = new User({
      fullName,
      username,
      password,
      gender,
      profilePic: gender === "male" ? boyProfile : girlProfile,
    })

    await newUser.save()

    res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        username:newUser.username,
        profilePic:newUser.profilePic
    })

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
