# Syllie Girly Beauty Website

Hello! This is my first ever solo full-stack project.

This website was primarily created for my partner (Sylvia), to promote her beauty and video content.

## Pages Overview

| Path                  | Page              |
| --------------------- | ----------------- | 
| `"/"`                 | Home Page         | 
| `"/videos"`           | Videos Page       | 
| `"/video:videoId"`    | Video Page        | 
| `"/products"`         | Products Page     | 
| `"/login"`            | Login Page        | 
| `"/admin"`            | Admin Page        | 
| `"/admin/addProduct"` | Add Product Page  |
| `"/admin/:productId"` | Edit Product Page |

---


## Page Features:

**1. Home Page**

Sylvia's TikTok, Instagram, YouTube and Bio links can be visited by clicking on the appropriate icons.
Additionally, the home page includes the latest YouTube videos (4) and newest product recommendations (5) by Syllie.


**2. Videos Page**

A list of YouTube Videos and Shorts are shown, ordered from their upload date. The videos are limited to 20 a page with pagination options below.
Clicking on the videos brings you to their appropriate video page.


**3. Video Page**

The embedded video is shown with autoplay.
Moreover, should there be any recommended products in the video, they will be visible below.


**4. Products Page**

This page includes a bunch of product recommendations created by Syllie. 
Picture, brand, name and store links are all included.
Similarly, pagination options are present below.

**5. Login Page**

The user will need to manually enter this path to get here.
From here, the required credentials will be required to access further.

**6. Admin Page**

All the products are listed here. New products can be added by clicking on the empty `+` block. Additionally, each product can be editted, toggled `Show` or `Hide` and deleted, with their appropriate buttons.

![Image](https://github.com/user-attachments/assets/118f62f2-bf1d-4a7d-95a8-8f88d7a3660e)

**7. Add Product Page**

Only accessible by the admin, a form can be completed to add more entries to the recommended products database.

![Image](https://github.com/user-attachments/assets/a9b48b7b-78f5-4f1d-9068-1205ca2d7083)

**8. Edit Product Page**

Products details may also be adjusted here or updated to fit certain needs.
Likewise, it is only accessible by the admin.

---

## Key Things to Note:

Please note that an `.env` file will be required to host the backend.

.env will need to have keys for `MONGO_URI`, `YT_KEY` & `CHANNEL_ID`.

---

## Closing Remarks:

The website, just like my partner's content creation progress is still in its early days. We plan on continuously updating it to fit her needs as it grows.

Thank you for reading,

-Kevin Lo

---

## Syllie's Ongoing Future Requests:
- Home Page picture and Banner to update when her YouTube Profile updates (need to use Auth0 w/ YouTube API V3)
- Links to be renamed based on url, eg. StyleKorean, YesStyle, Stylevana
- Holy Grail items (add new `grail` key to select products)
