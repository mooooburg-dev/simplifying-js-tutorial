function geMusic(theme) {
  if (theme === "dusk") {
    return Promise.resolve({
      album: "music for airports"
    });
  }
}
