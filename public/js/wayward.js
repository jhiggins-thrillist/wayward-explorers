if (!Modernizr.svg) {
    $('#logoImage').prop('src', '/images/logo_badge.png');
}

// $(document).ready(function () {
    var animationend = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

    // Animation
    $('#logo').addClass('animated fadeInUpBig').one(animationend, function () {
        $('#mail').addClass('animated fadeInUp');
        $('.left').addClass('animated fadeInLeft');
        $('.right').addClass('animated fadeInRight');
        $(this).addClass('loaded');
    });

// });

$(document).foundation({
    orbit: {
        navigation_arrows: false,
        slide_number: false,
        bullets: false,
        timer: false
    }
});

// $(document).ready(function() {
//     var BV = new $.BigVideo();
//     BV.init();
//     BV.show('/video/yoga2.mp4', {
//         ambient: true
//     });
// });

function launchWS(winName) {
    // window height and width
    myHeight = screen.height*.80;
    myWidth = 784;

    //widow height bounds
    if ( myHeight < 556 ) {
        myHeight = 556;
    } else if (myHeight>700) {
        myHeight = 700;
    }

    //get screen size, and cacl center screen positioning
    var height = screen.height;
    var width = screen.width;
    var leftpos = width / 2 - myWidth / 2;
    var toppos = (height / 2 - myHeight / 2) - 40;

    //open window
    msgWindow=window.open(winName,"ws_window","toolbar=no,location=no,directories=no,resizable=yes,menubar=no,scrollbars=no,status=yes,width="
                        + myWidth + ",height="+ myHeight + ", left="
                        + leftpos + ",top=" + toppos);

    //focus window
    setTimeout('msgWindow.focus()',1);
}

$('#logo').click(launchWS.bind(this, 'http://clients.mindbodyonline.com/ws.asp?studioid=182732&stype='));
