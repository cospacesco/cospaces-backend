const mongoose = require('mongoose');
  
const CoSpaceSchema = new mongoose.Schema({ 
    id: Number,
    slug: String,
    name: String,
    picture: String,
    lead_user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        autopopulate: true
    },
    members: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            autopopulate: true
        }
    ],
    projects: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Project',
            autopopulate: true
        }
    ]
    
}, { timestamps: true });

CoSpaceSchema.plugin(require('mongoose-autopopulate'));

CoSpaceSchema.methods.toApiCoSpaceSchema = function() {
    return {
        id: this.id,
        slug: this.slug,
        name: this.name,
        picture: this.picture,
        lead_user: this.lead_user.toApiUserSlimSchema(),
        members: this.members,
        projects: this.projects
    }
}

module.exports = mongoose.model( 'CoSpace', CoSpaceSchema, 'cospaces'); 
