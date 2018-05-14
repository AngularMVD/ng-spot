import { JsonController, Param, Body, Get, Post, Put, Delete } from 'routing-controllers';

@JsonController()
export class PlaylistController {

    @Get('/playlist')
    getAll() {
        return [
            {
                'song': 'Twins',
                'artist': 'matt Kivel',
                'album': 'days of being Wild',
                'duration': '00:40'
            },
            {
                'song': 'Elf River',
                'artist': 'Six Shoots',
                'album': 'For Octavio Paz',
                'duration': '03:11'
            },
            {
                'song': 'Itasca',
                'artist': 'Paul Brothers',
                'album': 'Borderline EP',
                'duration': '02:48'
            },
            {
                'song': 'Lost Lula',
                'artist': 'Sea wolf',
                'album': 'Long Gone Out',
                'duration': '03:34'
            },
            {
                'song': 'Quiet Voices',
                'artist': 'David Guetta',
                'album': 'Snapshot true',
                'duration': '04:52'
            },
            {
                'song': 'The wanting',
                'artist': 'Blake Mills',
                'album': 'Heigh Ho',
                'duration': '03:22'
            }
        ];
    }

    
}
