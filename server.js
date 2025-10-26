const express = require('express')
const cors = require('cors')
require('dotenv').config();
const sequelize = require('./config/db');
const estudianteRoutes = require('./routes/estudianteRoutes')

const app = express();
const PORT = process.env.PORT || 3306;

app.use(cors());
app.use(express.json());

//para la ruta 
app.use('/api/estudiantes', estudianteRoutes);
//Nos conectamos a la DB e iniciamos el servidor
sequelize.authenticate().then(() => {
    console.log("Conexion a la bd exitosa");
    return sequelize.sync();
}).then(() =>{
    app.listen(PORT, ()=>{
        console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
}).catch(err =>{
    console.error('Error al conectar con la BD')
});