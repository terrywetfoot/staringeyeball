/*eslint-env es8*/
$(document).ready(() => {

//Eyeball light switch
$('#eyeball').on('click', function() {
    $('body').toggleClass('light-mode');
});

//Pillar/Logo Menu toggle
$('#pillars, #Logo').on('click', function() {
    $('body').toggleClass('sidebon');
});

    
//Story function
$('#button-cc').on('click', function() {
    
    let title = $('.story-title').val();
    let date = new Date().toLocaleDateString();
    let storyContent = $('.story-content').val();
    
    const cicImprovTitle = ["Proin quis arcu", "Nec mi dictum interdum", "Nulla eget metus", "Eget tortor euismod", "Interdum sit", "Amet eu lorem", "Praesent porta est ut", "Arcu dapibus mattis", "Morbi ut sem ut", "Sapien laoreet"]
    
    const cicImprovStory = ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut velit dolor. Nam sit amet dui sed dui eleifend suscipit sed ut justo. Sed auctor arcu ac varius ullamcorper.", "Curabitur a ex imperdiet, sollicitudin erat vitae, fermentum ex. Sed id est in tortor consectetur hendrerit quis id lorem. Quisque ultricies odio vitae lobortis porttitor. Morbi ac enim venenatis, blandit nibh rhoncus, maximus mauris.", "Sed vel dictum lectus, euismod ullamcorper nibh. Maecenas iaculis imperdiet augue vel commodo. Fusce rutrum felis quis auctor mollis. Ut in feugiat urna. Aenean ultrices egestas massa, eu fermentum enim luctus a.", "Pellentesque molestie turpis quam, id pharetra ante posuere eget. Curabitur egestas ultricies lorem, eu vehicula neque fermentum vel.","Nulla tellus lorem, scelerisque ac blandit quis, euismod non augue. Vestibulum vitae nisl lobortis, pharetra turpis nec, dignissim dolor. Aenean luctus tellus a eleifend mollis. Pellentesque gravida, enim ac eleifend placerat, sem ante auctor orci, vitae ultricies lorem lorem eget ex. Proin luctus, leo id convallis egestas, ligula lorem pretium mi, a tristique nisi nisl vitae lectus.", "Proin at libero ultrices, viverra elit at, eleifend augue. Nulla eu luctus eros."]
    
    if ($('.story-title').val() <1) {
    title = cicImprovTitle[Math.floor((Math.random()) * cicImprovTitle.length)]
    };
    
    if ($('.story-content').val() <1) {
    storyContent = cicImprovStory[Math.floor((Math.random()) * cicImprovStory.length)]
    };

    let $newStory = `
    <div class="Story">
    <h2>${title}</h2>
    <h4>${date}</h4>
    <p>${storyContent}</p>
    </div>`;
    
    $('#Content').append($newStory); 
});    
    
    
    
    
    
    
}); //document ready end.
