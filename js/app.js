$(function () {

    const birdName = $('.flex-container span');
    const description = $('.flex-container span p');
    description.hide();

    birdName.on ('click', () => {
        this.find('p').slideDown();
    })


});