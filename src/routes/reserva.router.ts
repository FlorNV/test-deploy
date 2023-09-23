import { Router } from 'express';
import { validateTokenCliente, validateTokenGuia } from '../middlewares/validate.token';
import { createReserva, deleteReserva, generatePago, getReserva, getReservas, getReservasGuias, myReservas } from '../controllers/reservas.controller';

const router = Router();

router.get('/reservas/:id', validateTokenCliente, getReserva);
router.get('/reservas', validateTokenCliente, getReservas);
router.post("/reservas", validateTokenCliente, createReserva);
router.get("/reserva",validateTokenCliente,myReservas);
router.post("/reservas/:idreservas/pago", validateTokenCliente, generatePago);
router.get('/guia/reservas',validateTokenGuia,getReservasGuias);
router.delete('/reservas/:id',deleteReserva);

export default router;

