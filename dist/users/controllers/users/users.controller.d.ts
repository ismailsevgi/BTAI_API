import { CreateUserDto } from '../../dto/create-user.dto';
import { UsersService } from '../../services/users.service';
import { User } from '../../interfaces/user.interface';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto): Promise<User>;
    findAll(): Promise<User[]>;
}
