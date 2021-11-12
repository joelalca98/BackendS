"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startConnection = void 0;
const mongoose_1 = require("mongoose");
async function startConnection() {
    await (0, mongoose_1.connect)('mongodb://localhost/photo-gallery-db', {
    //useNewUrlParser: true,  --> Nueva version no hace falta
    //useUnifiedTopolgy: true,
    });
    console.log('Database is connected');
}
exports.startConnection = startConnection;
