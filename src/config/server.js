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
        this.companyPath = '/api/company';
        this.companyAccountPath = '/api/companyaccount';
        this.categoryPath = '/api/category';
        this.brandPath = '/api/brand';
        this.personPath = '/api/person';
        this.contactPath = '/api/contact';
        this.employeePath = '/api/empleado';
        this.routesPath = '/api/route';
        this.zonePath = '/api/zone';
        this.storePath = '/api/store';
        this.productPath = '/api/product';
        this.productstorePath = '/api/productstore';

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
        this.app.use(this.companyPath, require('../routes/company'));
        this.app.use(this.companyAccountPath, require('../routes/companyaccount'));
        this.app.use(this.categoryPath, require('../routes/category'));
        this.app.use(this.brandPath, require('../routes/brand'));
        this.app.use(this.personPath, require('../routes/person'));
        this.app.use(this.contactPath, require('../routes/contact'));
        this.app.use(this.employeePath, require('../routes/employee'));
        this.app.use(this.routesPath, require('../routes/routescollector'));
        this.app.use(this.zonePath, require('../routes/zone'));
        this.app.use(this.storePath, require('../routes/store'));
        this.app.use(this.productPath, require('../routes/product'));
        this.app.use(this.productstorePath, require('../routes/productstore'));

    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto', this.port);
        });
    }
}

module.exports = Server;