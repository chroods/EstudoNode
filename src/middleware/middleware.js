exports.middlewareGlobal = (req, res,next)=>{
    res.locals.umaVariavelLocal = 'este é o valor';
    /*
    if(req.body.cliente){
        console.log(`vi que vc postou ${req.body.cliente}`)
    }
    */
    next()
}