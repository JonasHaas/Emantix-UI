"use strict";
$(document).ready(function () {
    if ($("#switch").prop("checked")) {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
    }
});

$("#switch").on("click", function () {
    if ($("#switch").prop("checked")) {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
    }
});