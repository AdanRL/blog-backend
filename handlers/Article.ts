import { Request, Response } from 'express';

import  ArticleModel  from '../models/Article';
import  Article  from '../models/Article';


export const getPrueba = async (req: Request, res:Response): Promise<void> => {
	try {
		res.status(200).json({
			message: "I'm a test on my article controller"
		})
	} catch{

	}
}
