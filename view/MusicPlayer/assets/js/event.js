const Api = "http://localhost:3000/music";
const playBtn = document.querySelector('.play');
const song = document.querySelector('#song-audio-tag');
const nextBtn = document.querySelector('.next');
const preBtn = document.querySelector('.previous');
let playIcon = document.querySelector('.play');
let checkPlayBtn = true;
const volumeRange = document.querySelector('#range-volume');
let volumeBtn = document.querySelector('.volume');


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

function getArray() {
    fetch(Api)
        .then(Response => {
            return Response.json();
        })
        .then(datas => {
            let x = [];
            let y = [];
            datas.forEach(data => {
                x.push(data.link);
                y.push(data);
            })
            nextBtn.onclick = () => {
                changeSong(1, x, y);
            };

            preBtn.onclick = () => {
                changeSong(-1, x, y);

            };

            function changeSong(dir, x, y) {
                if (dir === 1) {
                    if (indexSong >= x.length - 1) {
                        indexSong = 0;
                    } else {
                        indexSong++;
                    }
                } else if (dir === -1) {
                    if (indexSong <= 0) {
                        indexSong = x.length - 1;
                    } else {
                        indexSong--;
                    }
                }
                let avatar = document.querySelector('#avatar-music');
                let nameSong = document.querySelector('.name-song');
                let nameSinger = document.querySelector('.name-singer');
                avatar.src = y[indexSong].picture;
                nameSong.textContent = y[indexSong].name;
                nameSinger.textContent = y[indexSong].singer;
                song.setAttribute('src', x[indexSong]);
                song.play();
                checkPlayBtn = false;
                playIcon.classList.add('ti-control-pause');
            }
        })
}

getArray();


volumeRange.addEventListener('change', () => {
    song.volume = volumeRange.value / 100;
})

volumeBtn.addEventListener('click', () => {
    if (volumeRange.value != 0) {
        volumeRange.value = 0;
        song.volume = 0;
    } else {
        volumeRange.value = 80;
        song.volume = 80 / 100;
    }
})