var fixedicon = `<a href="#" class="talk-btn">
        <img src="img/layout/talk.svg" alt="">
    </a>

    <a href="#" class="top-btn">
        <img src="img/layout/top-icon.svg" alt="">
    </a>
    
    <script>
    var btn = $('.top-btn');

    console.log("",btn);
    $(window).scroll(function () {
        if ($(window).scrollTop() > 300) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });

    btn.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, '300');
    });

</script>
    `
document.write(fixedicon);




        

 

