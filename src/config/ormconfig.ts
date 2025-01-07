import { DataSource } from "typeorm";
import  dotenv  from "dotenv";

dotenv.config();

const connectDB = new DataSource({
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
    })

    export default connectDB;