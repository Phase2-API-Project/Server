function errorHandling(err, req, res, next) {
    // default error
    const status = err.status || 500
    const message = err.message || "Internal Server Error"

    if(err.name === "ValidationError") {
        // validation error
        const errors = []
        for(key in err.errors) {
            errors.push(err.error[key].message)
        }
        res.status(400).json({
            message: 'Validation Error',
            errors
        })
    } else if(err.message.name === 'JsonWebTokenError') {
        res.status(status).json({ message: err.message.message })
    } else {
        res.status(status).json({ message })
    }
}

module.exports = errorHandling