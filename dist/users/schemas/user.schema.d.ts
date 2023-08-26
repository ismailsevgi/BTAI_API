import * as mongoose from 'mongoose';
export declare const UserSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    name?: string | undefined;
    age?: number | undefined;
}, mongoose.Document<unknown, {}, {
    name?: string | undefined;
    age?: number | undefined;
}> & {
    name?: string | undefined;
    age?: number | undefined;
} & {
    _id: mongoose.Types.ObjectId;
}>;
