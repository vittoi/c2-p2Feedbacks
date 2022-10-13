import * as mongoose from 'mongoose';
import { ConnectOptions } from 'mongoose';
const DB_TEST_MONGO_URI = 'mongodb://localhost:27017/Extensao?directConnection=true';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect(DB_TEST_MONGO_URI,
        {
          useUnifiedTopology:true,
          useNewUrlParser:true
        }as ConnectOptions
      )
  },
];
  