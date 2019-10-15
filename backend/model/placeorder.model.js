const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const user=require('./users.model').schema;
const cakes=require('./cakes.model').schema;
//const cake=require('cake');
const schema = new Schema({
    size: { type: String },
    spongetype: { type: String },
    cream: { type: String },
    egg_or_eggless: { type: String },
    cake_filler: { type: String },
    message: { type: String },
    message_color: { type: String },
    first_name: { type: String },
    email_ID: { type: String },
    mobile_number: { type: Number },
    category: { type: String },
    subcategory: { type: String },
    name: { type: String },
    price: {type: String},
    orderID: {type: String},
    // User: user,
//    Cakes: [cakes],
//     Address: { type: String },
//    Price: { type: String },
   createdDate: { type: Date, default: Date.now },
//    orderID: mongoose.Types.ObjectId
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('PlaceOrder', schema,'PlaceOrder');