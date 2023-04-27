# Lord Of The Ring SDK Implementation

## Overview

This is a Javascript SDK for an existing Lord of the Rings API using [the One API](https://the-one-api.dev/). This SDK only covers the movie and quote endpoints and can be used in JS application, including web applications built with frameworks like React or Vue.js.

Below are the functions in this SDK that you can use to retrieve data:

* **getMovies()**: Lists all the movies
* **getMovieByID(id)**: Gets a specific movie by id
* **getMovieQuoteByID**: Gets the quotes for a specific movie
* **getQuote**: Lists all movie quotes
* **getQuoteByID**: Gets a specific movie quote

Please see [The One API](https://the-one-api.dev/documentation) Documentations for additional information

## Getting Started

### Requirements

Before running the command below, Go to [the One API](https://the-one-api.dev/) to sign up. You will need to register to get an access token to use the SDK. 

### Installation

Run the command below to install the LOTR SDK

```
npm install aj_lotr-sdk
```

## USAGE
To use the SDK, you can either `import` it to your file or `require` it. See example below:

```js
// import
import LOTR from 'aj_lotr-sdk';
// require
const LOTR = require('aj_lotr-sdk');

// don't forget to get your access token
const apiKey = 'your-access-token';
const lotrApi = new LOTR(apiKey);
```
## Examples
To get all movies

```js
lotrApi.getMovies()
.then((movies) => {
  // handle successful response
}).catch((err) {
  //  handle error
});
```

To get a single movie

```js
lotrApi.getMovieByID("id")
.then((movie) => {
  // handle successful response
}).catch((err) => {
  // handle error
});
```

Note: If you prefer using `await`, 
```js
try {
  const getMovies = await lotrApi.getMovies();
} catch (error) {
  // handle error
}
```


