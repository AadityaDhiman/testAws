import {  model, Schema } from 'mongoose'

const userSchema = new Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String
    }
});

const User =  model('users', userSchema, 'users')

export default User;