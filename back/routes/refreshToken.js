const getTokenHeader = require("../Auth/getTokenHeader");
const { jsonResponse } = require("../lib/jsonRespons");
const Token = require("../schema/token");
const { verifyRefreshToken } = require("../Auth/verificarTokens");
const { generarAccessToken } = require("../Auth/generarToken");
const router = require("express").Router();

router.post("/", async (req, res) => {
    const refreshToken = getTokenHeader(req.headers)
    if (refreshToken) {
        try {
            const found = await Token.findOne({ token: refreshToken })
            if (!found) {
                return res
                    .status(401)
                    .send(jsonResponse(401, { error: "Unauthorized" }));
            }

            const payload = verifyRefreshToken(found.token);
            if(payload){
                const accessToken = generarAccessToken(payload.user);
                return res.status(200).json(jsonResponse(200, {accessToken}));
            }else{
                return res
                    .status(401)
                    .send(jsonResponse(401, { error: "Unauthorized" }));
            }
        } catch (error) {
            return res
                    .status(401)
                    .send(jsonResponse(401, { error: "Unauthorized" }));
        }

    } else {
        res.status(401).send(jsonResponse(401, { error: "Unauthorized" }))
    }
    res.send("refresh token")
});
module.exports = router