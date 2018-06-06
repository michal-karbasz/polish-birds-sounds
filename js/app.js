$(function () {


// Slide down/up on click
    
    const birdName = $('.flex-container span');
    const titImage = $('.flex-row-inner img'); //it's a bird image, not a...you know...
    const titName = $('.flex-row-inner span');
    const description = $('.flex-container p');
    const noteImage = $('.flex-container .col');
    const birdImage = $('.flex-container .col>img');


    description.slideUp();

    birdName.on ('click', function() {
       const $this = $(this);
       $this.parent().parent().find('.description p').slideToggle();
       titName.css('display') == 'none' ? titName.css('display', 'block') : titName.css('display', 'none');
       titImage.css('display') == 'none' ? titImage.css('display', 'block') : titImage.css('display', 'none');
    })

//Add sound icon on mouse enter remove on mouseleave

    birdImage.on('mouseover', function() {
        const $this = $(this);
        const notesImg = $('<img>')
        notesImg.attr('src', 'img/sing.jpg');
        notesImg.addClass('notes');
        notesImg.addClass($this.attr('class'))
        $this.parent().append(notesImg);
    
    })


    noteImage.on('mouseleave', '.notes', function() {
        const $this = $(this);
            $this.remove();
    })

// Add sounds on image click

    const sojkaImg = $('.sojka');
    const sojkaSnd = new Audio ('sounds/porg.mp3')


    noteImage.on('click', '.sojka', function() {
        playSound(sojkaSnd);
    })


// function to run bird's voice - new Audio is the parameter

    function playSound(bird) {
        bird.play();
    }

});