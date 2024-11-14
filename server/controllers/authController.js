const {authenticateUser} = require('../services/authService.js')
const jwt = require('jsonwebtoken')

const JWT_SECRET = '147893256qwertyuioplkjhgfdsazxcvb'

exports.login = async(req, res)=>{
    const {username, password} = req.body

    try{
        const auth = await authenticateUser(username,password)

        if(auth.success){
            const token = jwt.sign({username:auth.user.username}, JWT_SECRET,{expiresIn:'1h'})
            res.json({success:true, message:auth.message, token})
            
        }else{
            res.status(200).json({success:false, message:auth.message})
        }
    }catch(error){
        res.status(200).json({success:false, message:'Internal server error while logging in.'})
    }
}