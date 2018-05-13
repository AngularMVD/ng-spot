import { JsonController, Param, Body, Get, Post, Put, Delete } from 'routing-controllers';

@JsonController()
export class PlaylistController {

    @Get('/playlist')
    getAll() {
        return 'This action returns all users';
    }
}
