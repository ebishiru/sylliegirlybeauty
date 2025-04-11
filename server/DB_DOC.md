# MONGO_DB Documentation

## Collection Overview

To assist in understanding the keys of each collection in the database, they have been written out below for your convenience.

---

### users collection

```js
{
    _id: "01"
    name: Sylvia
    email: //string
    password: //string
}
```

As the website is made solely for Sylvia, login credentials is limited to only one user.

---

### products collection

```js
{
    _id: //string - generated with uuidv4
    name: //string
    brand: //string
    storeUrls: //array of urls strings
    src: //string - image link address for upload convenience
    toggleShow: //string - "true" or "false"
    linkedVideos: //array of videoIds strings
}
```
