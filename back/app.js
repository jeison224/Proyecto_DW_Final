const express = require('express');
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const autenticar = require("./Auth/autenticar")

require("dotenv").config();
const port = process.env.PORT || 3100;
app.use(cors());
app.use(express.json());
async function main(){
    await mongoose.connect(process.env.DB_CONNECTION_STRING);
    console.log("Conectado a MongoDB");
}

main().catch(console.error);

app.use('/api/signup',require('./routes/signup'));
app.use('/api/login',require('./routes/login'));
app.use('/api/user', autenticar, require('./routes/user'));
app.use('/api/todos', autenticar, require('./routes/todos'));
app.use('/api/refresh-token',require('./routes/refreshToken'));
app.use('/api/signout',require('./routes/signout'));


app.get("/",(req,res)=>{
    res.send("Hola mundo");
});

app.listen(port, ()=>{
    console.log(`Server is running on port: ${port}`)
});