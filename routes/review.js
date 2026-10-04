const express = require("express");
const app = express();
// const router = express.Router();
const router = express.Router({ mergeParams: true });
const wrapAsync = require('../utils/wrapAsync');
const ExpressError = require("../utils/ExpressError");
// const {listingSchema, reviewSchema} = require("../schema.js");
const Listing = require("../models/listing.js");
const Review = require("../models/review.js");
const {validateReview, isLoggedIn, isReviewAuthor} = require("../middleware.js");
// const reviewController = require("../models/review.js");
const reviewController = require("../controllers/reviews");
// reviews
// post Route
router.post("/", isLoggedIn, validateReview, wrapAsync(reviewController.createReview));

// Delete Review Route
// router.delete("/:reviewId", async (req, res) => {
//     const { id, reviewId } = req.params;

//     await Listing.findByIdAndUpdate(id, {
//         $pull: { reviews: reviewId }
//     });

//     await Review.findByIdAndDelete(reviewId);

//     res.redirect(`/listings/${id}`);
// });
router.delete("/:reviewId",isLoggedIn,isReviewAuthor,  wrapAsync(reviewController.destroyReview));

module.exports = router;