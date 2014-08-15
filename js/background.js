/**
 * background.js - copyright @k33G_org
 * version 0.0.0
 * https://github.com/metals/animator
 * MIT License
 */

chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create(
    "../window.html",
    {
      id: "mainWindow"
    }
  );

});
