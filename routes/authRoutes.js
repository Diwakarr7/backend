import express from "express";
import { login , signup, logout} from "../controllers/authController.js"


const authRouter = express.Router();


authRouter.get("/signup", signup)
authRouter.get("/login",login )
authRouter.get("/logout", logout)

export default authRouter;
