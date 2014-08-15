

Polymer("app-main-screen",{
  ready: function() {

    this.converter = new Showdown.converter();

    Object.assign(this.$.markdownContent, selectorAbility);

    this.content = {
      title:"Adamantium",
      text: "Welcome to my Chrome App Starter Kit."
    };

    new Adamantium.Request(this.srcContent).get().then(function (data) {
      //console.log(data);
      this.$.markdownContent.innerHTML = this.converter.makeHtml(data);

      this.$.markdownContent.find("pre").all().forEach(function (block) {
        hljs.highlightBlock(block);
      })

    }.bind(this));

    //can't use core-signals because of Chrome App CSP (unsafe)
    document.addEventListener('yo', function(event) {
      /* Yo app-main-screen You've got a message! */
      if (event.detail.choice) {
        console.log("choice", event.detail.choice);
      }
      if (event.detail.action == "closeMenu") {
        document.body.classList.remove('open');
      } else {
        if (event.detail.action == "toggleMenu") {
          document.body.classList.toggle('open');
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

    //can't add onclick="{{buttonClick}}" inside HTML -> Chrome App CSP (unsafe)
    //CSP: Content Security Policy
    this.$.mainContent.addEventListener("click", function(evt) {
      // call closeMenu --> fire event
      var event = new CustomEvent("yo", {detail:{action:"closeMenu"}});
      document.dispatchEvent(event);
    }.bind(this));

  }
});


