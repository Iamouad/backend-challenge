const mongoose = require('mongoose');

const PlaceSchema = new mongoose.Schema({

    name:{
        type: String,
        required: true,
    },

    city:{
        type: String,
        required: true,
    },

    state:{
        type: String,
        required: true,
    },

    created_at: {
        type: Date,
        default: Date.now
    },

    updated_at: {
        type: Date,
        default: Date.now
    },
    
});

module.exports = Place = mongoose.model('place', PlaceSchema);