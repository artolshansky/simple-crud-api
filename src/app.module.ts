import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PageModule } from './page/page.module';

@Module({
  imports: [TypeOrmModule.forRoot(), PageModule]
})
export class AppModule {}
