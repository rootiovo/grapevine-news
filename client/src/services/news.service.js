import axios from 'axios'

class NewsService {
    static async getNews(filter) {
        let request = await axios.get('/api/news', {
            params: {
                filter: filter
            }
        })
        return request.data
    }
}

export default NewsService