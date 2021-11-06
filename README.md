# Welcome to the KissAnime project

## About our Project:
This web application is intended to help Anime(Japanese animation) lovers to:
- Discover new anime releases
- View animie information
- Manage Anime collections: keep track of animes that you are watching, watched, or plan to watch

## Heroku Link:
[KissAnime](https://kissanime-frontend.herokuapp.com/)

## About our API:

Our project would use [Kitsu](https://hummingbird-me.github.io/api-docs/#tag/Anime) as the external API.
Kitsu is a modern anime discovery platform that helps people track the anime you're watching, discover new anime and socialize with other fans. Kitsu has its own database. 

## Search criteria

The user can enter any characters in the search box. The [Kitsu](https://hummingbird-me.github.io/api-docs/#tag/Anime) API would use users' input to query the database and return the result. If there are some matches in the database, our project would show the results. If not, nothing would be shown.

The API uses fuzzy searching to find relevant animes, which means the API would find all animes that are likely to be relevant to the search keyword.

## Summary results

The result would show a couple of things:
- The title of the anime.
- The poster image of the anime.
- The average rating of this anime.
- The description (and source) of this anime.


