import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PageService } from './page.service';
import { PageController } from './page.controller';
import { Page } from './page.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Page])],
  providers: [PageService],
  controllers: [PageController]
})
export class PageModule {}
