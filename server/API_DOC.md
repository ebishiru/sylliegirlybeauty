# API Documentation

## Endpoints Overview

| URL                    | Method | Description                                                    |
| ---------------------- | ------ | -------------------------------------------------------------- |
| `"/youtubevideos"`     | `GET`  | Returns an array of the last 50 videos from Syllie's channel   |
| `"/products"`          | `GET`  | Returns an array of all the products                           |
| `"/product"`           | `POST` | Adds a new object to the products database                     |
| `"/product"`           | `PATCH` | Edits a single object from the products database              |
| `"/product"`           | `DELETE` | Remove a single object from the products database            |
| `"/login"`             | `POST` | Confirms if the proper credentials are provided                |

---

## Responses Overview

Each of these endpoints will return an object. What it contains depends on if it succeeded or failed.

If there is an issue, the response object will contain a status and a message.

```js
{
  "status": >=400,
  "message": "...",
}
```

If the server was successful, there will always be a status in the object, but any other key values pairings will depend on the endpoint.

---

## Endpoint Details

### "/youtubevideos" (GET)

On success
```js
{
  "status": 200,
  "data": [...],
}
```

Elements of the `data` array will be objects multiple keys. Some example notable key paths include: `[0].snippet.title` , `[0].snippet.thumbnails.high.url` and `[0].snippet.resourceId.videoId`, where the number represents the video index. 

For the full list of keys, please visit the YouTube Data API documentation.

Unsuccessful status codes: 400, 403 (YouTube API V3 quota exceeded).

---

### "/products" (GET)

On success
```js
{
  "status": 200,
  "data": [...],
}
```

The `data` array will include all the product objects. Each object will have keys of `_id`, `name`, `brand`, `storeUrls`, `src`, `toggleShow` and `linkedVideos`.

Unsuccessful status code: 502.

---

### "/product" (POST)

On success
```js
{
  "status": 201,
  "message": "Product Recommendation successfully created."
}
```

The `message` confirms that the request was successfully handled.

Unsuccessful status codes: 400, 502.

---

### "/product" (PATCH)

On success
```js
{
  "status": 202,
  "message": "Product successfully updated."
}
```

The `message` confirms that the request was successfully handled.

Unsuccessful status codes: 400, 404, 502.

---

### "/product" (DELETE)

On success
```js
{
  "status": 200,
  "message": "Product successfully removed."
}
```

The `message` confirms that the request was successfully handled.

Unsuccessful status codes: 400, 502.

---

### "/login" (POST)

On success
```js
{
  "status": 200,
  "message": "Login successful."
}
```

The `message` confirms that the proper credentials were provided.

Unsuccessful status codes: 400, 502.

---