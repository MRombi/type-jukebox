import { FC } from "react";
import { PlayCountsProps } from "./Types";

const PlayCounts: FC<PlayCountsProps> = ({
  playCounts,
  song,
  // setCount,
}): JSX.Element => {
  // setCount() not sure if I could use it from here?
  return <p>{playCounts[song.title]}</p>;
};

export default PlayCounts;
