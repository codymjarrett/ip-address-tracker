# Cody Jarrett: Meroxa UI code challenge

[live site](https://ip-address-tracker-arqt.onrender.com/)

Although I was able to deploy my site, unfortunately, it doesn't work as expected. The deployed site is using a SSL encrypted URL (HTTPS) whereas the [ip-api](https://ip-api.com/) endpoint is using HTTP. 

An HTTPS page that includes content fetched using cleartext HTTP is called a [mixed content](https://developer.mozilla.org/en-US/docs/Web/Security/Mixed_content?utm_source=mozilla&utm_medium=firefox-console-errors&utm_campaign=default) page. [IP API](https://ip-api.com/) provides a SSL (HTTPS) encryption option but it is not available on the free tier. So it is best that this project be ran locally. 

To run, simply clone down this repo and run a live server or open up the index.html file in the browser. I would suggest Firefox or any browser other than Chrome. The Geolocation API doesn't work as expected in Chrome when running locally, it no longer supports obtaining the user's location using the Geolocation API from pages delivered by non-secure connections (localhost or other http protocals). See [blog](https://developer.chrome.com/blog/geolocation-on-secure-contexts-only) from Google. 

