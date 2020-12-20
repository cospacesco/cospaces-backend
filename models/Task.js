const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({ 
    id: Number,
    name: String,
    sub_tasks: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'SubTask',
            autopopulate: true
        }
    ],
    
}, { timestamps: true });

TaskSchema.plugin(require('mongoose-autopopulate'));

TaskSchema.methods.toApiTaskSchema = function() { 
    return {
        id: this.id,
        name: this.name,
        sub_tasks: this.sub_tasks,
    };
  }

module.exports = mongoose.model( 'Task', TaskSchema, 'tasks'); 
