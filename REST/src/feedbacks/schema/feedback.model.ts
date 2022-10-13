import * as mongoose from 'mongoose';
import * as mongoosePaginate from 'mongoose-paginate-v2';

export const FeedbackSchema = new mongoose.Schema(
{
    pattern: String,
    user: String,
    description: String,
    category:String,
    createdAt: String,
},{ 
    collection:'feedbacks',
versionKey: false //here
}).plugin(mongoosePaginate);

export interface Feedback {
    readonly _id: string;
    readonly pattern: string;
    readonly user: string;
    readonly description: string;
    readonly category: string;
    readonly createdAt: string;
}
