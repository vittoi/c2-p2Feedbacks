import { Injectable} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateFeedbackDto } from './dto/create-feedback.dto';
import { UpdateFeedbackDto } from './dto/update-feedback.dto';
import { Feedback } from './schema/feedback.model';

@Injectable()
export class FeedbacksService {

  constructor( @InjectModel('Feedback') private dbModel: Model<Feedback>,){
    
  }
  
  async create(create: CreateFeedbackDto) {
    const created = new this.dbModel(create);
    const clientCreated = await created.save();
    return clientCreated;
  }

  findAll(limit:number, sort: any, query:any, random:boolean) {
    if(random){
      return this.dbModel.find(query).limit(limit).sort({createdAt: sort}).skip(Math.floor(Math.random()*10)).exec();
    }
    return this.dbModel.find(query).sort({createdAt: sort}).limit(limit).exec();
    
  }

  findOne(id: number) {
    return `This action returns a #${id} feedback`;
  }

  update(id: number, updateFeedbackDto: UpdateFeedbackDto) {
    return `This action updates a #${id} feedback`;
  }

  remove(id: number) {
    return `This action removes a #${id} feedback`;
  }
}
