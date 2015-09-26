import mongoose from 'mongoose';


var RecieptSchema = new mongoose.Schema({
    amount: {type: Number},
    description: {type: String},
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    credit_card: {type: mongoose.Schema.Types.ObjectId, ref: 'CreditCard'}
});

export default mongoose.model('Reciept', RecieptSchema);
