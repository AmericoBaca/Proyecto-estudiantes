const {Datatypes} = require('sequelize');
const sequelize = require('../config/db.js')

const Estudiante = sequelize.define('Estudiante',{
    id:{type: Datatypes.INTEGER,autoIncrement:true,primaryKey:true},
    nombre:{type: Datatypes.STRING, allowNull:false},
    email:{type: Datatypes.STRING, allowNull:false},
    edad:{type: Datatypes.INTEGER, allowNull:false}},{
        tableName:'estudiantes',
        timestamps:false,
});

module.exports =  Estudiante;