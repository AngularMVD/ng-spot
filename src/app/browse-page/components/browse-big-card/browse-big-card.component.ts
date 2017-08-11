import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-browse-big-card',
	templateUrl: './browse-big-card.component.html',
	styleUrls: ['./browse-big-card.component.scss']
})
export class BrowseBigCardComponent implements OnInit {
	@Input() name: string;
	@Input() image: string;
	@Input() desc: string;

	constructor() {}

	ngOnInit() {}
}
