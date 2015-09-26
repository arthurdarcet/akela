import mongoose from 'mongoose';


var UserSchema = new mongoose.Schema({
    name: {type: String}
});

export default mongoose.model('User', UserSchema);
