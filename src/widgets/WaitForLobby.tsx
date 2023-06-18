import { FC } from "react";
import { CopyToClipboard } from ".";
import { ICreateLobbyResponse } from "../interfaces";

interface IWaitForLobbyProps {
  lobbyId: ICreateLobbyResponse["link"];
}

const WaitForLobby: FC<IWaitForLobbyProps> = ({ lobbyId }) => {
  return (
    <>
      <CopyToClipboard text={lobbyId} />
    </>
  );
};

export default WaitForLobby;
