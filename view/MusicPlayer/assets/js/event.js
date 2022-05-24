const playBtn = document.querySelector('.play');
const song = document.querySelector('#song-audio-tag');
const nextBtn = document.querySelector('.next');
const preBtn = document.querySelector('.previous');
let playIcon = document.querySelector('.play');
let checkPlayBtn = true;

let indexSong = 0;

let musicList = ['./locateStorage/sound/bittersweetchocolate.mp3', './locateStorage/sound/LateNightMelancholy.mp3', './locateStorage/sound/Pastlives.mp3', './locateStorage/sound/ineedagirl.mp3', './locateStorage/sound/yoursmile.mp3'];


playBtn.onclick = () => {
    if (checkPlayBtn) {
        song.play();
        checkPlayBtn = false;
        playIcon.classList.add('ti-control-pause');
    } else {
        song.pause();
        checkPlayBtn = true;
        playIcon.classList.remove('ti-control-pause');
    }
};

nextBtn.onclick = () => {
    changeSong(1);
};

preBtn.onclick = () => {
    changeSong(-1);
};

function changeSong(dir) {
    if (dir === 1) {
        if (indexSong >= musicList.length - 1) {
            indexSong = 0;
        } else {
            indexSong++;
        }
    } else if (dir === -1) {
        if (indexSong <= 0) {
            indexSong = musicList.length - 1;
        } else {
            indexSong--;
        }
    }
    song.setAttribute('src', musicList[indexSong]);
    song.play();
    checkPlayBtn = false;
    playIcon.classList.add('ti-control-pause');
}