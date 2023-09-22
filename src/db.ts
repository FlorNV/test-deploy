import {DataSource} from 'typeorm';
import { Usuario } from './entities/usuario.entity';
import { Guia } from './entities/guia.entity';
import { Vehiculo } from './entities/vehiculo.entity';
import { Reservas } from './entities/reservas.entity';
import { Calificacion } from './entities/calificacion.entity';
import { Lugar } from './entities/lugar.entity';
import { Pago } from './entities/pago.entity';
import { Recorrido } from './entities/recorrido.entity';

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: process.env.POSTGRES_HOST,
    port: Number(process.env.POSTGRES_PORT),
    username: process.env.POSTGRES_USERNAME,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE,
    ssl: process.env.POSTGRES_SSL === 'true',
    synchronize: true,
    entities: [Usuario,Guia,Vehiculo,Reservas,Calificacion,Recorrido,Lugar,Pago]
});