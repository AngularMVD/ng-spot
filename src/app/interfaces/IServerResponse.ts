import { IFeaturedPlayList } from './IFeaturedPlaylist';
import { IGenre } from './IGenre';

export interface IServerResponse {
	featuredPlaylists: Array<IFeaturedPlayList>;
	genres: Array<IGenre>;
}
