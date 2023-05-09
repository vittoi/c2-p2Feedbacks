import * as mongoose from 'mongoose';
import * as mongoosePaginate from 'mongoose-paginate-v2';

export const PatternSchema = new mongoose.Schema(
{
    name:String,
    explanation: Array<String>,
    path: Object,
    createdAt: String,
},{ 
    collection:'patterns',
versionKey: false //here
}).plugin(mongoosePaginate);

export interface Pattern {
    readonly _id: mongoose.ObjectId;
    readonly name: String;
    readonly explanation: Array<String>;
    readonly path: Object;
    readonly createdAt: String;
}