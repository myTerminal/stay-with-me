#!/usr/bin/env node

/* global require setInterval setTimeout */

const keySender = require('node-key-sender');

const consoleLog = console.log,
    interval = 30 * 1000,
    changeState = () => {
        keySender.sendKey('scroll_lock');
    };

console.log = () => {};

setInterval(
    () => {
        changeState();
        setTimeout(changeState, 500);
    },
    interval
);

consoleLog('I\'m right with you!');
