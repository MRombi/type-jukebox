import { FC } from "react";
import { PlayListTitle } from "./Types";

const Header: FC<PlayListTitle> = ({ playListTitle }): JSX.Element => {
  return <h1>{playListTitle}</h1>;
};

export default Header;
