import { forwardRef, Module } from '@nestjs/common';
import { QuestionsService } from './questions.service';
import { QuestionsController } from './questions.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { QuestionSchema } from './schema/question.model';

@Module({
  imports :[
    MongooseModule.forFeature([{name: 'Question', schema: QuestionSchema,}]),
    forwardRef(()=> QuestionsModule)
],
  controllers: [QuestionsController],
  providers: [QuestionsService]
})
export class QuestionsModule {}
