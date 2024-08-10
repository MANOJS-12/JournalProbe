const Contact = require('../models/contactSchema');

const createContact = async (req, res) => {
  const { firstName, lastName, email, phoneNumber, message } = req.body;

  // Check if all required fields are provided
  if (!firstName || !lastName || !email || !phoneNumber || !message) {
    return res.status(400).json({ msg: 'Please enter all fields' });
  }

  try {
    // Create a new contact document with the provided data
    const newContact = new Contact({ firstName, lastName, email, phoneNumber, message });
    // Save the contact document to the database
    const savedContact = await newContact.save();
    // Respond with the saved contact
    res.json(savedContact);
  } catch (err) {
    // Handle any errors during saving
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createContact,
};
