import express, { Request, Response, Router } from 'express';

const router: Router = express.Router();

router.get('/', (req: Request, res: Response) => {
  console.log(req.headers.referer);

  res.json({
    status: 'Ok',
    statusCode: 200,
    data: {},
  });
});

export default router;
