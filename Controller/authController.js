const {getAllUsers, login, createUser} = require("../Service/authService");



const loginController = async (req,res)=>{
    const {username,password} = req.body;
    const respuesta = await login(username,password);
  
}



module.exports = {getUsers,loginController,createUserController}