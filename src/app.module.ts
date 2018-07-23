import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PageModule } from './page/page.module';
import { Page } from './page/page.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mongodb',
    url: 'mongodb://localhost:27017',
    host: 'localhost',
    username: 'root',
    password: 'root',
    database: 'simple-crud-api',
    entities: [Page],
    synchronize: true
  }), PageModule]
})
export class AppModule {}
