import { Injectable } from '@angular/core';

@Injectable()
export class UrlService {
	private params: any;

	public set currentParams(params) {
		this.params = params;
	}

	public get currentParams(): any {
		return this.params;
	}
}
