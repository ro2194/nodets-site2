import { Request, Response} from "express";

export const home = (req:Request, res: Response) => {
     res.send('testando a home no controller '); //testando o controller
     //res.render ('pages/ Page'); 
}

export const fotos = (req:Request, res: Response) => {
     res.send('paginas fotos  testando'); 
     //res.render ('pages/ Page'); 
}