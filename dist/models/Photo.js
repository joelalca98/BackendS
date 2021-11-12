"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({
    title: String,
    description: String,
    imagePath: String,
    Fotografo: {
        type: String,
        ref: 'Fotografo'
    }
});
exports.default = (0, mongoose_1.model)('Photo', schema);
