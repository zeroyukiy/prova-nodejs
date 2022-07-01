import express, { Request, Response, Router } from 'express';
import stream from 'stream';
import fs from 'fs';

const router: Router = express.Router();

router.get('/', (req: Request, res: Response) => {
  // console.log(req.headers.referer);

  res.json({
    status: 'Ok',
    statusCode: 200,
    data: {},
  });
});

router.get('/image.jpg', (req: Request, res: Response) => {
  const r: string | undefined = req.headers.referer;
  fs.writeFile('log.txt', r ? r : '', (err) => {
    if (err) console.error(err);
  });

  const readStream = fs.createReadStream('./images/100x100.png');
  const ps = new stream.PassThrough();
  stream.pipeline(readStream, ps, (err) => {
    if (err) {
      console.log(err);
      return res.sendStatus(400);
    }
  });
  ps.pipe(res);
});

export default router;
