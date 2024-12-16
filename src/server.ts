import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { UserRouter } from "./user/user.router";
import { ConfigServer } from './config/config';
import connectDB from './config/ormconfig';
import { AreaRouter } from './Area/area.router';
import { EstudianteRouter } from './Estudiante/estudiante.router';
import { MenuRouter } from './Menu/menu.router';
import { PlatoRouter } from './Plato/plato.router';
import { ReservaRouter } from './Reserva/reserva.router';
import { TrabajadorRouter } from './Trabajador/trabajador.router';

class nombre_del_servidor extends ConfigServer {
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
        this.app.use('/api', this.routers());
        this.listen();
        
    }

    routers(): Array<express.Router> {
        return [ 
            new UserRouter().router,
            new AreaRouter().router,
            new EstudianteRouter().router,
            new MenuRouter().router,
            new PlatoRouter().router,
            new ReservaRouter().router,
            new TrabajadorRouter().router
        ];
    }

    //funcion de escucha del puerto
	public listen(){
		this.app.listen(this.port, () => {
		   console.log('Servidor ecuchando por el puerto =>' + this.port );
		});
	}
}
new nombre_del_servidor();
