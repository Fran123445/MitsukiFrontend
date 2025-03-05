export const CONFIG = {
    YEAR_RANGE: {
        MIN: 1900,
        MAX: Date().getFullYear()
    },
    DEFAULT_TOP_N: 25,
    MEDIA_TYPES: {
        ANIME: {
            backendEndpoint: "/similarity/anime",
            externalLink: "https://anilist.co/anime/{id}"
        },
        MANGA: {
            backendEndpoint: "/similarity/manga",
            externalLink: "https://anilist.co/manga/{id}"
        }
    }
}