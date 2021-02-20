const UserModel = require('../model/userModel.js');


 async function userForm(req, res, next) {
    let name = req.body.name;
    let dob = req.body.dob;
    let email = req.body.email;
    let phone = req.body.phone;
    let user;

    try {
        user = await UserModel({
            name,
            dob,
            email,
            phone
        });
        user.save()
        return res.status(200).json({ success : true, user });
    } catch (error) {
        console.log(error);
        return res.status(400).json({ success : false, error : error.message });
    }

}

async function submittedForms(req, res, next) {
    try {
        let forms = await UserModel.find();
        return res.status(200).json({ success : true, forms })
    } catch (error) {
        return res.status(400).json({ success : false, error : error.message })
    }
}



module.exports = {
    userForm, 
    submittedForms
}