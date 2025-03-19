import { CONFIG } from '../config.jsx';

export const mediaFetchingService = {

    add_list_to_url(requestUrl, list, arg_name) {
        if (list && list.length > 0) {
            list.forEach(value => {
                requestUrl.searchParams.append(arg_name, value);
            });
        }
    },

    async fetchSuggestions(endpoint, params) {
        const requestUrl = new URL(`${CONFIG.BACKEND_URL}${endpoint}`);

        params.top_n = CONFIG.DEFAULT_TOP_N;

        Object.entries(params).forEach(([key, value]) => {
            if (Array.isArray(value)) {
                this.add_list_to_url(requestUrl, value, key);
            } else {
                requestUrl.searchParams.append(key, value);
            }
        });

        const finalUrl = requestUrl.toString();

        try {
            const response = await fetch(finalUrl);
            
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }

            return await response.json();
        } catch (error) {
            console.error(`Error fetching suggestions:`, error);
            throw error;
        }
    },

    async getMediaBasedSuggestions(suggestionType, params) {
        const endpoint = CONFIG.BACKEND_ENDPOINTS[suggestionType];

        return await this.fetchSuggestions(endpoint, params);
    },

    async getUserBasedSuggestions(suggestionType, params) {
        const endpoint = CONFIG.BACKEND_ENDPOINTS["USER"][suggestionType];

        return await this.fetchSuggestions(endpoint, params);
    }
}