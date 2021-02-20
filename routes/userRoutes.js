const express = require('express');
import * as UserController from '../controllers/UserController';

// import { userForm } from '../controllers/UserController';

require("dotenv").config();

const User = require('../model/userModel');

const router = express.Router();


router.post('/user-form', UserController.userForm);
// router.post('/user-form', userForm);

// router.get('/submitted-forms', UserController.submittedForms);

// router.get('/:id', UserController.)


export default router;