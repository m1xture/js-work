//todo: objects

const playlist = {
    name: "Ukraine top 2023",
    rating: 9.8,
    tracks: [
        {
            trackName: "STEFANIA",
            trackDuration: 3.00,
            trackLanguage: "Ukrainian",
            isPopular: true,
        },
        {
            trackName: "Гімн України",
            trackDuration: 4.00,
            trackLanguage: "Ukrainian",
            isPopular: true,
        },
        {
            trackName: "Ой у лузі",
            trackDuration: 1.50,
            trackLanguage: "Ukrainian",
            isPopular: true,
        }
    ],
    theme: {
        color: "dark",
        background: "custom",
        textColor: "white",

    }
};

const showPlaylist = (playlist) => {
    console.log(playlist);
    const trackFind = playlist.tracks[1];
    const trackName = trackFind.trackName;
    console.log(trackName);
    console.log(playlist.theme.color);
}

showPlaylist(playlist);

//?

// const tracksList = "tracks";
// console.log(playlist.popularity = true);
// //? different ways
// console.log(playlist['tracks']);
// console.log(playlist.tracks);

// console.log(playlist[tracksList]);

//?

// const themeeBg = "backgroundColor";
// const themeeValue = "white";
// const themee = {
//     [themeeBg]: themeeValue,
// };
// console.log(themee);

//? вычисляющее свойство

// const themeBg = "backgroundColor";
const themeColor = "red";
const themeWide = 234;
const themeCard = {
    themeColor,
    themeWide,
};
console.log(themeColor.[themeColor]);