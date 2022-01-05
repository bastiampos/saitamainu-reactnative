import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'
import User from '../models/User.js'
import transport from '../config/mail.js'

const authentication = {
    newUser: (req, res) => {
        const { firstname, lastname, email, password } = req.body

        let hashedPassword = bcryptjs.hashSync(password)
        
        const userToAdd = new User({
            fullname: `${firstname} ${lastname}`, 
            email, 
            password: hashedPassword,
            activation: {
                code: Math.round(Math.random()*999999),
                expiration: Date.now() + 86400000,
            }
        })

        const sendEmail = (email, fullname, code) => {
            console.log(email, fullname, code)
            let mailOptions = {
                from: 'Saitama Inu <bastiampos.job@gmail.com',
                to: email,
                subject: 'Welcome to Saitama Inu',
                html: `<div>
                    <img style="width: 100%" src="https://i.imgur.com/EIpCn1E.png" alt="Saitama Inu banner" />
                    <h1>Activate your SaitamaInu account</h1>
                    <p>${fullname} here is your code to complete yout process</p>
                    <h2 style="color: #BDB76B">${code}</h2>
                    <h4>Security Tips:</h4>
                    <p>*Never give your passpowrd to anyone</p>
                    <p>*Never call any phone number for someone claiming to be Saitama Inu Support</p>
                    <p>*Never send any money to anyone claiming to be a member of Saitama Inu team</p>
                    <p>Bookmark <a href="https://saitamatoken.com">www.saitamatoken.com</a> and use <a href="https://saitamatoken.com">https://saitamatoken.com</a></p>
                    <br></br>
                    <p>If you don't recognize this activity, please contact our costumer support immediately at <a href="https://saitamatoken.com/support" style="color: #BDB76B">https://saitamatoken.com/support</a>
                    <br></br>
                    <p>Saitama Inu Team</p>
                    <p>This is an automated message, please don't reply</p>
                    <br></br>
                    <div>
                        <p style="text-align: center">2017 - 2021 Saitamatoken.com All Rights Reserved</p>
                        <p style="text-align: center">URL: <a style="color: #BDB76B" href="https://saitamatoken.com">www.saitamatoken.com</a></p>
                    </div>
                </div>`
            }
    
            transport.sendMail(mailOptions, (err, info) => {!err ? res.json({response: 'Mail enviado'}) : console.log(err)})
        }

        User.findOne({ email: email })
            .then(user => {
                if (user) throw new Error('Email already in use')
                userToAdd.save()
                sendEmail(userToAdd.email, userToAdd.fullname, userToAdd.activation.code)
                let userToken = jwt.sign({ ...userToAdd }, process.env.SECRETORKEY)
                res.json({
                success: true,
                user: {
                    fullname: userToAdd.fullname,
                    email: userToAdd.email,
                    token: userToken,
                    code: userToAdd.activation.code,
                    _id: userToAdd._id
                },
                response: 'You are registered now',
                error: null
                })
            })
            .catch(error => res.json({ success: false, error: error.message, user: null, response: null }))
    },

    userSingIn: (req, res) => {
        const { email, password } = req.body

        User.findOne({ email: email })
            .then(user => {
                if (!user) throw new Error('Incorrect email or password -e')
                let passMatch = bcryptjs.compareSync(password, user.password)
                if (!passMatch) throw new Error('Incorrect email or password -p')
                let userToken = jwt.sign({ ...user }, process.env.SECRETORKEY)
                res.json({
                success: true,
                user: {
                    fullname: user.fullname,
                    email: user.email,
                    token: userToken,
                    _id: user._id
                },
                response: 'You are logged now'
                })
            })
            .catch(error => res.json({ success: false, response: error.message, user: null }))
    },

    // verifyToken: (req, res) => {
    //     res.json({
    //         success: true,
    //         user: {
    //             fullname: req.user.fullname,
    //             picture: req.user.picture,
    //             email: req.user.email,
    //             rol: req.user.rol,
    //             username: req.user.username,
    //             _id: req.user._id
    //         }
    //     })
    // },
}

export default authentication