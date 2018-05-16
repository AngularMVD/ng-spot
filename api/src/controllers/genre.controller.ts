import { JsonController, Param, Body, Get, Post, Put, Delete } from 'routing-controllers';

@JsonController()
export class GenreController {
	@Get('/genre')
	getAll() {
		return this.data;
	}

	private data = [
		{
		  "image": "assets/genres/party.jpg",
		  "name": "Party"
		},
		{
		  "image": "assets/genres/chill.jpg",
		  "name": "Chill"
		},
		{
		  "image": "assets/genres/comedy.jpg",
		  "name": "Comedy"
		},
		{
		  "image": "assets/genres/romance.jpg",
		  "name": "Romance"
		},
		{
		  "image": "assets/genres/pop.jpg",
		  "name": "Pop"
		},
		{
		  "image": "assets/genres/latin.jpg",
		  "name": "Latin"
		},
		{
		  "image": "assets/genres/workout.jpg",
		  "name": "Workout"
		},
		{
		  "image": "assets/genres/edm.jpg",
		  "name": "Edm"
		},
		{
		  "image": "assets/genres/indie.jpg",
		  "name": "Indie"
		},
		{
		  "image": "assets/genres/decades.jpg",
		  "name": "Decades"
		},
		{
		  "image": "assets/genres/genre.jpg",
		  "name": "Genre"
		}
	];
}
