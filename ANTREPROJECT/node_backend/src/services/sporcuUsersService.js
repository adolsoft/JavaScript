const SporcuUsers = require('../models/SporcuUsers');

// CRUD --> Create, Read, Update, Delete

const create = async (req, res) => {
    try {
        const data = await SporcuUsers.create(req.body);
        res.json(data);
    } catch (error) {
        res.status(403).json({message:' Sporcu User could not created '});
    }
};

const findSporcu = async (req, res) => {
    try {
        const data = await SporcuUsers.find({antrenorId: req.body.antrenorId}).exec()
        res.json(data);
    } catch (error) {
        res.status(403).json({message:' SporcuUsers could not be found '});
    }
};

const update = async (req, res) => {
    try {
        const data = await SporcuUsers.updateOne(
            {_id: req.body.id}, 
            {$set: req.body}//sporcu isminde bir obje gonderiyoruz.
        ).exec(); // birinci parametler hangi id değiştireceksek onu bulutor ikinci parametre değişiklik olan kısım
        console.log(data);
        res.json(data)
    } catch (error) {
        console.log(error);
        res.status(403).json({message:' Sporcu could not be updated'});
    }
};

const remove = async (req, res) => {
    try {
        const data = await SporcuUsers.deleteOne({_id: req.body.id});
        res.json(data);
    } catch (error) {
        res.status(403).json({message:' SporcuUsers could not be deleted'});
    }
};

module.exports = { create, findSporcu, update, remove } ; // burası router içinde kullanılacak