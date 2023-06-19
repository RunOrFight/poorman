import { Card, Hand, Progress, Side, Hero, Field } from "../ui";
import { useState } from "react";
import { EndTurnButton, Player } from "../widgets";

const CardsInHand = [{ id: "1" }, { id: "2" }, { id: "3" }];

const GamePage = () => {
  const [isDropped, setIsDropped] = useState(false);

  return (
    <div id="bg" className="bg-contain w-full h-full">
      <div className="flex w-full h-full">
        <Side extraClassName="justify-end">
          <Hero />
        </Side>

        <div className="flex flex-col h-full w-full">
          <div className="h-full w-full"></div>

          <div className="w-full h-10">
            <img src="src/assets/devider.png" />
          </div>

          <Player />
        </div>

        <Side extraClassName="justify-start items-center">
          <Hero />
          <div className="h-full flex items-center">
            <EndTurnButton />
          </div>
        </Side>
      </div>
    </div>
  );
};

export default GamePage;
