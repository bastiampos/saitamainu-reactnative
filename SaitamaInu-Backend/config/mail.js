import nodemailer from 'nodemailer'
import { config } from 'dotenv'
config()

const transport = nodemailer.createTransport({
    service: 'gmail',
    // auth: {
    //     user: process.env.EMAIL_USERNAME,
    //     pass: process.env.EMAIL_PASSWORD
    // },
    auth: {
        user: 'saitamainudev@gmail.com',
        pass: 'saitama123'
    },
    tls: {rejectUnauthorized: false}
})

export default transport


// port: 465,
// host: 'smtp.gmail.com',
// https://www.youtube.com/watch?v=JJ44WA_eV8E