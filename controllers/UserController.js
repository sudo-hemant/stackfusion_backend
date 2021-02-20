import * as UserModel from '../model/userModel.js';


export async function userForm(req, res, next) {
// const userForm = (req, res, next) => {
    let name = req.body.name;
    let dob = req.body.dob;
    let email = req.body.email;
    let phone = req.body.phone;

    let user;

    try {
        user = await UserModel.save({
            name,
            dob,
            email,
            phone
        });

        res.status(200).json({ success : true, user : user })
    } catch (error) {
        return res.status(400).json({ success : false, error : error})
    }

}

// export async function random(req, res, next) {
//     res.success('random')
// }

// export default {
//     userForm
// }