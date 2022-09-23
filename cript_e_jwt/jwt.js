import jwt from 'jsonwebtoken';

const chaveSecreta = "chaveSuperSecreta"

const token = jwt.sign(
    {
        nome: "sergio",
        empresa: "ioasys"
    }, chaveSecreta
);

console.log(token)

const tokenDecodificado = jwt.verify(token, chaveSecreta)

console.log(tokenDecodificado)