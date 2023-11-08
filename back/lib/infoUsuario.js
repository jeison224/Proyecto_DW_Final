function getinfoUsuario(user){
    return{
        usuario: user.usuario,
        nombre: user.nombre,
        id: user.id,
    };
}
module.exports=getinfoUsuario;