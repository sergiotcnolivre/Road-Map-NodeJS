function olaCDFS(req, res, next) {
    res.write('Olá, CDFS')
    next()
}

export default olaCDFS