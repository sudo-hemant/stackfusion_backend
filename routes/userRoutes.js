const express = require('express');
const { userForm, submittedForms } = require('../controllers/UserController');

require("dotenv").config();

const User = require('../model/userModel');

const router = express.Router();


router.post('/user-form', userForm);

router.get('/submitted-forms', submittedForms);

// router.get('/:id', UserController.)


module.exports = router;