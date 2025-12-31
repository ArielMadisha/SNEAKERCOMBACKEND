const notFound = (req, res, next) => {
    const error = new Error(`Not found - ${req.originalUrl}`)
    res.status(404)
    next(error)
}


const errorHandler = (err, req, res, next) => {
    res.status(500).json({
        message: err.message
    })
}


module.exports = { notFound, errorHandler }