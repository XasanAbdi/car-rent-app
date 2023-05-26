import express from 'express'
import connectionDB from './Database/db.js'
import userRouters from './userRouters/userRouters.js'
import dotenv from 'dotenv'
dotenv.config()
connectionDB()
const app =express()
app.use(express.json())
app.use('/api/users',userRouters)








const port= process.env.port || 5000
app.listen(port,()=>{
    console.log(`Server is runing on port${port}`)
})