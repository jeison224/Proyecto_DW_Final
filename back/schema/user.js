const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const { generarAccessToken, generarRefreshToken } = require("../Auth/generarToken");
const getinfoUsuario = require("../lib/infoUsuario");
const Token = require("../schema/token")

const UserSchema = new mongoose.Schema({
  id: { type: Object },
  usuario: { type: String, require: true, unique: true },
  contraseña: { type: String, require: true },
  nombre: { type: String, require: true },
});
UserSchema.pre("save", function (next) {
  if (this.isModified("contraseña") || this.isNew) {
    const document = this;
    bcrypt.hash(document.contraseña, 10, (err, hash) => {
      if (err) {
        next(err);
      } else {
        document.contraseña = hash;
        next();
      }
    });
  } else {
    next();
  }
});
UserSchema.methods.usuarioExist = async function (usuario) {
  const result = await mongoose.model("User").find({ usuario });
  return result.length > 0;
};
UserSchema.methods.compararContra = async function (contraseña, hash) {
  const same = await bcrypt.compare(contraseña, hash);
  return same;
};
UserSchema.methods.crearAccesssToken = function(){
  return generarAccessToken(getinfoUsuario(this));

};
UserSchema.methods.crearRefreshToken = async function(){
  const refreshToken=generarRefreshToken(getinfoUsuario(this));
  try {
    await new Token({token: refreshToken}).save();
    return refreshToken;
  } catch (error) {
    console.log(error);
  }
};

module.exports = mongoose.model("User", UserSchema);
