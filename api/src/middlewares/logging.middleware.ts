import { Middleware, ExpressMiddlewareInterface } from 'routing-controllers';
import * as express from 'express';

@Middleware({ type: 'before', priority: 3 })
export class LoggingMiddleware implements ExpressMiddlewareInterface {

    use(request: any, response: express.Response, next: (err: any) => any): any {
        console.log(`${request.method} ${request.host}${request.url} - ${new Date()}`);
        next(null);
    }
}
