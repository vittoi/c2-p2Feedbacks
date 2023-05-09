import { Injectable } from '@nestjs/common';
import { InjectModel} from '@nestjs/mongoose';
import {isValidObjectId, Model} from 'mongoose';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { Question } from './schema/question.model';

@Injectable()
export class QuestionsService {
  constructor( @InjectModel('Question') private dbModel: Model<Question>,){
    
  }

  async findOne(about: string) {
    let question = await this.dbModel.find({about: about}).exec();
    return question;
  }

}
