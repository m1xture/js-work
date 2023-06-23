// const playlist = {
//   name: "Ukraine top 2023",
//   rating: 9.8,
//   tracks: [
//     {
//       trackName: "STEFANIA",
//       trackDuration: 3.0,
//       trackLanguage: "Ukrainian",
//       isPopular: true,
//     },
//     {
//       trackName: "Гімн України",
//       trackDuration: 4.0,
//       trackLanguage: "Ukrainian",
//       isPopular: true,
//     },
//     {
//       trackName: "Ой у лузі",
//       trackDuration: 1.5,
//       trackLanguage: "Ukrainian",
//       isPopular: true,
//     },
//   ],
//   theme: {
//     color: "dark",
//     background: "custom",
//     textColor: "white",
//   },
//   showTrack(playlist) {
//     console.log(playlist);
//     const trackFind = this.tracks[1];
//     console.log(trackFind);
//     console.log(trackFind.trackName);
//   },
//   changeName(newName) {
//     this.tracks[2].trackName = newName;
//   },
//   countTracks() {
//     return this.tracks.length;
//   },
// };

// playlist.showTrack();

// playlist.changeName("Cha-cha-cha");

// const trackNum = playlist.countTracks();

//? next lesson

// for (const elem in playlist) {
//   console.log(elem);
//   console.log(playlist[elem]);
// }

const feedback = {
  good: 10,
  neutral: 7,
  bad: 3,
};

const keys = Object.keys(feedback);
console.log(keys);

let totalSum = 0;
for (const mark of keys) {
  totalSum += feedback[mark];
};
console.log(totalSum);

const marks = Object.values(feedback);
let totalSum2 = 0;

for (const mark of marks) {
  totalSum2 += mark;
};

console.log(totalSum);



//?



const friends = [
  {
    name: "Illya",
    age: 14,
    category: "html/css",
  },
  {
    name: "Semen",
    age: 13,
    category: "JS"
  },
  {
    name: "Michael",
    age: 13,
    category: "html"
  },
  {
    name: "Vitaliy",
    age: 13,
    category: "html/css"
  },
  {
    name: "Yakov",
    age: 29,
    category: "html/sass"
  },
  {
    name: "met",
    age: 25,
    category: "html/css"
  },
  {
    name: "Ruslan",
    age: 14,
    category: "html/css"
  }
];

for (const friend of friends) {
  friend.duration = "1 year";
  friends[0].duration = "0.9 year"
}