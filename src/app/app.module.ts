import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { LeftNavComponent } from './left-nav/left-nav.component';
import { BrowsePageComponent } from './browse-page/browse-page.component';
import { BrowseTopNavComponent } from './browse-page/components/browse-top-nav/browse-top-nav.component';
import { BrowseMusicStripComponent } from './browse-page/components/browse-music-strip/browse-music-strip.component';
import { BrowseBigCardComponent } from './browse-page/components/browse-big-card/browse-big-card.component';
import { BrowseGenresMoodsComponent } from './browse-page/components/browse-genres-moods/browse-genres-moods.component';
import { BrowseMiniCardComponent } from './browse-page/components/browse-mini-card/browse-mini-card.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { PlaylistHeaderComponent } from './playlist/components/playlist-header/playlist-header.component';
import { PlaylistInfoBarComponent } from './playlist/components/playlist-info-bar/playlist-info-bar.component';
import { PlaylistListComponent } from './playlist/components/playlist-list/playlist-list.component';

import { UrlService } from './services/url/url.service';

@NgModule({
	declarations: [
		AppComponent,
		LeftNavComponent,
		BrowsePageComponent,
		BrowseTopNavComponent,
		BrowseMusicStripComponent,
		BrowseBigCardComponent,
		BrowseGenresMoodsComponent,
		BrowseMiniCardComponent,
		PlaylistComponent,
		PlaylistHeaderComponent,
		PlaylistInfoBarComponent,
		PlaylistListComponent
	],
	imports: [AppRoutingModule, BrowserModule, HttpModule],
	providers: [UrlService],
	bootstrap: [AppComponent]
})
export class AppModule {}
