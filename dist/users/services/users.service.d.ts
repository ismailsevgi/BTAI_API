import { User } from './../interfaces/user.interface';
import { Model } from 'mongoose';
import { CreateUserDto } from '../dto/create-user.dto';
export declare class UsersService {
    private userModel;
    constructor(userModel: Model<User>);
    create(createUserDto: CreateUserDto): Promise<User>;
    findAll(): Promise<User[]>;
}
