import * as mongoose from 'mongoose';
import * as mongoosePaginate from 'mongoose-paginate-v2';

export const QuestionSchema = new mongoose.Schema(
{
    about: String,
    answersOptions: Array<Object>,
    description: String,
    createdAt: String,
},{ 
    collection:'questions',
    versionKey: false //here
}).plugin(mongoosePaginate);

export interface Question {
    readonly _id: mongoose.ObjectId;
    readonly about: string;
    readonly answersOptions: Array<Object>;
    readonly description: string;
    readonly createdAt: string;
}
