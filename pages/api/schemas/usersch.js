const mongoose = require('mongoose');
const Schema = mongoose.Schema

const UserSchema = new Schema({
    id:{type:String},
    name:{type:String,},
    email:{type:String,},
    pass:{type:password,},
    image:{type:String,},
    worlds:{
        owned:{type:Array},
        liked:{type:Array},
    },
    created:{type:Date.now},
    banned:{type:Boolean},
    gtime:{type:Number},
})

const UserModel = mongoose.model("user", UserSchema)
module.exports = UserModel