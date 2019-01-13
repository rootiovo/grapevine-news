import axios from 'axios';

class NewsService {
    static async getNews(filter) {
        let request = await axios.get('/api/news', {
            params: {
                filter: filter
            }
        })
        return request.data
    };

    static async searchNews(query) {
        let request = await axios.get('/api/news/:search', {
            params: {
                queryString: query
            }
        })
        return request.data
    };
};

export default NewsService;
