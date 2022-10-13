"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = void 0;
const mongoose = require("mongoose");
const DB_TEST_MONGO_URI = 'mongodb://localhost:27017/Extensao?directConnection=true';
exports.databaseProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: () => mongoose.connect(DB_TEST_MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        })
    },
];
//# sourceMappingURL=database.providers.js.map