import { NextFunction, Request, Response } from 'express';
import jsonwebtoken from 'jsonwebtoken';

function scanUser(req: Request, res: Response, next: NextFunction) {
  const header = req.header('Authorization');

  if (header == null) return res.status(403).send({ message: 'Invalid' });
  const token = header;

  if (token == null)
    return res.status(403).send({ message: "token can't be null" });

  jsonwebtoken.verify(token, process.env.TOKENPASSWORD!, (err) => {
    if (err) return res.status(403).send({ message: 'token invalid' + err });
    next();
  });
}

export { scanUser };
