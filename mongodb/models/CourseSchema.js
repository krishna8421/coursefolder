const mongoose = require('mongoose')

const courseSchema = new mongoose.Schema ({
    _Id: Schema.Types.ObjectId,
    courseName: {type: String, required: true},
    courseUrl: {type: String, required: true},
    imgURL: {type: String, required: true},
    Description:{type: String, required: true},
    ratedBy:{type: String, required: true},
    rating:{type: Number, required: true},
    time:{type: String, required: true},
    instructor:{type: String, required: true},
    lang:{type: String, required: true},
    lastUpdated:{type: String, required: true}
});
    
const CourseSchema = mongoose.model('courses', courseSchema);
module.exports   = CourseSchema