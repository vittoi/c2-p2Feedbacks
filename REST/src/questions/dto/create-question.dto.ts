import {IsOptional, IsString } from 'class-validator';
import mongoose from 'mongoose';

export class CreateQuestionDto {
    @IsString()
    about: string;

    @IsString()
    answersOptions: Object;

    @IsString()
    description: string;

    @IsOptional()
    createdAt: string;
}