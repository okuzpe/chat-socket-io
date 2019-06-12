import express,{ Request, Response } from "express";



const loginRouter = express.Router();

const login=async (req: Request, res: Response) => {
    return res.status(200).json({
        error_code:'si',
        message:'loged',
      });
}

loginRouter.get('/login',login)
export default loginRouter;