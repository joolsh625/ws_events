'use strict';
/**
 * Add your functions here...
 */

function targetTextToConsole(event) {
    console.log(event.target.textContent);
}
function tttcAttacher() {
    window.button0.addEventListener("click", targetTextToConsole);
}

function lovelyParaAttacher() {
    window.thisisalovelyparagraph.addEventListener("click", lovelyToggle);
}

function lovelyButtonAttacher() {
    window.button1.addEventListener("click", lovelyToggle);
}

function concatAttacher() {
    window.in1.addEventListener("change", concatAttacherEvent);
    window.in2.addEventListener("change", concatAttacherEvent);
}
function concatAttacherEvent() {
    window.out1.textContent += event.target.value;
    event.target.removeEventListener("change", concatAttacherEvent);
}