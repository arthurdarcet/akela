import mongoose from 'mongoose';


var TeamSchema = new mongoose.Schema({
    name: {type: String},
    users: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}]
});

export default mongoose.model('Team', TeamSchema);
