const Todo = require("../schema/todo");
const router = require("express").Router();
router.get("/", async (req, res) => {
    try {
        const todos = await Todo.find({ idUser: req.user.id })
        if (todos) {
            res.json(todos);
        } else {
            res.status(404).json({ error: "Todos no encontrados" });
        }
    } catch (error) {
        console.log(error)
    }
});
router.post("/", async (req, res) => {
    if (!req.body.title) {
        res.status(400).json({ error: "Titulo Requerido" })
    }
    try {
        const todo = new Todo({
            idUser: req.user.id,
            title: req.body.title,
            completed: false,
        });
        const newTodo = await todo.save();
        res.json(newTodo);
    } catch (error) {
        console.log(error)
    }
});
module.exports = router