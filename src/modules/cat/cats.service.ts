import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreateCatDto } from '../../dto/create-cat.dto';
import { Cat } from '../../schemas/cat.schema';

@Injectable()
export class CatsService {
  constructor(@InjectModel(Cat.name) private readonly catModel: Model<Cat>) {}

  // 连接
  // 有时你可能需要连接原生的Mongoose连接对象，你可能在连接对象中想使用某个原生的API。
  // 你可以使用如下的@InjectConnection()装饰器来注入Mongoose连接。
  // constructor(@InjectConnection() private connection: Connection) {}

  async create(createCatDto: CreateCatDto): Promise<Cat> {
    const createdCat = new this.catModel(createCatDto);
    return createdCat.save();
  }

  async findAll(): Promise<Cat[]> {
    return this.catModel.find().exec();
  }
}
