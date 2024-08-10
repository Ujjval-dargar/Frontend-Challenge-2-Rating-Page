var selected = '0';

$(".rate").click(function () {
    $(".rate").removeClass("pressed");
    var curr = $(this);
    if (selected === curr.text()) {
        curr.addClass("pressed");
        selected = '0';
    } else {
        selected = curr.text();
    }
    curr.toggleClass("pressed");

});


$(".btnn").click(function () {
    $(this).addClass("pressed");
    setTimeout(function () {
        $(".btnn").removeClass("pressed");
    }, 200);

    if (selected === '0') {
        $(".no-selected-text").fadeIn();
    } else {
        $(".star-selected-text").text("You selected " + selected + " out of 5");
        $(".main").fadeOut(function () {
            $(".thank-page").fadeIn();
        });
    }
});