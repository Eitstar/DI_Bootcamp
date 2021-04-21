let prompts = [
    'Type your name',
    'Type an adjective',
    'Type a noun'
];


var result = [];



var currentPrompt = 0;

$(document).ready(function() {
    $('button').click(function() {
        showNewPrompt();
    });
});

function showNewPrompt() {


    if (currentPrompt != 0) {

        result.push($('input').val());
    }


    if (currentPrompt < prompts.length) {

        $('.string').html(prompts[currentPrompt] + '<br><input type="text">');

        currentPrompt = currentPrompt + 1;
    } else {
        arrayContent();
    }

}


function arrayContent() {
    $('.string').html('This is the story of <span class="filler">' + result[0] + '</span> and the <span class="filler">' + result[1] + '</span> <span class="filler">' + result[2] + '</span>.');

    $('content').hide();
}