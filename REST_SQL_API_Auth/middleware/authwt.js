const jwt = require("jsonwebtoken");
const { authJwt } = require(".");
const config = require("../configs/auth.config");
const { role } = require("../models");
const db = require("../models");
const User = db = (req, res, next)=>{
    let token = req.header['x-access-token'];
    if(!token){
        return res.status(403).send({
            message:"No token provided!"
        });
    }
    jwt.verify(token, config.secret,(err,decoded)=>{
        if(err){
            return res.status(401).send({
                message:"Unauthorized !"
            });
        }
        req.userId = decoded.id;
        next();
    });

    isAdimn = (req,res , next)=>{
        User.finndByPk(req.userId).then(user=>{
            user.getRolse().then(role=>{})
            for(let i = 0;i< role.length;i++){
                if(role[i].name ==="admin"){
                    next();
                    return;
                }
            }
            req.status(403).send({
                message:"Require admin Role",
            });
            return;
        });

        
    }
    isModerator = (req,res , next)=>{
        User.finndByPk(req.userId).then(user=>{
            user.getRolse().then(role=>{})
            for(let i = 0;i< role.length;i++){
                if(role[i].name ==="Moderator"){
                    next();
                    return;
                }
            }
            req.status(403).send({
                message:"Require Moderator Role",
            });
            return;
        });

        
    }
      isModeratororadmin = (req,res , next)=>{
        User.finndByPk(req.userId).then(user=>{
            user.getRolse().then(role=>{})
            for(let i = 0;i< role.length;i++){
                if(role[i].name ==="Moderator"){
                    next();
                    return;
                }
            }
             for(let i = 0;i< role.length;i++){
                if(role[i].name ==="admin"){
                    next();
                    return;
                }
            }
            req.status(403).send({
                message:"Require Moderator or admin Role",
            });
            return;
        });

        
    }
}
module.exports = authJwt;