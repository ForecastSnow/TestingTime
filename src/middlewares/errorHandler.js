export const errorHandler = (req, res, error) => {

    const status = error.status ? error.status : 500;

    const message = error.message ? error.message : "algo salio como el orto"

    res.status(status).json({ message: message, error: error.error})


}