import mongoose, { Document, Model, Schema } from "mongoose";

export interface ArticleModel extends Document {
	title: string;
	content: string;
	date: Date;
	image?: string;

}

const  ArticleSchema: Schema = new Schema({
	title: { type: String, required: true, unique: true },
	content: { type: String, required: true },
	date: {type: Date, default: Date.now },
	image: {type: String }
})

export const Article: Model<ArticleModel> = mongoose.model<ArticleModel>("Article", ArticleSchema);


