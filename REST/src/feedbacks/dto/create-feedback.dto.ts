import {IsOptional, IsString } from 'class-validator';

export class CreateFeedbackDto {
    @IsString()
    pattern: string;

    @IsString()
    user: string;

    @IsString()
    description: string;

    @IsString()
    category: string;

    @IsOptional()
    createdAt: string;
}
