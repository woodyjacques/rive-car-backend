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
      host: 'brwt9tnsydkcqmjfbslc-mysql.services.clever-cloud.com',
      username: 'ujrk8mhytngnrbpa',
      password: 'VgkxBRlijn4PVJVTb6c1',
      database: 'brwt9tnsydkcqmjfbslc',
      entities: [join(__dirname + '/**/*.entity{.ts,.js}')],
      synchronize: false,
      ssl: {
        rejectUnauthorized: false,
      },
      extra: {
        connectionLimit: 10,
      },
      logging: ['query', 'error'],
    }),
    UsersModule,
    AuthModule
  ],
})
export class AppModule { }
