import { CONFIG } from '../config.jsx';

export const mediaFetchingService = {

    add_list_to_url(requestUrl, list, arg_name) {
        if (list && list.length > 0) {
            list.forEach(value => {
                requestUrl.searchParams.append(arg_name, value);
            });
        }
    },

    async getSuggestions(recommendationType, itemId, options) {
        const endpoint = CONFIG.BACKEND_ENDPOINTS[recommendationType];

        const requestUrl = new URL(`${CONFIG.BACKEND_URL}${endpoint}`);

        requestUrl.searchParams.append('id', itemId);
        requestUrl.searchParams.append('top_n', CONFIG.DEFAULT_TOP_N);
        requestUrl.searchParams.append('initial_year', options.initialYear);
        requestUrl.searchParams.append('final_year', options.finalYear);
        requestUrl.searchParams.append('minimum_score', options.minimumScore);
        requestUrl.searchParams.append('maximum_score', options.maximumScore);
        
        this.add_list_to_url(requestUrl, options.excludedGenres, 'excluded_genres');
        this.add_list_to_url(requestUrl, options.includedGenres, 'included_genres');
        this.add_list_to_url(requestUrl, options.selectedFormats, 'formats');

        const finalUrl = requestUrl.toString();

        try {
            const response = await fetch(finalUrl);
            
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }

            return await response.json();
        } catch (error) {
            console.error(`Error fetching ${recommendationType} suggestions:`, error);
            throw error;
        }
    }
}