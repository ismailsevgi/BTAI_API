import { User } from './../interfaces/user.interface';
import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';

import { CreateUserDto } from '../dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USER_MODEL')
    private userModel: Model<User>,
  ) {}

  //this.usersService.create(createUserDto);
  //Body'den gelen dto ile burada alınan şema eş değer oluyor.
  //Sonra model kullanılarak yeni bir data mongoose ile db ye kayıt ediliyor
  async create(createUserDto: CreateUserDto): Promise<User> {
    const createdUser = new this.userModel(createUserDto);
    return createdUser.save();
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }
}
