const { response } = require("express");

const login = async (username,password)=>{
    const URL_USER = 'http://localhost:3003/Us/users/name/';
    try {
        const respose = await fetch(URL_USER + username );
      
        if (respose.status ==200) {
            const users = await respose.json();
           
            if (users.username === username && users.password === password) {
                console.log(users.username);
                return {
                    status:200,
                    token:"token-falso"+username._id
                }
            }else{
                return {
                    status:403,
                    message:"Usuario o contraseña incorrecta"
                }
            }
              
        }else{
            return {
                status:404,
                message:"Usuario o contraseña incorrecta"
            }
        }
    }
    catch (error) {
        return {
            status:500,
            message: error.message
        }
        
    }

}
const signup = async (username,password)=>{
    const URL_USERs = 'http://localhost:3003/Us/users/';
    //console.log(response)
    try {
        const respose = await fetch(URL_USERs,{
            mothod:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({username,password})
        });
        console.log(respose);
        if (respose.status === 201) {
            return {
                status:201,
                message:"Usuario creado"
            }
        }else{
            return {
                status:500,
                message:"Error al crear usuario"

            }
        }

        
    } catch (error) {
        return {
            status:500,
            message: error.message
        }
        
        
    }




}

module.exports = {
    login,
    signup
}