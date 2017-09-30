#!/usr/bin/env node

/* global require setInterval setTimeout */

var keySender = require('node-key-sender');

var consoleLog = console.log,
    interval = 30 * 1000,
    changeState = function () {
        keySender.sendKey('scroll_lock');
    };

console.log = function () {};

setInterval(function () {
    changeState();
    setTimeout(changeState, 500);
}, interval);

consoleLog('I\'m right with you!');
