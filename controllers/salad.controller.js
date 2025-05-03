const {Salad} = require('../models/index')

module.exports.createSalad = async(req,res,next) =>{
    try {
        const {body} =  req;

        const createdSalad = await Salad.create(body)

        return res.status(201).send(createdSalad);
    } catch (error) {
        next(error)
    }
}

module.exports.getAllSalads = async(req,res,next)=>{
    try {

        const salads = await Salad.find()

        if(!salads){
            return res.status(404).send('Salants not found =(')
        }

        return res.status(200).send(salads)

    } catch (error) {
        next(error)
    }
}

module.exports.getSalad = async(req,res,next)=>{
    try {
        const {params: {saladId}} = req;

        const serchedSalad = await Salad.findById(saladId);

        if(!serchedSalad){
            return res.status(404).send('Salad not found =(')
        }

        return res.status(200).send(serchedSalad);

    } catch (error) {
        next(error)
    }
}

module.exports.updateSalad = async(req,res,next)=>{
    try {
        const {body,params: {saladId}} = req;

        const updateSalad = await Salad.findByIdAndUpdate(saladId,body,{ returnDocument: 'after' });

        return res.status(200).send(updateSalad)
    } catch (error) {
        next(error)
    }
}

module.exports.deleteSalad = async(req,res,next)=>{
    try {
        const {params: {saladId}} = req;

        const deleteSalad = await Salad.findByIdAndDelete(saladId);

        if(!deleteSalad){
            return res.status(404).send('Salat not found =(')
        }

        return res.status(200).send(deleteSalad)
    } catch (error) {
        next(error)
    }
}