$(document).ready(function () {
    $(window.scroll).scroll(function () {
        if(window.pageYOffset > 100){
            $(".arrow-up-wrap").removeClass("hide")
        }else {
            $(".arrow-up-wrap").addClass("hide")
        }
    })
})
function onScrollDownBtnClick(){
    $("html, body").animate({
        scrollTop: $(".projects-page").offset().top - 10
    }, "slow");
    console.log($("body").offset().top)
}

