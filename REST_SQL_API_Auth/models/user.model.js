module.exports=(sequelize, Sequelize)=>{
    const User = sequelize.define("users",{
        usersname:{
            type: Sequelize.STRING
        },
        email:{
            type: Sequelize.STRING
        },
        password:{
            type: Sequelize.STRING
        }
    })
    return User;
}