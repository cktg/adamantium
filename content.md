###Speculoos sample

    var Thing = speculoos.Class({
        constructor : function Thing (kind) { /* you have to name the constructor */
            this.kind = kind;
            var _nickName = '???';
            this.getNickName = function () { return _nickName; }
            this.setNickName = function (nickName) { _nickName = nickName; }
        },
        sayHello : function() {
            console.log("Hello !");
        }
    })