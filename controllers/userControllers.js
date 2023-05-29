import Users from "../modules/userModels.js";
import generateToken from "../ustulits/generateToken.js";

export const register=async(req,res)=>{
    const {name,email,password,phone,address}=req.body;
    const userExist=await Users.findOne({email})
    if (userExist) {
        res.status(400).json({message:'user allready exist'})
        
    }else{
        const user=Users.create({
            name,email,password,phone,address
        })
        if (user) {
            res.status(201).json({
                _id:user._id,
                name:user.name,
                email:user.email,
                password:user.password,
                phone:user.phone,
                address:user.address,
                token:generateToken(user._id),
            })
            
        }else{
            res.status(401).json({message:'invalid data'})
        }
    }
}
export const login=async (req,res)=>{
    const {email,password}=req.body;
    const user=Users.findOne({email});
    if (user && password==user.password) {
        res.status(200).json({
            _id:user._id,
            name:user.name,
            email:user.email,
            password:user.password,
            phone:user.phone,
            address:user.address,
            token:generateToken(user._id),
        })
        
    }else{
        res.status(404).json({message:'invalid useror password'})
    }
}

export const getuserProfile =async(req,res)=>{

    const {id,token}=req.body;
    const user=await Users.findById(id);
    if (user) {
        res.status(200).json({
            _id:user._id,
            name:user.name,
            email:user.email,
            password:user.password,
            phone:user.phone,
            address:user.address,
            token
        })
        
    }else{
        res.status(404).json({message:'invalid Data'})
    }

}