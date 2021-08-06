/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
/* eslint-disable new-cap */
/* eslint-disable one-var */
/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
let version = "0.2-alpha",
    inputId = "",
    hist = [],
    histReturnInt = 0,
    displayPrompt = true,
    environmentVariables = [],
    globalCommandList = [],
    currentDir = "\\",
    inputLengthSubtractor = 0,
    path = require("path"),
    fs = require("fs"),
    readDirOut = "",
    userInterfaceClass = new userInterface(),
    commandsClass = new commands(),
    zoomLevel = 100,
    electronRemote = require("electron").remote,
    envToken = true;