window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    var homeBtn = document.getElementById("home");
    var windowHeight = window.innerHeight;
    var scrollPosition = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;

    if (scrollPosition > windowHeight * 2) { 
        homeBtn.style.zIndex = "1";
        homeBtn.style.opacity = "1";
    } else {
        homeBtn.style.zIndex = "-1";
        homeBtn.style.opacity = "0";
    }
}

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}