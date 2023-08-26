import { Module } from '@nestjs/common';
import { UsersController } from '../controllers/users/users.controller';
import { UsersService } from '../services/users.service';
import { usersProviders } from '../providers/user.providers';
import { DatabaseModule } from '../../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [UsersController],
  providers: [UsersService, ...usersProviders],
})
export class UsersModule {}
