// Name:Justin Barlowe
// Title: httpclient.js
// Date: 7/15/2023
// Description: JavaScript file for week 8

export class HttpClient {

    async get(url, params = '') {
      url = new URL(url);
      url.search = new URLSearchParams(params);
      
      const res = await fetch(url.toString(), {
        method: "GET"
      });
  
      return res.json();
    }
  }