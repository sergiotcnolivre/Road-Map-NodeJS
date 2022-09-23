const {createHash} = require('crypto');

function newHash(password) {
    return createHash('sha256').update(password).digest('hex')
}

console.log(newHash("senha"))

class Usuario {
    constructor(nome, senha) {
        this.nome = nome;
        this.hash = newHash(senha);
    }

    autentica(nome, senha){
        if (nome === this.nome && this.hash === newHash(senha)){
            console.log("Usuário autenticado com sucesso!");
            return true;
        }

        console.log("Usuário ou senha incorretos.");
        return false;
    }
}

const usuario = new Usuario('joao manoel', 'minhaSenha')

console.log(usuario)
// Caso de sucesso
usuario.autentica('joao manoel', 'minhaSenha')

// Casos de fracasso

usuario.autentica('jm', 'minhaSenha')
usuario.autentica('joao manoel', 'minhasenha')