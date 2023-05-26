import mongoose from 'mongoose'
const connectionDB=()=>{
    mongoose.connect(process.env.MONG_URL).
    then(()=>{
        (console.log('Database connected successfully'))
    })
}
export default connectionDB