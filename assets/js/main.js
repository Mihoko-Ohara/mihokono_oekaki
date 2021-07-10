export function hideElement(selector) {
    $(document).on('ready', function() {
        $(".slider").slick({
            autoplay: true,
            autoplaySpeed: 4000,
            dots: true,
        });
    });
}