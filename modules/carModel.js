import mongoose from 'mongoose'

const carSchema=mongoose.Schema({
    image:{
        type:String,
        required:true
     },
     model:{
        type:String,
        required:true
     },
     amount:{
        type:Number,
        required:true
     },
     year:{
        type:Number,
        required:true
     },
     carSeats:{
        type:Number,
        required:true
     },
     kmperhr:{
        type:Number,
        required:true
     }
})

const Cars=mongoose.model('cars',carSchema)
export default Cars



