import { Request, Response } from 'express';
import validator from "validator"
// import  {ArticleModel, Article}  from '../models/Article';


export const getPrueba = async (req: Request, res:Response): Promise<void> => {
	try {
		res.status(200).json({
			message: "This is a blog API test🤡"
		})
	} catch (error){
		if(error instanceof Error){
			res.status(500).json({ message: error.message });
		} else {
			res.status(500).json({ message: "Ha ocurrido un error desconocido" });
		}

	}
}

export const getPrueba2 = async (req: Request, res:Response): Promise<void> => {
	try {
		res.status(200).json({
			message: "I'm a test on my article controller"
		})
	} catch (error){
		if(error instanceof Error){
			res.status(500).json({ message: error.message });
		} else {
			res.status(500).json({ message: "Ha ocurrido un error desconocido" });
		}

	}
}

export const createArticle = async (req: Request, res:Response): Promise<void> => {

	let parameters = req.body;
	console.log("parameters: ", parameters)

	try{
		let titleValidate = !validator.isEmpty(parameters.title);
		let contentValidate = !validator.isEmpty(parameters.content);
		if(!titleValidate || !contentValidate){
			throw new Error("El título o el contenido está vacio");
		}
	} catch(error){

	}
	try {
		res.status(200).json({
			message: "Save Article",
			parameters
		})
	} catch (error){
		if(error instanceof Error){
			res.status(500).json({
				message: error.message
			 });
		} else {
			res.status(500).json({ message: "Ha ocurrido un error desconocido" });
		}

	}
}
