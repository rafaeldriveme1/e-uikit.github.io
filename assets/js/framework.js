"use strict";

var $win = $(window);
var $doc = $(document);

var main = {
    "events": function events() {

        console.log("main events working!!!");
    },
    "methods": {

        "func1": function func1(a) {

            return a + 1;
        },
        "func2": function func2(a, cb) {
            return a + cb(a);
        }

    },
    "init": function init() {

        this.events();
        //this.methods();
    }
};

$win.load(function () {

    main.init();
});

$doc.ready(function () {

    main.init();
});

// usado na função 'require' do NODEJS
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = main;
}