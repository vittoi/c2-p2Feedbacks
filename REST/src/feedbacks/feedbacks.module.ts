import { forwardRef, Module } from '@nestjs/common';
import { FeedbacksService } from './feedbacks.service';
import { FeedbacksController } from './feedbacks.controller';
import { FeedbackSchema } from './schema/feedback.model';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports :[
    MongooseModule.forFeature([{name: 'Feedback', schema: FeedbackSchema,}]),
    forwardRef(()=> FeedbacksModule)
],
  controllers: [FeedbacksController],
  providers: [FeedbacksService]
})
export class FeedbacksModule {}
