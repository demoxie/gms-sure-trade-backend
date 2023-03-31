import express from 'express';
import morgan from 'morgan';
import UserRoute from "./routes/user-route.js";
const app = express();
const userRoute = new UserRoute();
const userRouter = await userRoute.routes();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(userRouter)
export default app;

