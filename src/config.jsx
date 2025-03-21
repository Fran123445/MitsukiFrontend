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
        MANGA: "/similarity/manga",
        USER: {
            ANIME: "/similarity/user/anime",
            MANGA: "/similarity/user/manga",
            DATA: "/user"
        }
    },
    MEDIA_FORMAT: {
        ANIME: [
            "TV",
            "MOVIE",
            "OVA",
            "TV_SHORT",
            "ONA"
        ],
        MANGA: [
            "MANGA",
            "ONE_SHOT",
            "NOVEL"
        ]
    },
    MEDIA_MAPS: {
        ANIME: "/assets/anime_dict.json",
        MANGA: "/assets/manga_dict.json"
    }
}