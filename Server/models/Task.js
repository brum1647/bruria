const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');

const taskSchema = mongoose.Schema({
    userId: {
        type: String,
        require: true
    },
    title: {
        type: String,
        require: true
    },
    complited: {
        type: Boolean
    }
});

autoIncrement.initialize(mongoose.connection);
taskSchema.plugin(autoIncrement.plugin, 'Task');

module.exports = mongoose.model('Task', taskSchema)