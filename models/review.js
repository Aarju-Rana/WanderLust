// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// const reviewSchema = new schema({
//     comment : String,
//     rating: {
//         type: number,
//         min : 1,
//         max:5
//     },
//     createdAt:{
//         type: Date,
//         default: Date.now()
//     }
// });

// module.exports = mongoose.model("Review", reviewSchema);
const mongoose = require("mongoose");

// define Schema properly
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    comment: String,
    rating: {
        type: Number,
        min : 1,
        max:5
    },
    createdAt:{
        type: Date,
        default: Date.now()
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
});

// export model
module.exports = mongoose.model("Review", reviewSchema);