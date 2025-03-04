const { login, signup } = require("../Service/authService");

const loginController = async (req, res) => {
    const { username, password } = req.body;
    //console.log(username, password);
    try {
        const respuesta = await login(username, password);
        
        if (respuesta.status === 200) {
            res.status(respuesta.status).json(respuesta);
        } else {
            res.status(500).json({ message: "Error interno del servidor 2892198" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
const signupController = async (req, res) => {
    const { username, password } = req.body;
    console.log(username
        , password
    );
    try {
        const respuesta = await signup(username, password);
        //console.log(respuesta);
        if (respuesta.status === 201) {
            console.log(respuesta);
            res.status(respuesta.status).json(respuesta);
        } else {
            res.status(500).json({ message: "Error interno del servidor23" });
           
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    loginController,
    signupController
};