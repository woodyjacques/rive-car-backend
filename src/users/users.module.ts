import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { userrivecar } from "./entities/user.entity";
import { UsersController } from "./users.controller";
import { UsersService } from "./users.service";

@Module({
  imports: [TypeOrmModule.forFeature([userrivecar])],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}

