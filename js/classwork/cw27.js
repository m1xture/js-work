const playlist = {
  name: "Ukraine top 2023",
  rating: 9.8,
  tracks: [
    {
      trackName: "STEFANIA",
      trackDuration: 3.0,
      trackLanguage: "Ukrainian",
      isPopular: true,
    },
    {
      trackName: "Гімн України",
      trackDuration: 4.0,
      trackLanguage: "Ukrainian",
      isPopular: true,
    },
    {
      trackName: "Ой у лузі",
      trackDuration: 1.5,
      trackLanguage: "Ukrainian",
      isPopular: true,
    },
  ],
  theme: {
    color: "dark",
    background: "custom",
    textColor: "white",
  },
  showTrack(playlist) {
    console.log(playlist);
    const trackFind = this.tracks[1];
    console.log(trackFind);
    console.log(trackFind.trackName);
  },
  changeName(newName) {
    this.tracks[2].trackName = newName;
  },
  countTracks() {
    return this.tracks.length;
  },
};

playlist.showTrack();

playlist.changeName("Cha-cha-cha");

const trackNum = playlist.countTracks();