const UserModel = require('../model/userModel.js');
const { sendMail } = require('../services/mailer.js');
// const { publishToQueue } = require('../services/MQService.js')


async function userForm(req, res, next) {

    const { name, dob, email, phone } = req.body
    let user;

    try {
        user = await UserModel({
            name,
            dob,
            email,
            phone
        });
        console.log('user', user, 'user')
        user.save()

        let html = `
            Your form is submitted.
        `
        
        sendMail(user.email, "Form submitted", html);

        return res.status(200).json({ success: true, user });
    } catch (error) {
        console.log(error);
        return res.status(400).json({ success: false, error: error.message });
    }
}

async function submittedForms(req, res, next) {
    try {
        let forms = await UserModel.find();
        return res.status(200).json({ success: true, forms })
    } catch (error) {
        return res.status(400).json({ success: false, error: error.message })
    }
}

// async function messageQueue(req, res, next) {
//     let { queueName, payload } = req.body;
//     await publishToQueue(queueName, payload);
    
//     res.status(200).json({ 'message-sent' : true, 'data' : 'working' })
// }


module.exports = {
    userForm,
    submittedForms,
    // messageQueue
}