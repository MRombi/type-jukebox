import { FC } from "react";
import PlayCounts from "./PlayCounts";
import { SongProps } from "./Types";

const Songs: FC<SongProps> = ({
  songs,
  currentlyPlaying,
  playCounts,
  setCount,
}): JSX.Element => {
  return (
    <>
      <p className="song-current">{currentlyPlaying}</p>
      <ol className="song-list">
        {songs.map((song) => {
          return (
            <li key={song.id} className="song-item">
              <h2>{song.title}</h2>
              <p>{song.artist}</p>
              <img className="song-img" src={song.albumCover} />
              <iframe>{song.previewURL}</iframe>
              <PlayCounts
                playCounts={playCounts}
                song={song}
                setCount={setCount}
              />
            </li>
          );
        })}
      </ol>
    </>
  );
};

export default Songs;
