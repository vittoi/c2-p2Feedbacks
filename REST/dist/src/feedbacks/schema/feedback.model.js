"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeedbackSchema = void 0;
const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");
exports.FeedbackSchema = new mongoose.Schema({
    pattern: String,
    user: String,
    description: String,
    category: String,
    createdAt: String,
}, {
    collection: 'feedbacks',
    versionKey: false
}).plugin(mongoosePaginate);
//# sourceMappingURL=feedback.model.js.map