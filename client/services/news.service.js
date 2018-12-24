import axios from 'axios';

class NewsService {
    static async getNews() {
        let request = await axios.get('/api/news');
        return request.data;
    }
}

export default NewsService;