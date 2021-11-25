//create a component for play-pause button
AFRAME.registerComponent('play-pause', {
    init: function() {
        var video = document.getElementById('#bluder-cake');
        var btn = document.getElementById('#playpause');

        this.el.addEventListener('click', function() {
            if(video.paused) {
                video.play();
                btn.setAttribute('src', '#pause');
            }
            else {
                video.pause();
                btn.setAttribute('src', '#play');
            }
        });
    }
});
