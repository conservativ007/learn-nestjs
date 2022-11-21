import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostModule } from './post/post.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      database: 'postgres',
      username: 'postgres',
      password: '12345',
      entities: [join(__dirname, '**', '*.entity{.ts,.js}')],
      migrations: [join(__dirname, '**', '*.migration{.ts,.js}')],
      synchronize: true,
    }),
    PostModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
