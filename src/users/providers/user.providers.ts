import { UserSchema } from './../schemas/user.schema';
import { Connection } from 'mongoose';

export const usersProviders = [
  {
    provide: 'USER_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('users', UserSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
