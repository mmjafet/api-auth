const {users} = require("../data/users.js");


//funcion para la primer ruta 
//get --> /get-users
const getAllUsers = ()=>{
    return users;
}

const login = (username,password)=>{
    const user = getUserByNameAndPwd(username,password);
    if (user){
        var token = `token-falso-${user.id}`;
        return {token};
    }
    return {message:"usuario o contraseña incorrectos"};
}

const getUserByNameAndPwd = (username,password)=>{
    return users.find(usr=>usr.username === username && usr.password === password);
}



module.exports = {
    getAllUsers,
    login
}