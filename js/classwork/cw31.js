// const numbers = [1, 2, 3, 4, 5];

// //? отдельные числа

// console.log(Math.max(1, 2, 900));

// //? массив

// console.log(Math.max(numbers));

// //? Spread === отдельные числа

// console.log(Math.max(...numbers));

//todo:

// const defaultSettings = {
//     theme: 'light',
//     textColor: 'black',
//     icons: 'Starter pack'
// };

// const userSetings = {
//     theme: 'dark',
//     textColor: 'purple',
// };

// const finalSettings = {
//     ...defaultSettings,
//     ...userSetings
// };

// console.log(finalSettings);

//todo:

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
  location: {
    country: "England",
    area: "de_Orlean",
    city: "orlean",
    postIndex: 345890,
    date: "12.10.1428",
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

const { country, date } = playlist.location;
console.log(date);

const { trackName, trackLanguage } = playlist.tracks[0];

console.log(trackLanguage);