# Movie House

**Movie House** is a web application built with **Next.js** that allows users to browse movies, view movie details, explore genres and directors, and get helpful information through dynamic routes and server-side rendering. The app uses static JSON data and demonstrates various Next.js concepts like static generation, dynamic routes, and client-side rendering.

## Features

- **Home Page**: Displays trending movies and provides a button to browse genres.
- **Dynamic Routes**: For movie details (`/movies/[id]`) and director info (`/movies/[id]/director`).
- **Nested Routes**: Shows director information within each movie detail page.
- **Catch-All Route**: Handles different help pages (e.g., `/help/faqs`, `/help/contact`).
- **Static Generation (SSG)**: Generates pages for the home and movie listings using `getStaticProps()`.
- **Incremental Static Regeneration (ISR)**: Used to revalidate pages at regular intervals.
- **Server-Side Rendering (SSR)**: Used for the `/genres` page to fetch data on the server.
- **Client-Side Rendering (CSR)**: Uses `useSWR` to fetch director data dynamically.
- **Custom 404 Page**: Friendly error page with a "Go Home" button.

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/murtaza9611/movie-house.git