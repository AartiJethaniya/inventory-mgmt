const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name:{
        type : String,
        required : [true,"Please add a name"]
    },
    email:{
        type : String,
        required : [true,"Please add a email"],
        unique : true,
        trim : true,
        match : [/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,'please enter valid email'],
    },
    password:{
        type : String,
        required : [true,"Please add a password"],
        minLength : [6, "Password must be up to 6 characters"],
        maxLength : [23, "Password must not be more then 23 characters"],
    },
    photo:{
        type : String,
        required : [true,"Please add a photo"],
        default : "https://i.ibb.co/4pDNDk1/avatar.png",
    },
    phone:{
        type : String,
        default : "+91"
    },
    bio:{
        type : String,
        required : [true,"Please add a name"],
        maxLength : [250, "Bio must not be more then 250 characters"],
        default : 'bio'
    },
},{
    timestamps: true,
})

const User = mongoose.model("User", userSchema)

module.exports= User