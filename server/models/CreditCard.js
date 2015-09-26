import mongoose from 'mongoose';


var CreditCardSchema = new mongoose.Schema({
    last4: {type: String},
    name: {type: String},
    team: {type: mongoose.Schema.Types.ObjectId, ref: 'Team'}
});

export default mongoose.model('CreditCard', CreditCardSchema);
