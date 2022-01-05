import mongoose from 'mongoose'
const { Schema, model } = mongoose

const User = model('user', new Schema({
   fullname: { type: String, required: true },
   email: { type: String, required: true },
   password: { type: String, required: true },
   activation: {type: {
      code: Number,
      expiration: Date
   }, required: true}
}))

export default User