$(document).ready( () => {
    if ($("#switch").prop("checked")) {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
    }
});

$("#switch").on("click", () => {
    if($("#switch").prop("checked")) {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
    }
});