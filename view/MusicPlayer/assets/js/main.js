var musicApi = "http://localhost:3000/music";

let start = () => {
    getSongs(renderFrame);
};

start();

function getSongs(callback) {
    fetch(musicApi).
    then(Response => {
        return Response.json();
    }).then(callback);
}

function renderFrame(songs) {
    var Frame = document.querySelector('#list-music');
    var html = songs.map(song => {
        return `
            <li class="class-li-${song.id}">
                <div class="music-box">
                    <div class="avatar-block">
                        <a href="#" class="${song.link}" onclick="playMusicFunc('${song.link}', '${song.name}', '${song.singer}', '${song.time}', '${song.picture}')">
                            <img src="${song.picture}"      title="Picture ${song.name}">
                            <i class="ti-control-play play-icon"></i>
                        </a>
                    </div>
                    <div class="info-block">
                        <a href="" onclick="playMusicFunc(${song.link})"><h4>${song.name}</h4></a>
                        <a href="" onclick="playMusicFunc(${song.link})"><p>${song.singer}</p></a>
                    </div>
                    <div class="func-icon">
                        <a href="#"><i class="ti-heart"></i></a>
                        <a href="#"><i class="ti-microphone-alt"></i></a>
                        <a href=""><i class="ti-info-alt"></i></a>

                    </div>
                    <div class="time-class-${song.id} time-class">
                        <span>${song.time}</span>
                    </div>
                </div>
            </li>
        `;
    });

    Frame.innerHTML = html.join('');
}

function playMusicFunc(link, name1, name2, time, picture) {
    var audioBox = document.querySelector('#song-audio-tag');
    let playIcon = document.querySelector('.play');
    let Timeduration = document.querySelector('.duration');
    let Timeremaining = document.querySelector('.remaining');
    let avatar = document.querySelector('#avatar-music');
    avatar.src = picture;
    playIcon.classList.add('ti-control-pause');
    audioBox.src = link;
    song.play();

    let nameSong = document.querySelector('.name-song');
    let nameSinger = document.querySelector('.name-singer');
    nameSong.textContent = name1;
    nameSinger.textContent = name2;
    Timeduration.textContent = '0:00';
    Timeremaining.textContent = time;
}