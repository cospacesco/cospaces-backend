const mongoose = require('mongoose');

const SubTaskSchema = new mongoose.Schema({ 
    id: Number,
    name: String,
    github_issue_url: String
    
}, { timestamps: true });

SubTaskSchema.plugin(require('mongoose-autopopulate'));

SubTaskSchema.methods.toApiSubTaskSchema = function() { 
    return {
        id: this.id,
        name: this.name,
        github_issue_url: this.github_issue_url
    };
  }

module.exports = mongoose.model( 'SubTask', SubTaskSchema, 'sub_tasks'); 
