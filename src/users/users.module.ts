import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { Module } from '@nestjs/common';

@Module({
  imports: [UsersModule],
  providers: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
