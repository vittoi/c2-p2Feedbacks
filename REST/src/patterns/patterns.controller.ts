import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { PatternsService } from './patterns.service';
import { CreatePatternDto } from './dto/create-pattern.dto';
import { UpdatePatternDto } from './dto/update-pattern.dto';
import { Req } from '@nestjs/common/decorators';

@Controller('patterns')
export class PatternsController {
  constructor(private readonly patternsService: PatternsService) {}

  @Post()
  create(@Body() createPatternDto: CreatePatternDto) {
    return this.patternsService.create(createPatternDto);
  }

  @Get('/path')
  findByPath(@Req() req:any) {
    let path = JSON.parse(req.body.path.replace(/&quot;/g,'"'))
    let query ={};
    for(let field in path){
      query['path.'+field] = path[field];
    }
    return this.patternsService.findByPath(query);
  }

}
