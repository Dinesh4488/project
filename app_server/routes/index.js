// Import necessary modules and controllers
const express = require('express');
const router = express.Router();
const ctrlLocations = require('../controllers/locations');
const ctrlOthers = require('../controllers/others');
const ctrlReviews = require('../controllers/reviews'); // Controller for reviews

/* Locations pages */
router.get('/', ctrlLocations.homelist);
router.get('/location', ctrlLocations.streetfood);
router.get('/contact', ctrlLocations.contact);
router.get('/location/review/new', ctrlLocations.addReview);
router.get('/softybakers', ctrlLocations.softybakers);
router.get('/RaghavendraTiffins', ctrlLocations.RaghavendraTiffins);  // Route for the RaghavendraTiffins page
router.get('/BiryaniWaala', ctrlLocations.BiryaniWaala); // Make sure this is correctly linked

/* Review routes */
router.post('/location/review/new', ctrlReviews.addReview); // Ensure this points to the correct function
router.get('/api/reviews', ctrlReviews.getAllReviews); // API route to get all reviews

/* Cart routes */
router.get('/cart', ctrlLocations.cart); // Route to view cart
router.post('/cart/add', ctrlLocations.addToCart); // Route to add item to cart
router.get('/cart/remove/:id', ctrlLocations.removeFromCart); // Route to remove item from cart

/* Other pages */
router.get('/about', ctrlOthers.about);

module.exports = router; // Export the router