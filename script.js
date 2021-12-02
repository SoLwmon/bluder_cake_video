var video = document.querySelector('.video');
var bar = document.querySelector('.timestamp');
var progress = document.querySelector('.timestamp');
var btn = document.getElementById('play-pause');
var currentTimeElement = document.querySelector('.current');
var durationTimeElememnt = document.querySelector('.duration');

//play & pause button
function togglePlayPause() {
    if(video.paused) {
        btn.className = 'pause';
        video.play();
    }
    else {
        btn.className = 'play';
        video.pause();
    }
}

btn.onclick = function() {
    togglePlayPause();
}

//video progress bar
video.addEventListener('timeupdate', function() {
    var barPosition = video.currentTime / video.duration;
    bar.style.width = barPosition * 100 + "%";

    if(video.ended) {
        btn.className = "play";
    }
})

//interactive progress bar
progress.addEventListener('click', (e) => {
    var progressTime = (e.offsetX  /progress.offsetWidth) * video.duration;
    video.currentTime = progressTime;
})

//current time & duration
var currentTime = () => {
    let currentMinutes = Math.floor(video.currentTime / 60);
    let currentSeconds = Math.floor(video.currentTime - currentMinutes * 60);
    let durationMinutes = Math.floor(video.duration / 60);
    let durationSeconds = Math.floor(video.duration - durationMinutes * 60);

    currentTimeElement.innerHTML = `${currentMinutes}:${currentSeconds < 10 ? '0'+currentSeconds : currentSeconds}`;
    durationTimeElememnt.innerHTML = `${durationMinutes}:${durationSeconds}`;
}

video.addEventListener('timeupdate', currentTime)