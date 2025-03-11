import { CONFIG } from '../config.jsx';

export const mediaFetchingService = {
    async getSuggestions(itemType, itemId, options) {
        const endpoint = CONFIG.BACKEND_ENDPOINTS[itemType];

        const requestUrl = new URL(`${CONFIG.BACKEND_URL}${endpoint}`);

        requestUrl.searchParams.append('id', itemId);
        requestUrl.searchParams.append('top_n', CONFIG.DEFAULT_TOP_N);
        requestUrl.searchParams.append('initial_year', options.initialYear);
        requestUrl.searchParams.append('final_year', options.finalYear);
        requestUrl.searchParams.append('minimum_score', options.minimumScore);
        requestUrl.searchParams.append('maximum_score', options.maximumScore);
        
        if (options.excludedGenres && options.excludedGenres.length > 0) {
            options.excludedGenres.forEach(genre => {
                requestUrl.searchParams.append('excluded_genres', genre);
            });
        }

        const finalUrl = requestUrl.toString();

        try {
            const response = await fetch(finalUrl);
            
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }

            return await response.json();
        } catch (error) {
            console.error(`Error fetching ${itemType} suggestions:`, error);
            throw error;
        }
    }
}