import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-browse-page',
	templateUrl: './browse-page.component.html',
	styleUrls: ['./browse-page.component.scss']
})
export class BrowsePageComponent implements OnInit {
	public name = 'Browse';
	constructor() {
		setTimeout(() => (this.name = 'Yet Another Spotyngular Workshop'), 2000);
	}

	ngOnInit() {}
}
