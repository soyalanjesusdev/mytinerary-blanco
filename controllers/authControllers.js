const bcryptjs = require("bcryptjs");
const User = require("../models/User");
const jwt = require("jsonwebtoken");

const authController = {
    signUpUser: async (req, res) => {
        const {
            name,
            lastName,
            email,
            password,
            country,
            photo,
            google,
        } = req.body;

        if (password === "") {
            password = null
        }
        try {
            const userExists = await User.findOne({
                email,
            });
            if (userExists) {
                res.json({
                    success: false,
                    error: "The email is already registered",
                    response: null,
                });
            } else {
                const passwordHashed = bcryptjs.hashSync(password, 10);
                const newUser = new User({
                    name,
                    lastName,
                    email,
                    password: passwordHashed,
                    country,
                    photo,
                    google,
                });

                await newUser.save();
                const token = jwt.sign({ ...newUser }, process.env.SECRET_KEY)
                res.json({ success: true, response: { newUser, token }, error: null });
            }
        } catch (err) {
            res.json({
                success: false,
                error: "Email doesn't exist",
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
            const passwordExists = await User.findOne({email})
            

         
            
            if (passwordExists) {
            
                const passwordSucceed = bcryptjs.compareSync(
                    password,
                    passwordExists.password
                );
            
                if (passwordSucceed) {
                   
                    const token = jwt.sign({
                        ...passwordExists
                    }, process.env.SECRET_KEY);
              
                   
                    res.json({
                        success: true,
                        response: [{
                            name: passwordExists.name,
                            lastname: passwordExists.lastname,
                            email: passwordExists.email,
                            country: passwordExists.country,
                            photo: passwordExists.photo,
                            token: token,
                        },
                        ],
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

    token: (req, res) => {
        res.json(req.user)
    },
};
module.exports = authController;