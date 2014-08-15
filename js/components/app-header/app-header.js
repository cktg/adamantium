
Polymer("app-header",{
  ready: function () {

    //can't add onclick="{{buttonClick}}" inside HTML -> Chrome App CSP (unsafe)
    //CSP: Content Security Policy
    //menuButton is id of node : <button id="menuButton" class="menu">
    this.$.menuButton.addEventListener("click", function(evt) {this.buttonClick(evt);}.bind(this));

    //can't use core-signals because of Chrome App CSP (unsafe)
    document.addEventListener('yo', function(event) {
      /* Yo app-header You've got a message! */
      if (event.detail.action == "closeMenu") {
        this.$.header.classList.remove('open');
      } else {
        if (event.detail.action == "toggleMenu") {
          this.$.header.classList.toggle('open');
        } else {
          console.log("Something wrong");
        }
      }
    }.bind(this));

    /*
     how to fire event
     var event = new CustomEvent("yo", {"detail":{"from":"bob"}});
     document.dispatchEvent(event);
    */

  },
  buttonClick: function (evt) {
    //call toggleMenu -> fire event
    var event = new CustomEvent("yo", {detail:{action:"toggleMenu"}});
    document.dispatchEvent(event);
  }
});
