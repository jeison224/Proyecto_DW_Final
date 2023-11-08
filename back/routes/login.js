const router = require("express").Router();
const { jsonResponse } = require("../lib/jsonRespons");
const User = require("../schema/user");
const getinfoUsuario = require("../lib/infoUsuario");

router.post("/", async (req, res) => {
    const { usuario, contraseña } = req.body;

    if (!!!usuario || !!!contraseña) {
        return res.status(400).json(
            jsonResponse(400, {
                error: "Campos Requeridos"
            })
        );
    }
    const user = await User.findOne({ usuario });
    if (user) {
        const contraseñaCorrecta = await user.compararContra(contraseña, user.contraseña);
        if (contraseñaCorrecta) {
            const accessToken = user.crearAccesssToken();
            const refreshToken = await user.crearRefreshToken();
          
            res
                .status(200).
                json(jsonResponse(200, { user:getinfoUsuario(user), accessToken, refreshToken }));

        }else{
            res.status(400).json(
                jsonResponse(400, {
                    error: "Usuario o contraseña incorrecto",
                })
            );
        }
    } else {
        res.status(400).json(
            jsonResponse(400, {
                error: "Usuario no encontrado",
            })
        );
    }

});
module.exports = router