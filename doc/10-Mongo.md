# Mongo

https://docs.nestjs.cn/7/techniques?id=mongo

## 安装所有必需的依赖项

```bash
npm install --save @nestjs/mongoose mongoose
npm install --save-dev @types/mongoose
```

安装过程完成后，我们可以将其 MongooseModule 导入到根目录 AppModule 中

```
app.module.ts
```

```js
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nest')],
})
export class AppModule {}
```
