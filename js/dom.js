/* eslint-disable no-unused-vars */
function getElemId(id) {
    return document.getElementById(id);
}

function getClassName(cn) {
    return document.getElementsByClassName(cn);
}

function querSel(qs) {
    return document.querySelector(qs);
}

function getElemName(nm) {
    return document.getElementsByName(nm);
}

function getTagNameNS(tnns) {
    return document.getElementsByTagName(tnns);
}

function getTagName(tn) {
    return document.getElementsByTagName(tn);
}

function createElem(type) {
    return document.createElement(type);
}

function createTextNode(text) {
    return document.createTextNode(text);
}

const domToken = true;