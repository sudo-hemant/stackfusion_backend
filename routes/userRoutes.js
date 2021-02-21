const express = require('express');
const { userForm, submittedForms, messageQueue } = require('../controllers/UserController');

require("dotenv").config();

const router = express.Router();


router.post('/user-form', userForm);

router.get('/submitted-forms', submittedForms);

// router.post('/msg', messageQueue)


module.exports = router;