const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const domPurifier = require('dompurify');
const {JSDOM} = require('jsdom');
const htmlPurify = domPurifier(new JSDOM().window);

const photoSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    main_img: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

photoSchema.pre('validate', function(next) {
    // check if there is a description
    if (this.description) {
        this.description = htmlPurify.sanitize(this.description);
    }
    next();
});

const Photos = mongoose.model('Photos', photoSchema);
module.exports = Photos;

/*

*/