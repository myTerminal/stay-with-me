# stay-with-me

[![npm version](https://badge.fury.io/js/stay-with-me.svg)](https://badge.fury.io/js/stay-with-me)
[![npm downloads](https://img.shields.io/npm/dt/stay-with-me.svg)](https://www.npmjs.com/package/stay-with-me)  
[![Build Status](https://travis-ci.org/myTerminal/stay-with-me.svg?branch=master)](https://travis-ci.org/myTerminal/stay-with-me)
[![Code Climate](https://codeclimate.com/github/myTerminal/stay-with-me.png)](https://codeclimate.com/github/myTerminal/stay-with-me)
[![Coverage Status](https://img.shields.io/coveralls/myTerminal/stay-with-me.svg)](https://coveralls.io/r/myTerminal/stay-with-me?branch=master)  
[![Dependency Status](https://david-dm.org/myTerminal/stay-with-me.svg)](https://david-dm.org/myTerminal/stay-with-me)
[![devDependency Status](https://david-dm.org/myTerminal/stay-with-me/dev-status.svg)](https://david-dm.org/myTerminal/stay-with-me#info=devDependencies)
[![peer Dependency Status](https://david-dm.org/myTerminal/stay-with-me/peer-status.svg)](https://david-dm.org/myTerminal/stay-with-me#info=peerDependencies)  
[![License](https://img.shields.io/badge/LICENSE-GPL%20v3.0-blue.svg)](https://www.gnu.org/licenses/gpl.html)  
[![NPM](https://nodei.co/npm/stay-with-me.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/stay-with-me/)

A very light-weight utility to keep a computer awake

## What is it?

*stay-with-me* is a command-line utility that tends to be one of the most simplistic and lightweight applications to keep your computer awake (prevent the screensaver to show up, display to turn off and eventually the computer from sleeping).

## Installation

*stay-with-me* is available on *Npm*. You can install it globally with a simple command.

    npm install -g stay-with-me

## How to Use

Run *stay-with-me* from any command line it starts working in the background.

    stay-with-me

or 

    swm

You still need to keep the command line window running for *stay-with-me* to continue working.

In order to quit, press `Ctrl-C` or if you like to do it the rude way, close the command line window it is running in.

## Dependencies

* [node-key-sender](https://www.npmjs.com/package/node-key-sender)
* Java runtime
