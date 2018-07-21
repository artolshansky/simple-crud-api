import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Page } from './page.entity';

@Injectable()
export class PageService {
  constructor(@InjectRepository(Page)
              private readonly pageRepository: Repository<Page>) {}

  async findAll(): Promise<Page[]> {
    return await this.pageRepository.find();
  }

  async findOne(link: string): Promise<Page> {
    return await this.pageRepository.findOne({ path: link });
  }

  async create(body: Page): Promise<Page> {
    const date = new Date();
    // TODO: add to path's end -${unique-counter}
    const path = `${body.title.replace(' ', '-')}-${date.getMonth() + 1}-${date.getDate()}`;

    return await this.pageRepository.save({
      ...body,
      path,
      createdAt: new Date(),
      updatedAt: new Date()
    });
  }

  async update(id: string, body: Page): Promise<Page> {
    const page = await this.pageRepository.findOne(id);

    return await this.pageRepository.save({
      ...page,
      ...body,
      updatedAt: new Date()
    });
  }

  async delete(id: string): Promise<Page> {
    const page = await this.pageRepository.findOne(id);

    return await this.pageRepository.remove(page);
  }
}