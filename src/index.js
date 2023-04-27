import ENDPOINTS from './constants.js'

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

  async getData(urlLink) {
    const url = `${urlLink}`;
    const data = await this.fetchAPI(url);
    return data;
  }

  async getMovies() {
    const url = `${this.apiURL}/${ENDPOINTS.MOVIE}`;
    return this.getData(url);
  }

  async getMovieByID(id) {
    const url = `${this.apiURL}${ENDPOINTS.MOVIE}/${id}`;
    return this.getData(url);
  }

  async getMovieQuoteByID(id) {
    const url = `${this.apiURL}${ENDPOINTS.MOVIE}/${id}/${ENDPOINTS.QUOTE}`;
    return this.getData(url);
  }

  async getQuote() {
    const url = `${this.apiURL}/${ENDPOINTS.QUOTE}`;
    return this.getData(url);
  }

  async getQuoteByID(id) {
    const url = `${this.apiURL}${ENDPOINTS.QUOTE}/${id}`;
    return this.getData(url);
  }

}

export default LOTR;
