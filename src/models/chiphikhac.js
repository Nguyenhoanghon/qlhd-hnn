var mongoose = require('mongoose');

var chiphikhacSchema = mongoose.Schema({
    stt: {
        type: Number,
        default: 'No Name'
    },
    noidung: {
        type: String,
        default: 'No Type'
    },
    sotien: {
        type: Number,
        default: 'No Type'
    },
    ghichu: {
        type: String,
        default: 'No Type'
    }
});

module.exports = mongoose.model('chiphikhac', chiphikhacSchema, 'chiphikhac');