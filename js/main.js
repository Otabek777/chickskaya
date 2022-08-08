if(document.querySelector(".jobs__accordion")) {
    $(".jobs__accordion .btn").click(function() {
        $(this).toggleClass("active");
    });
};