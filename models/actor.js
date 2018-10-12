const mongoose = require('mongoose');

const actorSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true
    },
    bYear: {
        validate: {
            validator: function (newAge) {
                if (Number.isInteger(newAge))
                    return true;
                else return false
            },
            message: 'Birth year should be integer'
        },
        type: Number,
        required: true

    },
    //Define the list of movies, an array of references(id's) to 'Movie'
    movies: [{
        type: mongoose.Schema.ObjectId,
        ref: 'Movie'
    }]
});
//Export the model that uses the above schema.
module.exports = mongoose.model('Actor', actorSchema);