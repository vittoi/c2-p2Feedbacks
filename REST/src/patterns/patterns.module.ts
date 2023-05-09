import { forwardRef, Module } from '@nestjs/common';
import { PatternsService } from './patterns.service';
import { PatternsController } from './patterns.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PatternSchema } from './schema/pattern.model';

@Module({
  imports :[
    MongooseModule.forFeature([{name: 'Pattern', schema: PatternSchema,}]),
    forwardRef(()=> PatternsModule)
  ],
  controllers: [PatternsController],
  providers: [PatternsService]
})
export class PatternsModule {}
