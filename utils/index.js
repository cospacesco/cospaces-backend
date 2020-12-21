const User = require('../models/User');
const SubTask = require('../models/SubTask');

async function replaceId(id, service) {
    switch (service) {
        case 'user':
            return (await User.findOne({ id }, '_id'))._id;
            break;
        case 'subTask':
            return (await SubTask.findOne({ id }, '_id'))._id;
            break;
    
        default:
            break;
    }
    
}
}

module.exports = {
    replaceId
}
