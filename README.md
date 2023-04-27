## Lord Of The Ring SDK

This is a Javascript SDK for an existing Lord of the Rings API using [the One API](https://the-one-api.dev/). This SDK only covers the movie and quote endpoints

## Getting Started

Before running the command below, Go to [the One API](https://the-one-api.dev/) to sign up and learn more. You will need to register to get an access token to use the SDK. Run the command below to install the LOTR SDK

```
npm install aj_lotr-sdk
```

## USAGE
After installing, import code below to your file

```js
import LOTR from 'aj_lotr-sdk';

const apiKey = 'your-access-token';
const lotrApi = new LOTR(apiKey);
```
## Examples
To get all movies

```js
lotrApi.getMovies()
.then((movies) => {
  // handle response
});
```

To get a single movie

```js
lotrApi.getMovieByID("id")
.then((movie) => {
  // handle response
});
```
