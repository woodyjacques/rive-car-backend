import { Module } from '@nestjs/common';
import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'b0iezi8ucrlxjynakxhc-mysql.services.clever-cloud.com',
      username: 'ul6jfokeo9buourz',
      password: 'M5vjh8JbjikoBSpBdbbK',
      database: 'b0iezi8ucrlxjynakxhc',
      entities: [join(__dirname + '/**/*.entity{.ts,.js}')],
      synchronize: false,
      ssl: {
        rejectUnauthorized: false,
      }
    }),
    UsersModule,
    AuthModule
  ],
})
export class AppModule { }
