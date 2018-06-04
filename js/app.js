$(function () {

    const birdName = $('.flex-container span');
    const description = $('.flex-container p');
    description.slideUp();

    birdName.on ('click', function() {
       const $this = $(this);
       $this.parent().parent().find('.description p').slideToggle();
    })

// Add sounds on image click

    const sojkaImg = $('.sojka');
    const sojkaSnd = new Audio ('sounds/porg.mp3')

    sojkaImg.on ('click', function() {
        playSound(sojkaSnd);
    });


    function playSound(bird) {
        bird.play();
    }

});