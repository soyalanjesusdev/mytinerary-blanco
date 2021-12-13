const bcryptjs = require("bcryptjs");
const User = require("../models/User");
const jwt = require("jsonwebtoken");

const authController = {
    signUpUser: async (req, res) => {
        const {
            name,
            lastName,
            photo,
            email,
            password,
            google,
            country
        } = req.body;

        if (password === "") {
            password = "null";
        }
        try {
            const userExists = await User.findOne({
                email,
            });
            if (userExists) {
                res.json({
                    success: false,
                    error: "The user already exists",
                    response: null,
                });
            } else {
                const passwordHashed = await bcryptjs.hashSync(password, 10);
                const newUser = new User({
                    name,
                    lastName,
                    photo,
                    email,
                    password: passwordHashed,
                    google,
                    country,
                });

                await newUser.save();
                res.json({
                    success: false,
                    error: err,
                    response: null,
                });
            }
        } catch (err) {
            res.json({
                success: false,
                error: err,
                response: null,
            });
        }
    },

    signInUser: async (req, res) => {
        const {
            email,
            password
        } = req.body;
        try {
            const emailExists = await User.findOne({
                email,
            });
            if (emailExists) {
                let passwordSucceed = bcryptjs.compareSync(
                    password,
                    emailExists.password
                );
                if (passwordSucceed) {
                    const token = jwt.sign({
                        ...emailExists
                    }, process.env.SECRET_KEY);
                    console.log(token);
                    res.json({
                        success: true,
                        response: {
                            email,
                        },
                        error: null,
                    }); //respuesta comparala con {email}
                } else {
                    res.json({
                        success: false,
                        response: null,
                        error: "Password is incorrect",
                    });
                }
            } else {
                res.json({
                    success: false,
                    response: null,
                    error: "Email doesn't exist",
                });
            }
        } catch (error) {
            res.json({
                success: false,
                response: null,
                error: "Email or password doesnt exist",
            });
        }
    },

    readUser: (req, res) => {
        User.find().then((response) => {
            res.json({
                response,
            });
        });
    },
};
module.exports = authController;