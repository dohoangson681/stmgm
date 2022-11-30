const {DataTypes} = require('sequelize') ; 


// const createStudentModel = (sequelize) => {
//     return sequelize.define('Students',{
//         name : {
//             type : DataTypes.STRING ,
//             allowNull : false
//         }, 
//         age : {
//             type : DataTypes.INTEGER , 
//             allowNull : false
//         } , 
//         major : {
//             type : DataTypes.STRING ,
//             allowNull : false
//         }
//     })
// }
// module.exports = {createStudentModel}

const {sequelize} = require('./index.model') ; 

const StudentModel = sequelize.define('Students',{
            name : {
                type : DataTypes.STRING ,
                allowNull : false
            }, 
            age : {
                type : DataTypes.INTEGER , 
                allowNull : false
            } , 
            major : {
                type : DataTypes.STRING ,
                allowNull : false
            }
}); 

module.exports = {StudentModel} ;