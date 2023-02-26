import mongoose, { Document, Schema } from "mongoose";

interface ArticleModel extends Document {
	title: string;
	content: string;
	date: Date;
	image: string;

}

const  ArticleSchema: Schema = new Schema({
	title: { type: String, required: true, unique: true },
	content: { type: String, required: true },
	date: {type: Date, default: Date.now },
	image: {type: String, default: "default.png" }
})

const Article = mongoose.model<ArticleModel>("Article", ArticleSchema);

export default Article
