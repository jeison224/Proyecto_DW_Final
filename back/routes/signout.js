const getTokenHeader = require("../Auth/getTokenHeader");
const { jsonResponse } = require("../lib/jsonRespons");
const Token = require("../schema/token");
const router = require("express").Router();
router.delete("/",async (req,res) => {
    try {
        const refreshToken = getTokenHeader(req.headers)
        if(refreshToken){
            await Token.findOneAndDelete({token: refreshToken})
            res.status(200).json(jsonResponse(200, { message: "Token eliminado"}));
            return;
        }
    } catch (error) {
        console.log(error);
        res.status(500).json(jsonResponse(500, { message: "Error en el Servidor"}));
    }
res.send("signout")});
module.exports=router