import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrowsePageComponent } from '../browse-page/browse-page.component';
import { PlaylistComponent } from '../playlist/playlist.component';

const routes: Routes = [
	{ path: '', pathMatch: 'full', component: BrowsePageComponent },
	{ path: 'playlist/:id', component: PlaylistComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
