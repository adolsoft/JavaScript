const Todos = require('../models/Todos');

// CRUD --> Create, Read, Update, Delete

const create = async (req, res) => {
    try {
        const data = await Todos.create(req.body)
        res.json(data) // id sonuç dondurur bunu frondend geri gonderir.
    } catch (error) {
        res.status(403).json({message:' Todo Task could not created '});
    }
};

const findTodos = async (req, res) => {
    try {
        console.log("user id", req.body.userId);
        console.log("------------------");
        const data = await Todos.find({userId: req.query.userId}).exec()// burada arama işlemi yapılıyor.
        const responsData = data.map((item) => {
            return {
                id: item._id,
                userId: item.userId,
                task: item.task,
                completed: item.completed,
            };
        });
        console.log(responsData);
        res.json(responsData);
    } catch (error) {
        res.status(403).json({message:' Tasks could not be found '});
    }
};

const update = async (req, res) =>{
    try {
        const data = await Todos.updateOne(
            {_id: req.body.id}, 
            {$set: req.body.task}//task isminde bir obje gonderiyoruz.
        ).exec(); // birinci parametler hangi id değiştireceksek onu bulutor ikinci parametre değişiklik olan kısım
        res.json(data)
    } catch (error) {
        res.status(403).json({message:' Tasks could not be updated'});
    }
};

const remove = async (req, res) => {
    try {
        const data = await Todos.deleteOne({_id: req.body.id});
        res.json(data);
    } catch (error) {
        res.status(403).json({message:' Tasks could not be deleted'});
    }
}

module.exports = { create, findTodos, update, remove } ; // burası router içinde kullanılacak
