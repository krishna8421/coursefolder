const mongoose = require('mongoose')

const urlSchema = new mongoose.Schema ({
    courseUrl: {type: String, required: true}
});
    
const UrlSchema = mongoose.model('urls', urlSchema);
module.exports   = UrlSchema