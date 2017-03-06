const express = require('express');
const Event = require('../controllers/events');
const validate = require('./validation');


const router = new express.Router();

router.get('/dashboard', (req, res) => {
  res.status(200).json({
    message: "Congratulations you're a member of our exclusive group of memebers",
  });
});

router.post('/makeevent', (req, res) => {
  const validationResult = validate.validateEventForm(req.body);
  if (!validationResult.success) {
    return res.status(400).json({
      success: false,
      message: validationResult.message,
      errors: validationResult.errors,
    });
  }
  req.body.username = req.user;
  Event.createEvent(req.body);
  res.status(200).json({
    body: req.body,
    message: 'Your event was posted!',
  });
});


module.exports = router;
