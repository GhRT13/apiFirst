import { DataSource } from "typeorm";
import  dotenv  from "dotenv";

dotenv.config();

const connectDB = new DataSource({
    type: "postgres", // en caso de postgree es postgree
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "Comedor",
    logging: false,
    ssl: false,
    synchronize: true,
    entities: ["dist/Entities/*.js"],
    migrations: [__dirname + "../../src/migrations/*{.ts, .js}"],
    
});
connectDB.initialize()
.then(() => {
    console.log(`Conectado a la Base de Datos`);
}).catch((err) => {
    console.error(`Error al conectar a la Base de Datos`, err);
})
export default connectDB;