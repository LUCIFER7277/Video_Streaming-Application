class ApiError extends Error {
    constructer(
        statusCode,
        message= "Somrthing went wrong",
        errors = [],
        statck = ""
    ){
        super(message)
        this.statusCode = statusCode
        this.data = null
        this.message = message
        this.success = false;
        this.errors = errors

        if(statck) {
            this.stack = statck
        }
        else {
            Error.captureStackTrace(this, this.constructer)
        }
    }
}

export {ApiError};