import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PageModule } from './page/page.module';
import { Page } from './page/page.entity';

const { DB_HOST, DB_PORT, DB_NAME, DB_USERNAME, DB_PASSWORD } = process.env;

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mongodb',
    url: `mongodb://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
    entities: [Page],
    synchronize: true
  }), PageModule]
})
export class AppModule {}
