// ==UserScript==
// @name         Product Hunt direct Links
// @namespace    http://www.weekendr.eu
// @version      0.1
// @description  try to take over the world!
// @author       Weekendr
// @match        https://www.producthunt.com/
// @updateURL    https://raw.githubusercontent.com/Bonapara/Product-Hunt-Direct-Links/master/productHuntsDirectLinks.user.js
// ==/UserScript==


var links = document.querySelectorAll(".item_54fdd .minorActions_57e55")
for (i = 0; i < links.length; ++i) {
    links[i].style.display = "block";
}
