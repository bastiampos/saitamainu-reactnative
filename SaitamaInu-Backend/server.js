import express from 'express'
import passport from 'passport'
import mongoose from 'mongoose'
import cors from 'cors'
import { config } from 'dotenv'
config()
import './config/passport.js'
import router from './routes/main.js'
 
const app = express()
app.use(passport.initialize());
 
mongoose.connect(process.env.MONGODB, { useUnifiedTopology: true, useNewUrlParser: true })
   .then(() => console.log('database connected'))
   .catch(error => console.log(error))
 
app.use(cors())
app.use(express.json())
 
app.use('/api', router)
 
app.listen(4000, () => console.log('Server listening on port 4000'))