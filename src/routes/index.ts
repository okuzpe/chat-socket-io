import { Router, Request,Response,NextFunction,  } from 'express';
import vehiclesRouter from './vehicles/vehiclesRouter';
// import { HttpError } from './http-error';

const routes: Router =Router();

//Controller
routes.use('/',vehiclesRouter);


// routes.get('/',(req: Request,res: Response)=>{
//     res.send('Hi my Friend');
// });




// routes.use((_: Request, res: Response) => {
//     res.status(404).json({ message: 'Not found.' });
//   });
  
//   routes.use((error: any, _: Request, res: Response, next: NextFunction) => {
//     if (res.headersSent) {
//       return next(error);
//     }
  
//     // tslint:disable-next-line:no-console
//     console.error(error.stack);
//     return res.status(error.statusCode || 500).json({ message: error.message });
//   });

export default routes;