"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var FeedbacksModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeedbacksModule = void 0;
const common_1 = require("@nestjs/common");
const feedbacks_service_1 = require("./feedbacks.service");
const feedbacks_controller_1 = require("./feedbacks.controller");
const feedback_model_1 = require("./schema/feedback.model");
const mongoose_1 = require("@nestjs/mongoose");
let FeedbacksModule = FeedbacksModule_1 = class FeedbacksModule {
};
FeedbacksModule = FeedbacksModule_1 = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: 'Feedback', schema: feedback_model_1.FeedbackSchema, }]),
            (0, common_1.forwardRef)(() => FeedbacksModule_1)
        ],
        controllers: [feedbacks_controller_1.FeedbacksController],
        providers: [feedbacks_service_1.FeedbacksService]
    })
], FeedbacksModule);
exports.FeedbacksModule = FeedbacksModule;
//# sourceMappingURL=feedbacks.module.js.map