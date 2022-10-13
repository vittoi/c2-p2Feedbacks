import { Controller, Get, Post, Body, Patch, Param, Delete, Req, Query } from '@nestjs/common';
import { FeedbacksService } from './feedbacks.service';
import { CreateFeedbackDto } from './dto/create-feedback.dto';
import { UpdateFeedbackDto } from './dto/update-feedback.dto';
import * as moment from 'moment';


@Controller('feedbacks')
export class FeedbacksController {
  constructor(private readonly feedbacksService: FeedbacksService) {}

  @Post()
  create(@Body() createFeedbackDto: CreateFeedbackDto) {
    createFeedbackDto.createdAt = moment().toISOString();
    return this.feedbacksService.create(createFeedbackDto);
  }

  @Get()
  findAll(@Req() req: any) {
    let limit = req.body.limit;
    let random = req.body.random;
    let sort = req.body.sort;

    delete req.body.limit;
    delete req.body.random;
    delete req.body.sort;

    return this.feedbacksService.findAll(limit, sort, req.body, random);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.feedbacksService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFeedbackDto: UpdateFeedbackDto) {
    return this.feedbacksService.update(+id, updateFeedbackDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.feedbacksService.remove(+id);
  }
}


