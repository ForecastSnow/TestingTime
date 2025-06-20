import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config'
import cookieParser from 'cookie-parser';
import { errorHandler } from "./middlewares/errorHandler.js"
import mocksRouter from "./routes/mocks.router.js"

import usersRouter from './routes/users.router.js';
import petsRouter from './routes/pets.router.js';
import adoptionsRouter from './routes/adoption.router.js';
import sessionsRouter from './routes/sessions.router.js';

const app = express();
const PORT = process.env.PORT || 8080;
const connection = await mongoose.connect(process.env.MONGO_URI)

if (connection.connection.readyState === 1) {
    console.info("Conectado a data base");
} else {
    console.error("no se conecto a la data base")
}

app.use(express.json());
app.use(cookieParser());


app.use('/api/users', usersRouter);
app.use('/api/pets', petsRouter);
app.use('/api/adoptions', adoptionsRouter);
app.use('/api/sessions', sessionsRouter);
app.use("/api/mocking", mocksRouter)

app.use(errorHandler);

app.listen(PORT, () => console.log(`Listening on ${PORT}`))

export default app;
