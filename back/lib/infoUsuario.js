function getinfoUsuario(user){
    return{
        usuario: user.usuario,
        nombre: user.nombre,
        id: user.id || user._id,
    };
}
module.exports=getinfoUsuario;