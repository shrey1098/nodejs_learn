// req => minddleware => res
const logger = (req, res, next)=>{
    const method = req.method
    const qparams =req.query
    const url = req.url
    const time = new Date().getTime()
    console.log(method, qparams, url, time)
    next()
}


module.exports = {logger}
