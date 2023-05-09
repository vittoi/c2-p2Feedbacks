import * as mongoose from 'mongoose';
export declare const FeedbackSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, "type", {
    pattern?: string;
    user?: string;
    description?: string;
    category?: string;
    createdAt?: string;
}>;
export interface Feedback {
    readonly _id: mongoose.ObjectId;
    readonly pattern: string;
    readonly user: string;
    readonly description: string;
    readonly category: string;
    readonly createdAt: string;
}
