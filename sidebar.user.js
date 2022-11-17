// ==UserScript==
// @name         Better Sidebar
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Supports adding custom links to the SO sidebar
// @author       You
// @match        https://*.stackexchange.com/*
// @match        https://*.stackoverflow.com/*
// @match        https://*.superuser.com/*
// @match        https://*.serverfault.com/*
// @match        https://*.askubuntu.com/*
// @match        https://*.stackapps.com/*
// @match        https://*.mathoverflow.net/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=stackoverflow.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    /*
     * A quick explanation of this section:
     * 'navbar' is the entire navbar
     * within 'navbar', we have groups of links - the new group I'm adding is called 'navbar_section'
     * Each section is just a <ol> of elements - within our section, we create 'container' to house the items in our sesction
     * Each item in our 'container' is something within a <li>
     * The first thing in our container is the title. We make an li for it ('text-header'), and then we put the title itself in a div. This div is called 'txet_header_div'
     * Then, for the links, we just make an <a> element within a <li> for each, and then put said <li> back into 'container'
     */
    let navbar = document.getElementsByClassName("nav-links")[0];
    let navbar_section = document.createElement("li");
    let container = document.createElement("ol");
    container.className = "nav-links";
    let text_header = document.createElement("li");
    text_header.className = "d-flex ai-center jc-space-between ml8 mt24 mb4 js-create-team-cta";
    let txet_header_div = document.createElement("div");
    txet_header_div.innerText = "Custom Links";
    txet_header_div.classList = "flex--item tt-uppercase fs-fine fc-light";
    text_header.appendChild(txet_header_div);
    container.appendChild(text_header);
    navbar_section.appendChild(container);
    navbar.appendChild(navbar_section);

    let URLs = new Map();

    /// CUSTOM LINKS GO HERE ///
    URLs.set("SO Teams Site", "https://stackoverflowteams.com");
    URLs.set("Google", "https://google.com");

    URLs.forEach((v, k) => {
        var li_for_a = document.createElement("li");
        li_for_a.classList = "ps-relative";
        var link = document.createElement("a");
        link.href = v;
        link.className = "js-gps-track nav-links--link";
        link.innerText = k;
        li_for_a.appendChild(link);
        container.appendChild(li_for_a);
    });
})();
