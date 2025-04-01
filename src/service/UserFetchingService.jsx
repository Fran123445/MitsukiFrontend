import { CONFIG } from '../config.jsx';

export const userFetchingService = {
    async fetchUser(username, platform) {
        try {
            const requestUrl = new URL(`${CONFIG.BACKEND_URL}${CONFIG.BACKEND_ENDPOINTS.USER.DATA[platform]}`);
            requestUrl.searchParams.append("username", username);
            const finalUrl = requestUrl.toString();

            const response = await fetch(finalUrl);

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            return await response.json();
        } catch (error) {
            console.error(`Error fetching user:`, error);
            throw error;
        }
    }
}
