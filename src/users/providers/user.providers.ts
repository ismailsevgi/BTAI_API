import { UserSchema } from './../schemas/user.schema';
import { Connection } from 'mongoose';

export const usersProviders = [
  {
    provide: 'USER_MODEL',
    //'users == collection name, UserSchema === "One of schema inside this collection"'
    useFactory: (connection: Connection) =>
      connection.model('users', UserSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
