import express, {Request, Response} from "express"
import UserRouter from "../routes/UserRoute";
import AdminRouter from "../routes/AdminRoute";
import cartRouter from "../routes/CartRoute";
import orderRouter from "../routes/OrderRoute";
import PermissionRouter from "../routes/PermissionRoute";
import BotRouter from "../routes/BotRoute";

const apiRouter = express.Router();

apiRouter.use("/user", UserRouter);
apiRouter.use("/admin", AdminRouter);


apiRouter.use("/cart", cartRouter);
apiRouter.use("/order", orderRouter);
apiRouter.use("/permission", PermissionRouter);

apiRouter.use("/chat", BotRouter);


export default apiRouter;