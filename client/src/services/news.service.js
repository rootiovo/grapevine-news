import axios from 'axios';

class NewsService {
  static async getNews(sources) {
    const request = await axios.get('/api/news', {
      params: {
        sourceList: sources,
      },
    });
    return request.data;
  }

  static async searchNews(query, sources) {
    const request = await axios.get('/api/news/search', {
      params: {
        queryString: query,
        sourceList: sources,
      },
    });
    return request.data;
  }

  static async getNewsByCategory(categoryString) {
    const request = await axios.get('/api/news/category', {
      params: {
        category: categoryString,
      },
    });

    return request.data;
  }
}

export default NewsService;
