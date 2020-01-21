# NestJS-Guide

NestJS Zero to Hero - Modern TypeScript Back-end Development
Source: https://www.udemy.com/course/nestjs-zero-to-hero/

Setup
npm install -g @nestjs/cli

nest --version

Create New Project
nest new nestjs-task-management // Ex.: nestjs-task-management as the name of the project

Delete following files from nestjs-task-management:
/src/app.controller.spec.ts
/src/app.controller.ts
/src/app.service.ts

At app.module.ts remove commented lines:
import { Module } from '@nestjs/common';
#import { AppController } from './app.controller';
#import { AppService } from './app.service';

@Module({
imports: [],
#controllers: [AppController],
#providers: [AppService],
})
export class AppModule {}

Run Project
npm run start:dev
