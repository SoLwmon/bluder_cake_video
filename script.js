var video = document.querySelector('video');
var btn = document.getElementById('play');
var progress = document.querySelector('timestamp');
var currentTimeElement = document.querySelector('current');
var durationTimeElememnt = document.querySelector('duration');

//play & pause button
function togglePlayPause() {
    if(video.paused) {
        btn.innerHTML = '<i class="fa fa-play"></i>';
        video.play();
    }
    else {
        btn.innerHTML = '<i class="fa fa-pause"></i>';
        video.pause();
    }
}

//Update progress
function updateProgress() {
    progress.value = (video.currentTime / video.duration) * 100;
}

//current time & duration
var currentTime = () => {
    let currentMinutes = Math.floor(video.currentTime / 60);
    let currentSeconds = Math.floor(video.currentTime - currentMinutes * 60);
    let durationMinutes = Math.floor(video.duration / 60);
    let durationSeconds = Math.floor(video.duration - durationMinutes * 60);

    currentTimeElement.innerHTML = `${currentMinutes}:${currentSeconds < 10 ? '0'+currentSeconds : currentSeconds}`;
    durationTimeElememnt.innerHTML = `${durationMinutes}:${durationSeconds}`;
}

//Set video time to progress
function setVideoProgress() {
    video.currentTime = (+progress.value * video.duration) / 100;
}

//Event Listener
video.addEventListener('click', togglePlayPause);
btn.addEventListener('click', togglePlayPause);
video.addEventListener('timeupdate', updateProgress);
progress.addEventListener('change', setVideoProgress);