import express from 'express';
import clientRoutes from './routes/clients.js';
import reservationRoutes from './routes/reservation.js';
import swaggerUi from 'swagger-ui-express';
import fs from 'fs';
import path from 'path';


const app = express();
app.use(express.json());

const swaggerDocument = JSON.parse(fs.readFileSync(
    path.resolve("./glamfashion-Evaluacion-1.0.0-resolved.json"),
"utf-8"))

// Rutas
app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument))
app.use('/clients', clientRoutes);
app.use('/reservations', reservationRoutes);

export default app;