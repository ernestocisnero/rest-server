const express = require('express');
const cors = require('cors')
const userRoutes = require('../routes/user.routes');
require('dotenv').config();


class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT || 3000;
        this.userRoutesPath = '/api/user';

        //Middlewares
        this.middlewares();
        //Routes
        this.routes();
    }

    middlewares() {
        //public folder
        this.app.use(express.static('public'));
        
        //Cors
        this.app.use(cors());

        //Parse body

        this.app.use(express.json());

    }

    routes() {
        this.app.use(this.userRoutesPath, userRoutes);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Server running at:', this.port);
        });
    }

}

module.exports = Server;
