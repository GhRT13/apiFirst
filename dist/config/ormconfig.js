"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const connectDB = new typeorm_1.DataSource({
    type: "postgres", // en caso de postgres es postgres
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "comedor",
    logging: false,
    synchronize: true,
    entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    migrations: [__dirname + "../../src/migrations/*{.ts, .js}"],
    extra: {
        ssl: {
            rejectUnauthorized: false
        }
    }
});
connectDB
    .initialize()
    .then(() => {
    console.log(`Conectado a la Base de Datos`);
})
    .catch((err) => {
    console.error(`Error al conectar a la Base de Datos`, err);
});
exports.default = connectDB;
