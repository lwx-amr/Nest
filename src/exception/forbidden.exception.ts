import { HttpException, HttpStatus } from '@nestjs/common';

export class ForbiddenException extends HttpException {
  constructor() {
    super('API key is required', HttpStatus.FORBIDDEN);
  }
}
