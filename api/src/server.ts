import 'reflect-metadata';
import { createExpressServer } from 'routing-controllers';
import { PlaylistController } from './controllers/playlist.controller';

const expressServer = createExpressServer({
    controllers: [PlaylistController]
});

expressServer.listen(3000, () => console.log('Connected on port 3000'));
