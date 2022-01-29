import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

import { ForbiddenException } from '../exception/forbidden.exception';

@Injectable()
export class APIKeyMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const apiKey = req.headers['api-key'];
    if (!apiKey) {
      //return res.status(403).json({ msg: 'API Key is required' });
      throw new ForbiddenException();
    }
    req['apiKey-check'] = 'Checked';
    next();
  }
}
