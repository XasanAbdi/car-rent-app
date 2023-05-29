import JWT from 'jsonwebtoken'
 
const generateToken=(id)=>{
    return JWT.sign({id},"abc123")
}
export default generateToken