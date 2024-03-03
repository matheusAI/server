const mongo = require("mongoose")

//Configurando o mongoose
    mongo.Promise = Promise.grobal;
    mongo.connect("mongodb://localhost/Users", {
    }).then(() => {
        console.log("mongodb conectador com sucesso")
    }).catch((err) => {
        console.log("houve um error ao se conectar ao mongodb: "+ err);
    })