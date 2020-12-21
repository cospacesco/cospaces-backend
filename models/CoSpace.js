const mongoose = require('mongoose');
const User = require('./User');
  
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
        members: User.toApiAllUsersSchema(this.members),
        projects: this.projects
    }
}

CoSpaceSchema.methods.toApiAddCoSpaceMemberResponseSchema = function() {
    return {
        id: this.id,
        slug: this.slug,
        name: this.name,
        picture: this.picture,
        lead_user: this.lead_user.toApiUserSlimSchema(),
        members: User.toApiAllUsersSchema(this.members)
    }
}

module.exports = mongoose.model( 'CoSpace', CoSpaceSchema, 'cospaces'); 
