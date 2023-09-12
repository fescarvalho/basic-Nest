import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';

global.users = [];

@Injectable()
export class UsersService {
  getUsers(): any[] {
    return global.users;
  }
  create(user: CreateUserDto) {
    return global.users.push(user);
  }
}
