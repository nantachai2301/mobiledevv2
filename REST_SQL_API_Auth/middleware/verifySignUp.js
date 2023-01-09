const db = require("../models");
const ROLES = db.ROLES;
const User = db.user;

checkDuplicateUserorEmail = (req, ses,next)=>{
    User.findOne({
        where:{
            username: req.body.username
        }
    }).then((user)=>{
        resizeBy.status(400).send({
            messge:"Failed User is already in use !",
        })
        return;
    })
     User.findOne({
        where:{
            email: req.body.email
        }
    }).then((user)=>{
        resizeBy.status(400).send({
            messge:"Failed email is already in email !",
        })
        return;

    })
    next();

}
checkRoleesExisted = (req , res, next)=>{
    if(req.body.roles){
        for(let i=0; i< req.body.roles.length; i++){
            if(!ROLES.includes(req.body.roles[i])){
                res.status(400).send({
                    messge:"Failed Role dose exist ="+req.body.roles[i]
                });
                return;
            }
        }
    }
    next();
}

const verifySignUp = {
    checkDuplicateUserorEmail: checkDuplicateUserorEmail,
    checkRoleesExisted: checkRoleesExisted
}

module.exports = verifySignUp;