const express = require('express');
const { createContact } = require('../controllers/contactusController'); // Ensure the correct filename is used

const router = express.Router();

// Define the POST route for creating a contact
router.post('/', createContact);

module.exports = router;
