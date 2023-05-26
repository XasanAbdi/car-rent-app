import mongoose from 'mongoose'
const userSchema=mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    phone:{
        type:Number,
        require:true
    },
    address:{
        type:String,
        require:true
    },
    isAdmin:{
        type:String,
        require:true,
        default:false
    }

})
const Users=mongoose.model("users",userSchema)
export default Users