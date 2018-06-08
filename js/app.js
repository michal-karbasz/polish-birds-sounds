$(function () {

    const headerBird = $('<img>');
    $(headerBird).attr('src','img/header-icon' + Math.floor(Math.random()* (12 - 1) + 1).toString() + '.png')
    headerBird.insertBefore($('header').find('h1'));

   let random = (Math.floor(Math.random()* (12 - 1) + 1));
   console.log (random)
// Slide down/up on click
    
    const birdName = $('.flex-container span');
    const titImage = $('.flex-row-inner img'); //it's a bird image, not an actual...you know...
    const titName = $('.flex-row-inner span');
    const description = $('.flex-container p');
    const noteImage = $('.flex-container .col');
    const birdImage = $('.flex-container .col>img');

    description.slideUp();

    birdName.on ('click', function() {
       const $this = $(this)
       $this.parent().parent().find('.description p').slideToggle();
       if ($this.parent().find('img').attr('class') === 'bogatka') {
       titName.css('display') == 'none' ? titName.css('display', 'block') : titName.css('display', 'none');
       titImage.css('display') == 'none' ? titImage.css('display', 'block') : titImage.css('display', 'none');
       }
    })

//Add sound icon on mouse enter remove on mouseleave

    birdImage.on('mouseover', function() {
        const $this = $(this);
        const notesImg = $('<img>')
        notesImg.attr('src', 'img/play.png');
        notesImg.addClass('notes');
        notesImg.addClass($this.attr('class'))
        $this.parent().append(notesImg);
    
    })

    noteImage.on('mouseleave', '.notes', function() {
        const $this = $(this);
            $this.remove();
    })

// Add sounds on image click

// Push all birds to an array
const birdArr = [];
const birds = $('.flex-row .col img')
for (let i = 0; i < birdImage.length; i++) {
    birdArr.push($(birdImage[i]).attr('class'))
}

// Assign event to each bird image

// create variable to hold current Audio object (HTML tag)
let currentBird = '';

$.each(birdArr, function (i, val) {
    noteImage.on('click', '.' + val, function() {
         if (currentBird == '') {
             playSound(new Audio ('sounds/' + val + '.mp3'));
             console.log(currentBird);
             console.log(val)
             //if another bird is clicked stop playing currentBird and play the new one
            } else if ($(currentBird).attr('src').indexOf(val) === -1) {
                stopSound();
                playSound(new Audio ('sounds/' + val + '.mp3'));
            // if the same bird is clicked just stop playing
            } else {
                stopSound();
            }
    })
})

// function to run bird's voice - new Audio is the parameter

    function playSound(bird) {
                bird.play();
                currentBird = bird;
            }

// function to stop bird's voice

    function stopSound() {
        currentBird.pause();
        currentBird.currentTime = 0;
        currentBird = '';
    }

});