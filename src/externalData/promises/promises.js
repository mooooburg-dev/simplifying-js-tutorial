function getUserPreferences() {
  const preferences = new Promise((resolve, reject) => {
    resolve({
      theme: "duskError"
    });
  });
  return preferences;
}

function getMusic(theme) {
  if (theme === "dusk") {
    return Promise.resolve({
      album: "music for airports"
    });
  }
  return Promise.reject({
    album: "kind of blue"
  });
}

function getArtist(album) {
  return Promise.resolve({
    artist: "Brian Eno"
  });
}

getUserPreferences()
  .then(preference => getMusic(preference.theme))
  .then(music => getArtist(music.album))
  .then(artist => {
    console.log(artist.artist);
  })
  .catch(e => {
    console.log('error' + e);
  });
