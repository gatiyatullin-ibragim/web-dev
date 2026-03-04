# Album Browser — Lab 6: Routing & HTTP

An Angular 17 SPA that lets you browse, view, edit, and delete albums from the JSONPlaceholder REST API.

## Features

- 6 configured routes with Angular Router
- AlbumService with full CRUD via HttpClient
- Album list, detail, and photo gallery views
- Loading indicators and empty states
- Responsive photo grid with hover overlays

## Prerequisites

- Node.js ≥ 18
- Angular CLI: `npm install -g @angular/cli`

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
ng serve

# Open in browser
http://localhost:4200
```

## Project Structure

```
src/app/
├── app.component.*          # Root layout + navbar
├── app.config.ts            # App providers (Router, HttpClient)
├── app.routes.ts            # Route definitions
├── models/
│   ├── album.model.ts       # Album interface
│   └── photo.model.ts       # Photo interface
├── services/
│   └── album.service.ts     # All API calls via HttpClient
└── components/
    ├── home/                # Welcome page
    ├── about/               # About page
    ├── albums/              # Albums list (with delete)
    ├── album-detail/        # Album detail + edit title
    └── album-photos/        # Photo grid
```

## API

Uses [JSONPlaceholder](https://jsonplaceholder.typicode.com):
- `GET /albums` — all albums
- `GET /albums/:id` — single album
- `GET /albums/:id/photos` — album photos
- `PUT /albums/:id` — update album (simulated)
- `DELETE /albums/:id` — delete album (simulated)
