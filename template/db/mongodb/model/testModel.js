/**
 * Created by busyhe on 2018/7/20 下午2:48.
 * Email: 525118368@qq.com
 */
const mongoose = require('mongoose');
const db = require('../index');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const Test = new Schema({
    name: {
        type: String,
        default: 'busyhe'
    },
    user_id: {
        type: String,
        default: ObjectId
    }
});

Test.statics.findByName = function (name, cb) {
    return this.find({name: name}, cb)
};

module.exports = db.model('Test', Test);
