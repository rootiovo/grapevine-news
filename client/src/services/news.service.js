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

    static async searchNews(queryString) {
        let request = await axios.get('/api/news/:search', {
            params: {
                query: queryString
            }
        })
        return request.data
    };
};

export default NewsService;
