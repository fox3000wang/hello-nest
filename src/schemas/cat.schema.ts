import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

/**
  模型注入
  在Mongoose中，一切都源于 Scheme，每个 Schema 都会映射到 MongoDB 的一个集合，并定义集合内文档的结构。
  Schema 被用来定义模型，而模型负责从底层创建和读取 MongoDB 的文档。

  Schema 可以用 NestJS 内置的装饰器来创建，或者也可以自己动手使用 Mongoose的常规方式。
  使用装饰器来创建 Schema 会极大大减少引用并且提高代码的可读性。
 */
@Schema()
export class Cat extends Document {
  @Prop()
  name: string;

  @Prop()
  age: number;

  @Prop()
  breed: string;
}

export const CatSchema = SchemaFactory.createForClass(Cat);

// 如果你不喜欢使用装饰器，你可以使用 mongoose.Schema 手动定义一个 Schema。

/*
import * as mongoose from 'mongoose';

export const CatSchema = new mongoose.Schema({
  name: String,
  age: Number,
  breed: String,
});
*/
