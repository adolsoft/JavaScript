const SporcuBecerileriFutbol = require('../models/SporcuBecerileriFutbol');

// CRUD --> Create, Read, Update, Delete

const create = async (req, res) => {
    try {
        const data = await SporcuBecerileriFutbol.create(req.body)
        res.json(data) // id sonuç dondurur bunu frondend geri gonderir.
    } catch (error) {
        res.status(403).json({message:' SporcuBecerileriFutbol Task could not created '});
    }
};

const findSporcu = async (req, res) => {
    try {
        const data = await SporcuBecerileriFutbol.find({sporcuId: req.body.sporcuId}).exec()// burada arama işlemi yapılıyor.
        res.json(data)
    } catch (error) {
        res.status(403).json({message:' SporcuBecerileriFutbol could not be found '});
    }
};

const update = async (req, res) => {
    try {
        const data = await SporcuBecerileriFutbol.updateOne(
            {_id: req.body.id}, 
            {$set: req.body}//task isminde bir obje gonderiyoruz.
        ).exec(); // birinci parametler hangi id değiştireceksek onu bulutor ikinci parametre değişiklik olan kısım
        res.json(data)
    } catch (error) {
        res.status(403).json({message:' SporcuBecerileriFutbol could not be updated'});
    }
};

const remove = async (req, res) => {
    try {
        const data = await SporcuBecerileriFutbol.deleteOne({_id: req.body.id});
        res.json(data);
    } catch (error) {
        res.status(403).json({message:' Tasks could not be deleted'});
    }
};


module.exports = { create, findSporcu, update, remove } ; // burası router içinde kullanılacak
