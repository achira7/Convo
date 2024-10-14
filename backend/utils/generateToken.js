import jwt from "jsonwebtoken"

const genrateTokenAndSetCookie = (userId, res) => {
    const token = jwt.sign({userId}, process.env.JWT_SECRET, {
        expiresIn: '15d'
    });

    res.cookie("jwt", token, {
        maxAge: 15 * 24 * 60 * 60 * 1000, //milliseconds
        httpOnly: true,  //prevents XSS attacks
        sameSite: "strict", //Preents CSRF attack
        secure: process.env.NODE_ENV !== "development"
    });
};

export default genrateTokenAndSetCookie;