const HomeModel = require('../models/HomeModel');
/*
HomeModel.find()
.then(dados => console.log(dados))
.catch(e=> console.log(e))
*/
exports.paginaInicial = (req, res)=>{
    //req.session.usuario = {nome: 'David', logado: true}
    /*req.flash('info', 'ola Mundão!');
    req.flash('error', 'error');
    req.flash('success', 'sucesso');*/
    //console.log(req.flash('info'))
    
    res.render(`index`,{
        titulo: 'Titulo da pagina',
        numeros: [0,1,2,3,4,5,6,7,8,9]
    });
    return;
}

exports.trataPost = (req, res)=>{
    res.send(req.body);
    return;
}