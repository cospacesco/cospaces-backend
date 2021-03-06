const mongoose = require('mongoose'); 
  
const EngagementSchema = new mongoose.Schema({ 
    id: Number,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        autopopulate: true
    },
    sub_task: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SubTask',
        autopopulate: true
    },
    status: {
        type: String,
        enum: ['STARTED', 'REVIEW', 'COMPLETE']
    },
    submission_content: String,
    github_pr_url: String

}, { timestamps: true }); 

EngagementSchema.plugin(require('mongoose-autopopulate'));

EngagementSchema.statics.toApiAllEngagementsSchema = function (array) {
  return array.map((engagement) => engagement.toApiEngagementSchema());
};

EngagementSchema.methods.toApiEngagementSchema = function() { 
  return {
    id: this.id,
    updatedAt: this.updatedAt,
    user: this.user.toApiUserSlimSchema(),
    sub_task: this.sub_task.toApiSubTaskSchema(),
    status: this.status,
    submission_content: this.submission_content,
    github_pr_url: this.github_pr_url
    
  };
}

EngagementSchema.statics.toApiEngagementSlimSchema = function(engagement) { 
  return {
    id: engagement.id,
    updatedAt: engagement.updatedAt,
    status: engagement.status,
    submission_content: engagement.submission_content,
    github_pr_url: engagement.github_pr_url
    
  };
}

module.exports = mongoose.model( 'Engagement', EngagementSchema, 'engagements'); 
