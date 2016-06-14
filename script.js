var jukebox = {
  name: "Technicolor Beat",
  song: document.getElementById('music'),
  play: false,
  playMusic: function() {
    this.song.play();
  },
  pauseMusic: function() {
    this.song.pause();
  },
  // nextMusic: function() {
  //   this.song.next();
  // }
  stopMusic: function() {
    this.song.pause();
    this.song.currentTime === 0;
  }
}
//These functions play, pause and stop the song by calling the 'jukebox' object.
function playSong() {
  jukebox.play === true;
  jukebox.playMusic();
}
function pauseSong(){
  jukebox.play === false;
  jukebox.pauseMusic();
}
function stopSong() {
  jukebox.play === false;
  jukebox.stopMusic();
}
