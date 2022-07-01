"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const stream_1 = __importDefault(require("stream"));
const fs_1 = __importDefault(require("fs"));
const router = express_1.default.Router();
router.get('/', (req, res) => {
    // console.log(req.headers.referer);
    res.json({
        status: 'Ok',
        statusCode: 200,
        data: {},
    });
});
router.get('/image', (req, res) => {
    const r = req.headers.referer;
    fs_1.default.writeFile('log.txt', r ? r : '', (err) => {
        if (err)
            console.error(err);
    });
    const readStream = fs_1.default.createReadStream('./images/100x100.png');
    const ps = new stream_1.default.PassThrough();
    stream_1.default.pipeline(readStream, ps, (err) => {
        if (err) {
            console.log(err);
            return res.sendStatus(400);
        }
    });
    ps.pipe(res);
});
exports.default = router;
