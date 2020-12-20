const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({ 
    id: Number,
    slug: String,
    name: String,
    picture: String,
    tasks: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Task',
            autopopulate: true
        }
    ],
    github_repo_url: String
    
}, { timestamps: true });

ProjectSchema.plugin(require('mongoose-autopopulate'));

ProjectSchema.methods.toApiProjectSchema = function() { 
    return {
        id: this.id,
        slug: this.slug,
        name: this.name,
        picture: this.picture,
        tasks: this.tasks,
        github_repo_url: this.github_repo_url
    };
  }

module.exports = mongoose.model( 'Project', ProjectSchema, 'projects'); 
