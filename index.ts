import express, {json, Router} from "express";
import cors from "cors";
import 'express-async-errors';
import {handleError} from "./utils/errors";
import rateLimit from 'express-rate-limit';
import { adRouter } from "./routers/ad.router";
import {config} from "./config/config";

const app = express();

app.use(cors({
    origin: config.corsOrigin,
}));
app.use(json());
app.use(rateLimit({
    windowMs: 5 * 60 * 1000, //5 min
    max: 100, // Limit each IP to 100 request per Windows, (here, per 5 min)
}));

const router = Router();

router.use('/ad', adRouter);

app.use('/api', router);

app.use(handleError);

app.listen(3001, '0.0.0.0', () => {
    console.log('listening on port http://localhost:3001 ')
});