import express,{ Request,Response} from 'express';


const vehiclesRouter = express.Router();

const getVehicles= async(req: Request, res: Response):Promise <Response>=>{
    return res.json({message: 'omar harryson mandela III'});
}


// routes.get('/',(req: Request,res: Response)=>{
//     res.send('Hi my Friend');
// });


vehiclesRouter.get('/vehicles',getVehicles);

// vehiclesRouter.get('/vehicles', (req, res) => res.send('Harry el porreta'));

export default vehiclesRouter;