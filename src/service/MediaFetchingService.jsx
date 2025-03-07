import { CONFIG } from '../config.jsx';

export const mediaFetchingService = {
    async getSuggestions(itemType, itemId, options) {
        const endpoint = CONFIG.BACKEND_ENDPOINTS[itemType];

        const requestUrl = `${CONFIG.BACKEND_URL}${endpoint}?id=${itemId}&top_n=${CONFIG.DEFAULT_TOP_N}&initial_year=${options.initialYear}&final_year=${options.finalYear}`;
    
        try {
            const response = await fetch(requestUrl);
            
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