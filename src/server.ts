import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { UserRouter } from "./user/user.router";
import { ConfigServer } from './config/config';
import connectDB from './config/ormconfig';

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
        return [ new UserRouter().router ];
    }

    //funcion de escucha del puerto
	public listen(){
		this.app.listen(this.port, () => {
		   console.log('Servidor ecuchando por el puerto =>' + this.port );
		});
	}
}
new nombre_del_servidor();
