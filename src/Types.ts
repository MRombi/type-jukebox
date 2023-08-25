import { Dispatch, SetStateAction } from "react";
export type PlayListTitle = {
  playListTitle: string;
};

export type Song = {
  id: number;
  title: string;
  artist: string;
  albumCover: string;
  previewURL: string;
};

export type PlayCountsProps = {
  playCounts: {
    [key: string]: number;
  };
  song: Song;
  setCount: Dispatch<SetStateAction<number>>;
};

export interface SongProps {
  songs: Song[];
  currentlyPlaying: string;
  playCounts: {
    [key: string]: number;
  };
  setCount: Dispatch<SetStateAction<number>>;
}
