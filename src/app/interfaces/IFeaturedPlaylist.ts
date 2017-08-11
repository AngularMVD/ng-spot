export interface IFeaturedPlayList {
	id: string;
	name: string;
	image: string;
	desc: string;
	followers: number;
	playlist: Array<ISong>;
}

export interface ISong {
	song: string;
	artist: string;
	album: string;
	duration: string;
}
