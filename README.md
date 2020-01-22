# NestJS-Guide

NestJS Zero to Hero - Modern TypeScript Back-end Development

Source: [udemy](https://www.udemy.com/course/nestjs-zero-to-hero/)

## Setup
```
npm install -g @nestjs/cli

nest --version
```
## Create New Project
```
nest new nestjs-task-management
```

**Delete following files from nestjs-task-management:**

/src/app.controller.spec.ts

/src/app.controller.ts

/src/app.service.ts

**At app.module.ts remove commented lines:**
```typescript
import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';

@Module({
    imports: [],
    // controllers: [AppController],
    // providers: [AppService],
})
export class AppModule {}
```
## Run Project
```shell
npm run start:dev
```
### Create Module
```shell
nest g module tasks
```

### Create Controller
```shell
nest g controller tasks --no-spec
```

### Create Service
```shell
nest g service tasks --no-spec
```