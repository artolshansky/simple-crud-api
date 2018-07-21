import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';

import { PageService } from './page.service';
import { Page } from './page.entity';

@Controller('page')
export class PageController {
  constructor(private readonly pageService: PageService) {}

  @Get('/all')
  findAll(): Promise<Page[]> {
    return this.pageService.findAll();
  }

  @Get()
  findOne(@Query() query: { link: string }): Promise<Page> {
    return this.pageService.findOne(query.link);
  }

  @Post()
  create(@Body() body: Page): Promise<Page> {
    return this.pageService.create(body);
  }

  @Patch('/:id')
  update(@Param() params: { id: string },
         @Body() body: Page): Promise<Page> {
    return this.pageService.update(params.id, body);
  }

  @Delete('/:id')
  delete(@Param() params: { id: string }): Promise<Page> {
    return this.pageService.delete(params.id);
  }
}
