Polymer("app-nav-bar",{
  ready: function() {

    this.choices = [
      {id:"0", label: "choice one"},
      {id:"1", label: "choice two"},
      {id:"2", label: "choice three"}
    ];

    //can't use core-signals because of Chrome App CSP (unsafe)
    document.addEventListener('yo', function(event) {
      /* Yo app-nav-bar You've got a message! */
      if (event.detail.action == "closeMenu") {
        this.$.navDrawerContainer.classList.remove('open');
      } else {
        if (event.detail.action == "toggleMenu") {
          this.$.navDrawerContainer.classList.toggle('open');
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

    this.$.navDrawerContainer.addEventListener("click", function(evt) {
      if (evt.target.nodeName === 'A' || evt.target.nodeName === 'LI') {
        // call closeMenu --> fire event
        var event = new CustomEvent("yo", {detail:{action:"closeMenu", choice:evt.target.hash}});
        document.dispatchEvent(event);
      }
    }.bind(this));

  }
});
