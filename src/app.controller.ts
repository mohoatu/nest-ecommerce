import { Controller, Get, Render } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  @Render('index')
  root() {
    return {
      title: 'NestJS E-Commerce API',
      graphqlEndpoint: '/graphql',
    };
  }
}
