const { jsonResponse } = require("../lib/jsonRespons");
const getTokenHeader = require("./getTokenHeader");
const { verifyAccessToken } = require("./verificarTokens");

function autenticar(req, res, next) {
    const token = getTokenHeader(req.headers);
    if (token) {
        const decoded = verifyAccessToken(token);
        if (decoded) {
            req.user = { ...decoded.user };
            next();
        } else {
            res.status(401).json(
                jsonResponse(401, {
                    message: "Token no proporcinado "
                })
            );
        }
    } else {
        res.status(401).json(
            jsonResponse(401, {
                message: "Token no proporcinado "
            })
        );
    }
}
module.exports = autenticar;