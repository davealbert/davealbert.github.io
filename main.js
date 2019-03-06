$(() => {
    $.ajax('https://9u0gb30id0.execute-api.eu-west-1.amazonaws.com/Prod/counter?site=davealberttext')
    .done((res) => {
        console.log(res);
        $('#counter').html(res);
    });

    if (window.shouldrun) {
        window.shouldrun();
    }

    $('.close').on('click', function(event) {
        $('.modal').fadeOut();
    });

    $('.open-modal').on('click', function(event) {
        $('.modal').fadeIn();
    });

    var browserInfo = getBrowser();
    $('.audio audio').each(function() {
        var item = $(this);
        var browser;
        if (browserInfo && browserInfo.browser) {
            browser = browserInfo.browser.toLowerCase();
        }

        //console.log(browser);
        switch(browser) {
            case 'chrome':
                // code
                item.css('border-radius',' 30px');
                break;

            default:
                item.css('border-radius',' 10px');

        }
        item.css('border', '3px solid #2DCCBC');
    });
});

var heroStyle2 = true;
function heroFade() {
    div = $('.hero-wrapper');
    div.fadeOut(() => {

        if (heroStyle2) {
            div.removeClass('stage2');
        } else {
            div.addClass('stage2');
        }
        div.fadeIn();});
    heroStyle2 = !heroStyle2;
}
if ($('.hero-wrapper')) {
    setInterval(heroFade, 6000);
}
