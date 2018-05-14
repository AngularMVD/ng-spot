import 'reflect-metadata';
import { createExpressServer, useExpressServer, Action, UnauthorizedError } from 'routing-controllers';
import { LoggingMiddleware } from './middlewares/logging.middleware';
import { PlaylistController } from './controllers/playlist.controller';

const expressServer = createExpressServer({
    cors: true,
    routePrefix: '/v1',
    middlewares: [
        LoggingMiddleware,
    ],
    interceptors: [
    ],
    controllers: [PlaylistController],
});

expressServer.listen(3000, () => console.log('Connected on port 3000'));
