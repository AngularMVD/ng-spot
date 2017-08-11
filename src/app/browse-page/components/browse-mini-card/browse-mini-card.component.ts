import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-browse-mini-card',
	templateUrl: './browse-mini-card.component.html',
	styleUrls: ['./browse-mini-card.component.scss']
})
export class BrowseMiniCardComponent implements OnInit {
	@Input() image: string;
	@Input() name: string;
	constructor() {}

	ngOnInit() {}
}
