$(document).ready(function() {
    $("#afficher").click(function() {
        $("#texte").fadeIn();
    });

    $("#cacher").click(function() {
        $("#texte").fadeOut();
    });
});
