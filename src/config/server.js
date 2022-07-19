const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

class Server {

    constructor() {
        this.app = express();

        this.app.use(bodyParser.json()); // body en formato json
        this.app.use(bodyParser.urlencoded({ extended: false })); //body formulario

        this.port = process.env.PORT;

        this.usuariosPath = '/api/usuarios';
        this.authPath = '/api/auth';
        this.catalogPath = '/api/catalog';
        this.brandPath = '/api/brand';
        this.catalogvaluePath = '/api/catalogvalue';
        this.cityPath = '/api/city';
        this.countryPath = '/api/country';

        //Middlewares
        this.middlewares();
        //Rutas de aplicacion
        this.routes();
    }

    middlewares() {

        //CORS
        this.app.use(cors());
        //Lectura y parseo del body
        //this.app.use(express.json());s
        //Directorio publico
        this.app.use(express.static('src/public'));
    }

    routes() {
        this.app.use(this.authPath, require('../routes/auth'));
        this.app.use(this.usuariosPath, require('../routes/user'));
        this.app.use(this.catalogPath, require('../routes/catalog'));
        this.app.use(this.catalogvaluePath, require('../routes/catalogvalue'));
        this.app.use(this.cityPath, require('../routes/city'));
        this.app.use(this.countryPath, require('../routes/country'));

    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto', this.port);
        });
    }
}

module.exports = Server;