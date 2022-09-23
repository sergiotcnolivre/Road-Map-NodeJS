import express from 'express'
import olaCDFS from './middleware/ola'
import tchauCDFS from './middleware/tchau'
import estaAutenticado from './middleware/autentica'

const app = express()
const port = 3000

const ola = [estaAutenticado, olaCDFS, tchauCDFS]

app.get('/ola', ola)

app.listen(port, () => {
    console.log(`Express rodando em http://localhost:${port}`)
})


// Após consolidar o conceito de middleware em API estudar Kafka, onde a base para seu funcionamento é a utilização de middleware.