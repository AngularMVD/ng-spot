"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var routing_controllers_1 = require("routing-controllers");
var playlist_controller_1 = require("./controllers/playlist.controller");
var expressServer = routing_controllers_1.createExpressServer({
    controllers: [playlist_controller_1.PlaylistController]
});
expressServer.listen(3000, function () { return console.log('Connected on port 3000'); });
//# sourceMappingURL=server.js.map