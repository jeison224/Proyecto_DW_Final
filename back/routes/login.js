const router = require("express").Router();
const { jsonResponse } = require("../lib/jsonRespons");

router.post("/", (req,res) => {
    const {usuario,contraseña} = req.body;

    if(!!!usuario || !!!contraseña){
        return res.status(400).json(
            jsonResponse(400, {
                error: "Campos Requeridos"
            })
        );
    }
    const accessToken= "access_token";
    const refreshToken = "refresh_token";
    const user={
        id:'1',
        nombre:"jhon",
        usuario:"jhon1"
    };
    res
    .status(200).json(jsonResponse(200, {user,accessToken,refreshToken}));

});
module.exports=router