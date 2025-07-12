export const TMDB_CONFIG = {
    BASE_URL: 'https://api.themoviedb.org/3',
    API_KEY: process.env.EXPO_PUBLIC_API_MOVIE_KEY,
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.EXPO_PUBLIC_API_MOVIE_KEY}`,
    },
};

export const fetchMovies = async ({ query }: { query: string }) => {
    const endPoint = query
        ? `${TMDB_CONFIG.BASE_URL}/search/movie?query=${encodeURIComponent(
              query
          )}`
        : `${TMDB_CONFIG.BASE_URL}/discover/movie?sort_by=popularity.desc`;

    //fetch the data
    const response = await fetch(endPoint, {
        method: 'GET',
        headers: TMDB_CONFIG.headers,
    });
    //check for errors
    if (!response.ok) {
        //@ts-ignore
        throw new Error('Failed to fetch movies', response.statusText);
    }
    const data = await response.json();
    return data.results;
};

// const url =
//     'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
//
