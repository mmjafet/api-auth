const login = async (username,password)=>{
    const URL_USER = 'http://localhost:3001/users';
    try {
        const respose = await fetch(URL_USER + username );
        if (respose.status === 200) {
            const user = await respose.json();
            if (user.username === username && user.password === password) {
                return {
                    token:"token-falso"+username.id
                }
            }else{
                return {
                    status:403,
                    message:"Usuario o contraseña incorrecta"
                }
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

module.exports = {
    login,
}