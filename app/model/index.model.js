const {Sequelize , DataTypes} = require('sequelize') ; 
const {USER_NAME , PASSWORD , DB_NAME , DIALECT , HOST} = require('../configs/db.congif') ;
const sequelize = new Sequelize(DB_NAME , USER_NAME , PASSWORD , {
    host : HOST ,
    dialect : DIALECT
}) ; 
const {StudentModel} = require('./student.model') ; 





module.exports = {
    sequelize
} ; 