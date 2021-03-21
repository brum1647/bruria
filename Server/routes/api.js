const router = require('express').Router()
const task = require('../controllers/userTasksCtrl')

router.post('/createTask/', task.createTask)
router.get('/deleteTask/:id', task.deleteTask)
//router.get('/alldeleteTasks/', task.alldeleteTasks)
router.post('/updateTask/', task.updateTask)
router.get('/getTasks/:userId', task.getTasks)

module.exports = router