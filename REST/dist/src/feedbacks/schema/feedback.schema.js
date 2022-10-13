"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeedbackSchema = void 0;
const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");
exports.FeedbackSchema = new mongoose.Schema({
    pattern: String,
    user: String,
    description: String,
}).plugin(mongoosePaginate);
//# sourceMappingURL=feedback.schema.js.map