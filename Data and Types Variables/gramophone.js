function gramophone (bandName, albumName, SongName) {

    let songDuration = (albumName.length * bandName.length * SongName.length) / 2;
    let rotationsCount = Math.ceil(songDuration / 2.5);

    console.log(`The plate was rotated ${rotationsCount} times.`);
}

gramophone('Black Sabbath', 'Paranoid', 'War Pigs');