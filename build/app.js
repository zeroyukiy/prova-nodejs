"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const basic_1 = __importDefault(require("./routes/basic"));
const app = (0, express_1.default)();
app.use('/example', basic_1.default);
app.listen(8000, () => {
    console.log('Server is running on port 8000');
});
