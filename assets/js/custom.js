<!-- jQuery first, then Popper.js, then Bootstrap JS -->

window.onload = function () {
    var wrapper = document.querySelector('.tekrevol-slider'),
        layerOne = document.querySelector('.bulb1'),
        layerTwo = document.querySelector('.bulb2'),
        icon1 = document.querySelector('.bulb6');
    if (layerOne != undefined && layerTwo != undefined && icon1 != undefined ) {
        wrapper.addEventListener('mousemove', function (e) {
            var pageX = e.clientX,
                pageY = e.clientY;
            layerOne.style.webkitTransform = 'translateX(' + pageX / 25 + '%) translateY(' + pageY / 25 + '%)',
                layerOne.style.transform = 'translateX(' + pageX / 25 + '%) translateY(' + pageY / 25 + '%)',
                layerTwo.style.webkitTransform = 'translateX(' + pageX / 30 + '%) translateY(' + pageY / 30 + '%)',
                layerTwo.style.transform = 'translateX(' + pageX / 30 + '%) translateY(' + pageY / 30 + '%)',
                icon1.style.webkitTransform = 'translateX(' + pageX / 30 + '%) translateY(' + pageY / 30 + '%)',
                icon1.style.transform = 'translateX(' + pageX / 30 + '%) translateY(' + pageY / 30 + '%)',
                wrapper.style = 'background-position:' + pageX / 100 + 'px center';
        });
    }
};
jQuery("#myModal").on("show.bs.modal", function (a) {
    $("#myModal iframe").attr("src", $(a.relatedTarget).data("iframe"))
}), jQuery("#myModal").on("hidden.bs.modal", function (a) {
    $("#myModal iframe").attr("src", "")
});

$(window).scroll(function () {
    var e = jQuery(window).scrollTop();
    e > 85 && jQuery("#header-4").addClass("fixed"), e < 86 && jQuery("#header-4").removeClass("fixed")
});

function openNav() {
    document.getElementById("mySidepanel").style.width = "250px"
}

function closeNav() {
    document.getElementById("mySidepanel").style.width = "0"
}




$(window).scroll(function () {
    var s = jQuery(window).scrollTop();
    s > 700 && jQuery(".side-bars").addClass("show-side"), s < 699 && jQuery(".side-bars").removeClass("show-side")
});




$(window).on("load", function () {
    var meta_title = $('meta[name=title]').attr('content');
    var meta_description = $('meta[name=description]').attr('content');
    $('head').append('<meta property="og:title" content="' + meta_title + '"/>');
    $('head').append('<meta property="og:description" content="' + meta_description + '"/>');
});


function openCity(e, s) {
    var o, t, l;
    for (t = document.getElementsByClassName("tabcontent"), o = 0; o < t.length; o++) t[o].style.display = "none";
    for (l = document.getElementsByClassName("tablinks"), o = 0; o < l.length; o++) l[o].className = l[o].className.replace(" active", "");
    document.getElementById(s).style.display = "block", e.currentTarget.className += " active"
};

$(document).ready(function () {
    $(".home-feature-slider").slick({
        slidesToShow: 8,
        slidesToScroll: 1,
        infinite: false,
        autoplay: true,
        autoplaySpeed: 3e3,
        dots: !1,
        loop: false,
        arrows: !1,
        responsive: [{breakpoint: 768, settings: {slidesToShow: 3.3}}, {
            breakpoint: 480,
            settings: {slidesToShow: 1}
        }]
    }), $(".home-test-slider").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: !1,
        autoplaySpeed: 3e3,
        dots: !1,
        infinite: false,
        arrows: !0,
        loop: !1,
        responsive: [{breakpoint: 1450, settings: {slidesToShow: 3}}, {
            breakpoint: 1200,
            settings: {slidesToShow: 2.65}
        }, {breakpoint: 900, settings: {slidesToShow: 2}}, {breakpoint: 480, settings: {slidesToShow: 1}}]
    }), $(".home-badges-slider").slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: !0,
        infinite: !1,
        autoplaySpeed: 3e3,
        dots: !1,
        arrows: !0,
        loop: !1,
        responsive: [{
            breakpoint: 1800,
            settings: {
                slidesToShow: 4.6
            }
        }, {breakpoint: 1500, settings: {slidesToShow: 4.6}}, {
            breakpoint: 1299,
            settings: {slidesToShow: 3.1}
        }, {breakpoint: 900, settings: {slidesToShow: 2.7}}, {breakpoint: 480, settings: {slidesToShow: 1}}]
    }), $(".home-slick-slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: !0,
        autoplaySpeed: 3e3,
        dots: !0,
        arrows: !1
    }), $(".technology").slick({
        slidesToShow: 3,
        autoplay: !0,
        lazyLoad: 'ondemand',
        autoplaySpeed: 3e3,
        slidesToScroll: 1,
        
        dots: !1,
        arrows: !1,
        responsive: [{breakpoint: 900, settings: {slidesToShow: 4}}, {
            breakpoint: 480,
            settings: {slidesToShow: 1, autoplay: !0, autoplaySpeed: 3e3}
        }]
    })
});


document.addEventListener("DOMContentLoaded", function() {
    var e;
    if ("IntersectionObserver" in window) {
        e = document.querySelectorAll(".lazy");
        var o = new IntersectionObserver(function(e, s) {
            e.forEach(function(e) {
                if (e.isIntersecting) {
                    var s = e.target;
                    (s.src = s.dataset.src), s.classList.remove("lazy"), o.unobserve(s);
                }
            });
        });
        e.forEach(function(e) {
            o.observe(e);
        });
    } else {
        var s;

        function a() {
            s && clearTimeout(s),
                (s = setTimeout(function() {
                    var o = window.pageYOffset;
                    e.forEach(function(e) {
                        e.offsetTop < window.innerHeight + o && ((e.src = e.dataset.src), e.classList.remove("lazy"));
                    }),
                    0 == e.length && (document.removeEventListener("scroll", a), window.removeEventListener("resize", a), window.removeEventListener("orientationChange", a));
                }, 20));
        }
        (e = document.querySelectorAll(".lazy")), document.addEventListener("scroll", a), window.addEventListener("resize", a), window.addEventListener("orientationChange", a);
    }
});
