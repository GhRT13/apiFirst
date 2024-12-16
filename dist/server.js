"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const user_router_1 = require("./user/user.router");
const config_1 = require("./config/config");
const ormconfig_1 = __importDefault(require("./config/ormconfig"));
const area_router_1 = require("./Area/area.router");
const estudiante_router_1 = require("./Estudiante/estudiante.router");
const menu_router_1 = require("./Menu/menu.router");
const plato_router_1 = require("./Plato/plato.router");
const reserva_router_1 = require("./Reserva/reserva.router");
const trabajador_router_1 = require("./Trabajador/trabajador.router");
class nombre_del_servidor extends config_1.ConfigServer {
    //constructor de la clase
    constructor() {
        super();
        // variables de la clase
        this.app = (0, express_1.default)();
        this.port = 8000;
        ormconfig_1.default;
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: true }));
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use((0, cors_1.default)());
        this.app.use('/api', this.routers());
        this.listen();
    }
    routers() {
        return [
            new user_router_1.UserRouter().router,
            new area_router_1.AreaRouter().router,
            new estudiante_router_1.EstudianteRouter().router,
            new menu_router_1.MenuRouter().router,
            new plato_router_1.PlatoRouter().router,
            new reserva_router_1.ReservaRouter().router,
            new trabajador_router_1.TrabajadorRouter().router
        ];
    }
    //funcion de escucha del puerto
    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor ecuchando por el puerto =>' + this.port);
        });
    }
}
new nombre_del_servidor();
