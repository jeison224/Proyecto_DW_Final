const router = require("express").Router();
const { jsonResponse } = require("../lib/jsonRespons");
const User = require("../schema/user");

router.post("/", async (req, res) => {
  const { nombre, usuario, contraseña } = req.body;

  if (!!!nombre || !!!usuario || !!!contraseña) {
    return res.status(400).json(
      jsonResponse(400, {
        error: "Campos Requeridos",
      })
    );
  }
  try {
    const user = new User();
    const exists = await user.usuarioExist(usuario);
    if (exists) {
      return res.status(400).json(
        jsonResponse(400, {
          error: "Usuario ya existe",
        })
      );
    }
    const newUser = new User({ usuario, nombre, contraseña });
    newUser.save();
    res
      .status(200)
      .json(jsonResponse(200, { message: "Usuario creado con exito" }));
  } catch (error) {
    console.log(error);
    res.status(500).json(
      jsonResponse(500, {
        error: "Error al crear el usuario",
      })
    );
  }
});
module.exports = router;
