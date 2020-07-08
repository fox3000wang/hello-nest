# 管道

## 概念

https://docs.nestjs.com/pipes

![](https://docs.nestjs.com/assets/Pipe_1.png)

```shell
npm i --save class-validator class-transformer
```

将要字符串转成数字的管道

```js
import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  BadRequestException,
} from '@nestjs/common';

@Injectable()
export class ParseIntPipe implements PipeTransform<string> {
  async transform(value: string, metadata: ArgumentMetadata) {
    const val = parseInt(value, 10);
    if (isNaN(val)) {
      throw new BadRequestException('Validation failed');
    }
    return val;
  }
}
```
