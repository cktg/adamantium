/**
 * adamantium.js - copyright @k33G_org
 * version 0.0.0
 * https://github.com/metals/adamantium
 * MIT License
 */

var Adamantium = (function () {
  var adamantium = {};

  adamantium.loadScript = function (urlSrc, callBack) {
    var scriptEl = document.createElement('script');
    scriptEl.src = urlSrc;
    scriptEl.addEventListener('load', function(){
      callBack(scriptEl)
    }, false);
    document.head.appendChild(scriptEl);
  }

  adamantium.Request = speculoos.Class({

    constructor: function Request (url) {
      this.request = new XMLHttpRequest();
      this.url = url;
    },
    url: function (url) {
      this.url = url;
      return this;
    },
    sendRequest: function () { /*json or text only*/

      return new Promise(function (resolve, reject) {
        this.request.open(this.method, this.url);
        this.request.onload = function () {
          // If the request was successful
          if (this.request.status === 200) {
            // Get the type of the response
            var type = this.request.getResponseHeader("Content-Type");
            // Check type
            if (type === "application/json") {
              resolve(JSON.parse(this.request.response)); // JSON response
            } else {
              resolve(this.request.response); // String response
            }
          } else { /* oups */
            reject(Error(this.request.statusText));
          }
        }.bind(this);
        // Handle network errors
        this.request.onerror = function() {
          reject(Error("Network Error"));
        };

        this.request.setRequestHeader("Content-Type", "application/json");
        this.request.send(this.method === undefined ? null : JSON.stringify(this.data));
      }.bind(this));
    },
    get: function (id) {
      this.url = id === undefined ? this.url : this.url + "/" + id;
      this.method = "GET";
      return this.sendRequest();
    },
    post: function (jsonData) {
      this.method = "POST";
      this.data = jsonData;
      return this.sendRequest();
    },
    put: function (jsonData, id) {
      this.url = id === undefined ? this.url : this.url + "/" + id;
      this.method = "PUT";
      this.data = jsonData;
      return this.sendRequest();
    },
    delete: function (id) {
      this.url = id === undefined ? this.url : this.url + "/" + id;
      this.method = "DELETE";
      return this.sendRequest();
    }
  });

  return adamantium;
}());