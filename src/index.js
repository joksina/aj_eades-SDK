import ENDPOINTS from './constant'

class LOTR {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.apiURL = ENDPOINTS.DEFAULT_URL;
  }

  async fetchAPI(url, options = {}) {
    const headers = {
      'Authorization': `Bearer ${this.apiKey}`,
      'Content-Type': 'application/json',
    };

    options.headers = Object.assign(options.headers || {}, headers);

    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    return await response.json();
  }

  async getMovies() {
    const url = `${this.apiURL}${ENDPOINTS.MOVIES}`;
    const data = await this.fetchAPI(url);
    return data.docs;
  }

}

module.exports = LOTR;