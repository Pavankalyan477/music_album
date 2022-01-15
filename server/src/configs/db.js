const mongoose = require("mongoose");



const connect = () => {
    mongoose.connect("mongodb+srv://music:music_123@cluster0.9mh8g.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
}

module.exports = connect;