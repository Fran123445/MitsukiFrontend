export const CONFIG = {
    YEAR_RANGE: {
        MIN: 1900,
        MAX: 2025
    },
    DEFAULT_TOP_N: 25,
    MEDIA_EXTERNAL_LINKS: {
        ANIME: "https://anilist.co/anime/{id}",
        MANGA: "https://anilist.co/manga/{id}"
    },
    BACKEND_URL: "http://localhost:8000",
    BACKEND_ENDPOINTS: {
        ANIME: "/similarity/anime",
        MANGA: "/similarity/manga"
    }
}