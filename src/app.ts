import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import passport from 'passport';
import cookieParser from 'cookie-parser';
import 'dotenv/config'
import { initializeApp, applicationDefault, cert } from 'firebase-admin/app';
import passportMiddleware from './middlewares/passport'
import usuarioRoutes from './routes/usuario.router';
import guiaRoutes from './routes/guia.router';
import vehiculoRoutes from './routes/vehiculo.router';
import comentarioRoutes from './routes/calificacion.router';
import lugarRoutes from './routes/lugar.router';
import recorridoRoutes from './routes/recorrido.router';
import reservaRoutes from './routes/reserva.router';

process.env.GOOGLE_APPLICATION_CREDENTIALS;

// const serviceAccount = process.env.GOOGLE_APPLICATION_CREDENTIALS as string;

// initializeApp({
//   credential: cert(serviceAccount),
//   projectId: 'qhapaqtour-be7e8'
// });

initializeApp({
  credential: applicationDefault(),
  projectId: 'qhapaqtour-be7e8'
});

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(cookieParser());

// jwt
app.use(express.urlencoded({ extended: false }));
app.use(passport.initialize());
passport.use(passportMiddleware);

// Routes
app.use("/api",usuarioRoutes);
app.use("/api",guiaRoutes);
app.use("/api",vehiculoRoutes);
app.use("/api",comentarioRoutes);
app.use("/api",lugarRoutes);
app.use("/api",recorridoRoutes);
app.use("/api",reservaRoutes);

export default app;