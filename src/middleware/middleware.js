exports.middlewareGlobal = (req, res,next)=>{
    console.log()
    
    if(req.body.cliente){
        console.log(`vi que vc postou ${req.body.cliente}`)
    }
    console.log()
    next()
}