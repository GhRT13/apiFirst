import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { ConfigServer } from "./config/config"; 

import { AreaRouter } from './area/area.router';
import { UsuarioRouter } from './usuario/usuario.router';
import { ReservaRouter } from './reserva/reserva.router';
import { MenuRouter } from './menu/menu.router';
import { PlatoRouter } from './plato/plato.router';
import { MenuPlatoRouter } from './menu-plato/menu-plato.router';
import { TrabajadorRouter } from './trabajador/trabajador.router';
import { EstudianteRouter } from './estudiante/estudiante.router';
import connectDB from './config/ormconfig';


class server extends ConfigServer {
    // variables de la clase
    public app: express.Application = express();
    private port: number = 8000;
    //constructor de la clase
    constructor(){
        super();
        connectDB;
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(morgan('dev'));
        this.app.use(cors());

        

        

        const areaRouter = new AreaRouter();
        this.app.use('/area', areaRouter.router);

        const usuarioRouter = new UsuarioRouter();
        this.app.use('/usuario', usuarioRouter.router);

        const reservaRouter = new ReservaRouter();
        this.app.use('/reserva', reservaRouter.router);

        const menuRouter = new MenuRouter();
        this.app.use('/menu', menuRouter.router);

        const platoRouter = new PlatoRouter();
        this.app.use('/plato', platoRouter.router);

        const menuPlatoRouter = new MenuPlatoRouter();
        this.app.use('/menu-plato', menuPlatoRouter.router);

        const trabajadorRouter = new TrabajadorRouter();
        this.app.use('/trabajador', trabajadorRouter.router);

        const estudianteRouter = new EstudianteRouter();
        this.app.use('/estudiante', estudianteRouter.router);

        this.app.use('/api',this.routers());
        this.listen();
    }
    //funcion de escucha del puerto
    public listen(){
        this.app.listen(this.port, () => {
            console.log("Servidor ecuchando por el puerto =>" + this.port );
        });
    }

    routers(): Array<express.Router> {
        

        return [new AreaRouter().router, new UsuarioRouter().router, new ReservaRouter().router, new MenuRouter().router, new PlatoRouter().router, new MenuPlatoRouter().router, new TrabajadorRouter().router, new EstudianteRouter().router];
    }
}

new server();
    