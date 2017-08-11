# Yet Another Spotyngular Workshop

## Pre-requisites
Please make sure you have the latest @angular/cli installed, along with nodejs 6.9 or newer.
Also clone this repo, we will take the assets from here.

## Useful CLI commands
* Create the project: `ng new angular-workshop`
* Create a new component: `ng g component my-component`
* Create a new service: `ng g service my-service`
* Run the application: `ng serve`

## Components structure
```
app
├── browse
│   ├── genres-moods
│   │	└── mini-card
│   ├── music-strip
│   │	└── big-card
│   └── top-nav
└── playlist
    ├── header
    ├── info-bar
    └── list
```

## Available assets
* Component's templates: the HTML we will use for the application. In some cases the template may have comments
* Component's styles in SCSS.
* Color palette: *_palette.scss*. Make sure this file gets imported in every other scss file which needs to use colors;
* Images
* Fonts

## Application
The app is a clone of Spotify. We will just focus on two pages: the browse page and the playlist page.
We will need to setup the router to navigate from one to the other.

## Roadmap
1. Create the project: `ng new angular-workshop —-style=scss`
2. Run the application: `ng serve`
3. Create the root component: `app`.
4. Create the `left-nav` component and use it in the app template.
5. Create `browse-page` component
6. Create the module routing (cd src/app && ng g module app-routing), create the routes, import in app.module, add router-outlet.
7. Create the `browse-top-nav` component, use it in the browse-page.
8. Create the `browse-music-strip` component:
	* Get the featured playlists from the server: `assets/database.json`. We must import the `HttpModule` in the app.module in order to use the http service.
	* Use the interfaces to find out the data types.
	* Depending on the solution we use to get the data from the server, we might need to import rx operators in main.ts.
9. Create the `browse-big-card` component. Use it in the music-strip.
10. Create the `browse-genres-moods` component.
	* Get the genres from the server.
11. Create the `browse-mini-card` component and use it in the *browse-genres-moods*.
12. Create the `playlist` component.
13. Add route for playlist and navigate from the big-card click in the music-strip.
14. Create the `playlist-header` component and use it in the *playlist*.
15. Create the `playlist-info-bar` component and use it in the *playlist*.
16. Create the `playlist-list` component and use it in the *playlist*.
17. Add url service to pass information from music-strip to playlist (`ng g service url`)
18. Move http calls to new service
