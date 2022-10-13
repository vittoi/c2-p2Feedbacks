"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeedbacksService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let FeedbacksService = class FeedbacksService {
    constructor(dbModel) {
        this.dbModel = dbModel;
    }
    async create(create) {
        const created = new this.dbModel(create);
        const clientCreated = await created.save();
        return clientCreated;
    }
    findAll(limit, sort, query, random) {
        console.log(limit, sort, query, random);
        if (random) {
            return this.dbModel.find(query).limit(limit).sort({ createdAt: sort }).skip(Math.floor(Math.random() * 10)).exec();
        }
        return this.dbModel.find(query).sort({ createdAt: sort }).limit(limit).exec();
    }
    findOne(id) {
        return `This action returns a #${id} feedback`;
    }
    update(id, updateFeedbackDto) {
        return `This action updates a #${id} feedback`;
    }
    remove(id) {
        return `This action removes a #${id} feedback`;
    }
};
FeedbacksService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Feedback')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], FeedbacksService);
exports.FeedbacksService = FeedbacksService;
//# sourceMappingURL=feedbacks.service.js.map