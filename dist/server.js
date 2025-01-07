"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const config_1 = require("./config/config");
const area_router_1 = require("./area/area.router");
const usuario_router_1 = require("./usuario/usuario.router");
const reserva_router_1 = require("./reserva/reserva.router");
const menu_router_1 = require("./menu/menu.router");
const plato_router_1 = require("./plato/plato.router");
const menu_plato_router_1 = require("./menu-plato/menu-plato.router");
const trabajador_router_1 = require("./trabajador/trabajador.router");
const estudiante_router_1 = require("./estudiante/estudiante.router");
const ormconfig_1 = __importDefault(require("./config/ormconfig"));
class server extends config_1.ConfigServer {
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
        const areaRouter = new area_router_1.AreaRouter();
        this.app.use('/area', areaRouter.router);
        const usuarioRouter = new usuario_router_1.UsuarioRouter();
        this.app.use('/usuario', usuarioRouter.router);
        const reservaRouter = new reserva_router_1.ReservaRouter();
        this.app.use('/reserva', reservaRouter.router);
        const menuRouter = new menu_router_1.MenuRouter();
        this.app.use('/menu', menuRouter.router);
        const platoRouter = new plato_router_1.PlatoRouter();
        this.app.use('/plato', platoRouter.router);
        const menuPlatoRouter = new menu_plato_router_1.MenuPlatoRouter();
        this.app.use('/menu-plato', menuPlatoRouter.router);
        const trabajadorRouter = new trabajador_router_1.TrabajadorRouter();
        this.app.use('/trabajador', trabajadorRouter.router);
        const estudianteRouter = new estudiante_router_1.EstudianteRouter();
        this.app.use('/estudiante', estudianteRouter.router);
        this.app.use('/api', this.routers());
        this.listen();
    }
    //funcion de escucha del puerto
    listen() {
        this.app.listen(this.port, () => {
            console.log("Servidor ecuchando por el puerto =>" + this.port);
        });
    }
    routers() {
        return [new area_router_1.AreaRouter().router, new usuario_router_1.UsuarioRouter().router, new reserva_router_1.ReservaRouter().router, new menu_router_1.MenuRouter().router, new plato_router_1.PlatoRouter().router, new menu_plato_router_1.MenuPlatoRouter().router, new trabajador_router_1.TrabajadorRouter().router, new estudiante_router_1.EstudianteRouter().router];
    }
}
new server();
