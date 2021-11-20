AFRAME.registerComponent('play-pause', {
    init: function() {
        var video = document.querySelector('#bluder-cake');
        var btn = document.querySelector('#play-pause');

        this.el.addEventListener('click', function() {
            if(video.paused) {
                video.play();
            }
            else {
                video.pause();
            }
        });
    }
});

AFRAME.addEventListener('timeupdate', function() {
    var bar = document.querySelector('#timestamp');
    var barPosition = video.currentTime / video.durartion;
    bar.style.width = barPosition * 100 + "%";
});

var currentTime = () => {
    let currentMinutes = Math.floor(video.currentTime / 60);
    let currentSeconds = Math.floor(video.currentTime - currentMinutes * 60);
    let durationMinutes = Math.floor(video.duration / 60);
    let durationSeconds = Math.floor(video.duration - durationMinutes * 60);

    currentTimeElement.innerHML = `${currentMinutes}:${currentSeconds < 10 ? '0'+currentSeconds : currentSeconds}`;
    durationTimeElement.innerHTML = `${durationMinutes}:${durationSeconds}`;
}

video.addEventListener('timeupdate', currentTime);