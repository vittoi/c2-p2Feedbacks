import { forwardRef, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FeedbacksModule } from './feedbacks/feedbacks.module';
import { MongooseModule } from '@nestjs/mongoose';
import { PatternsModule } from './patterns/patterns.module';
import { QuestionsModule } from './questions/questions.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/?directConnection=true'),
  forwardRef(() => FeedbacksModule),
  PatternsModule,
  QuestionsModule
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
