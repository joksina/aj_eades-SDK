import ENDPOINTS from './constants.js'

class LOTR {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.apiURL = ENDPOINTS.DEFAULT_URL;
    this.movieURL = `${this.apiURL}${ENDPOINTS.MOVIE}`;
    this.quoteURL = `${this.apiURL}/${ENDPOINTS.QUOTE}`;
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

  async getMovieData(urlLink) {
    const url = `${urlLink}`;
    const data = await this.fetchAPI(url);
    return data;
  }

  async getMovies() {
    return this.getMovieData(this.movieURL);
  }

  async getMovieByID(id) {
    const url = `${this.movieURL}/${id}`;
    return this.getMovieData(url);
  }

  async getMovieQuoteByID(id) {
    const url = `${this.movieURL}/${id}/${ENDPOINTS.QUOTE}`;
    return this.getMovieData(url);
  }

  async getQuote() {
    return this.getMovieData(this.quoteURL);
  }

  async getQuoteByID(id) {
    const url = `${this.quoteURL}/${id}`;
    return this.getMovieData(url);
  }

}

export default LOTR;
