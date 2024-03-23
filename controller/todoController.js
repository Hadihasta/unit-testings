const { Todo } = require("../models");

class TodoController {
  static findAll = async (req, res) => {
    try {
      let todo = await Todo.findAll(req.query);

      todo = {
        tittle: Todo.tittle,
        day: Todo.day,
        place: Todo.place,
        createdAt: Todo.createdAt,
        updatedAt: Todo.updatedAt,
      };

      // cara agar update dan created at tidak muncul saat di find all

      if (createdAt) {
        createdAt === null;
      }

      if (updatedAt) {
        updatedAt === null;
      }

      // delete Todo.createdAt

      res.status(200).json(todo);

      console.log(todo);
    } catch (error) {
      console.log(error);
    }
  };

  static findAllDetail = async (req, res) => {
    try {
      let todo = await Todo.findAll(req.query);

      res.status(200).json(todo);
    } catch (error) {
      console.log(error);
    }
  };

  static create = async (req, res) => {
    try {
      const todo = await Todo.create(req.body);

      console.log(todo);

      res.status(201).json({ message: "TODO LIST SUCCESS ADDED", data: todo });
    } catch (error) {
      console.log(error);
    }
  };

  static delete = async (req, res) => {
    try {
        let id = req.params
        
         await Todo.destroy({
        where : {
            ...id,
        },})
        const fixId = id
    //   kalau gk ada di database ?
        if (!fixId) {
            res.status(404).json({Message :"List NOT FOUND"})
    }else{ 
        res.status(200).json({ message: "TODO LIST DELETED" })}
 
        

       
    
    } catch (error) {
      console.log(error);
    }
  };
}

module.exports = TodoController;
