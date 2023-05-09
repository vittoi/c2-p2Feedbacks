import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePatternDto } from './dto/create-pattern.dto';
import { UpdatePatternDto } from './dto/update-pattern.dto';
import { Pattern } from './schema/pattern.model';

@Injectable()
export class PatternsService {
  constructor( @InjectModel('Pattern') private dbModel: Model<Pattern>,){
    
  }
  create(createPatternDto: CreatePatternDto) {
    return 'This action adds a new pattern';
  }

  async findByPath(path: Object) {
    
    let patterns = await this.dbModel.find(path).exec();

    return patterns;
  }
}
