const Task = require('../models/Task')

const createTask = async (req, res) => {
    console.log(req.body);
    const newTask = new Task(req.body);
    try {
        await newTask.save();
        console.log("task created");
        res.status(200).json({ message: 'task created', data: newTask })
    }
    catch (err) {
        res.status(400).send(err)
    }
}

const updateTask = async (req, res) => {
    try {
        console.log("Body: ", req.body)
        await Task.findByIdAndUpdate(req.body._id, { title: req.body.title, complited: req.body.complited }, { new: true })
        res.status(200).json({ message: 'task updated', data: req.body })
    }
    catch (err) {
        res.status(400).send(err)
    }
}

const deleteTask = async (req, res) => {
    console.log(req.params.id);
    await Task.findByIdAndDelete(req.params.id, function (err, task) {
        if (err)
            res.status(400).send(err);
        else
            if (task)
                res.status(200).json({ message: 'task deleted', data: task })
            else
                res.send('not exists');
    });
}

// const alldeleteTasks = async (req, res) => {
//     console.log("fine");

//     await Task.deleteMany({ complited: false })
//     console.log("fine");
//     res.status(200).json({ message: 'task deleted' })
// }

const getTasks = async (req, res) => {
    console.log(req.params.userId);
    try {
        const tasks = await Task.find({ userId: req.params.userId });
        return res.status(200).json({ message: 'tasks found', data: tasks })
    } catch (err) {
        return res.status(400).send(err)
    }
}

module.exports = { createTask, updateTask, deleteTask, getTasks/*, alldeleteTasks*/ }